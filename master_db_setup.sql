-- GOSSIP MASTER DATABASE SETUP (CLEAN RESTART)
-- This script will:
-- 1. Drop existing tables and functions
-- 2. Create the complete schema
-- 3. Set up triggers and RLS policies
-- 4. Configure Realtime

-- ==========================================
-- 1. CLEANUP
-- ==========================================

-- Drop in reverse dependency order
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();

drop table if exists ice_candidates;
drop table if exists calls;
drop table if exists messages;
drop table if exists room_participants;
drop table if exists rooms;
drop table if exists connections;
drop table if exists statuses;
drop table if exists blocked_users;
drop table if exists profiles;

-- ==========================================
-- 2. CORE TABLES
-- ==========================================

-- PROFILES
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  full_name text,
  avatar_url text,
  bio text,
  age integer,
  phone text,
  gender text,
  is_public boolean default true,
  last_seen_enabled boolean default true,
  last_seen timestamp with time zone,
  is_online boolean default false,
  updated_at timestamp with time zone default now()
);

-- CONNECTIONS (Friend Requests)
create table public.connections (
  id uuid default gen_random_uuid() primary key,
  requester_id uuid references public.profiles(id) on delete cascade not null,
  addressee_id uuid references public.profiles(id) on delete cascade not null,
  status text check (status in ('pending', 'accepted', 'rejected')) default 'pending',
  created_at timestamp with time zone default now() not null,
  unique(requester_id, addressee_id)
);

-- BLOCKED USERS
create table public.blocked_users (
  id uuid default gen_random_uuid() primary key,
  blocker_id uuid references auth.users(id) on delete cascade not null,
  blocked_id uuid references auth.users(id) on delete cascade not null,
  created_at timestamp with time zone default now(),
  unique(blocker_id, blocked_id)
);

-- ROOMS (Chats/Groups)
create table public.rooms (
  id uuid default gen_random_uuid() primary key,
  name text,
  type text check (type in ('direct', 'group')) default 'direct',
  created_by uuid references auth.users(id),
  created_at timestamp with time zone default now()
);

-- ROOM PARTICIPANTS
create table public.room_participants (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role text check (role in ('owner', 'admin', 'member')) default 'member',
  muted_until timestamp with time zone,
  created_at timestamp with time zone default now(),
  unique(room_id, user_id)
);

-- MESSAGES
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  content text,
  message_type text check (message_type in ('text', 'image', 'video', 'audio', 'document')) default 'text',
  media_url text,
  media_meta jsonb,
  status text check (status in ('sent', 'delivered', 'read')) default 'sent',
  reply_to uuid references public.messages(id),
  deleted_for_all boolean default false,
  delivered_at timestamp with time zone,
  read_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

-- CALLS
create table public.calls (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade,
  caller_id uuid references auth.users(id) not null,
  type text check (type in ('audio', 'video')) default 'video',
  status text check (status in ('ringing', 'accepted', 'rejected', 'missed', 'ended')) default 'ringing',
  created_at timestamp with time zone default now(),
  ended_at timestamp with time zone
);

-- ICE CANDIDATES (WebRTC Signaling)
create table public.ice_candidates (
  id uuid default gen_random_uuid() primary key,
  call_id uuid references public.calls(id) on delete cascade not null,
  candidate jsonb not null,
  sender_id uuid references auth.users(id) not null,
  created_at timestamp with time zone default now() not null
);

-- STATUSES (Stories)
create table public.statuses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  media_url text not null,
  caption text,
  created_at timestamp with time zone default now() not null
);

-- ==========================================
-- 3. TRIGGERS & FUNCTIONS
-- ==========================================

-- Trigger function to create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

-- Create the trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Populate profiles for existing users if missing (Crucial after table drops/clean restarts)
insert into public.profiles (id, username, full_name, avatar_url)
select 
  id, 
  raw_user_meta_data ->> 'username', 
  raw_user_meta_data ->> 'full_name', 
  raw_user_meta_data ->> 'avatar_url'
from auth.users
on conflict (id) do nothing;

-- Function to get a direct room between two users
create or replace function public.get_direct_room(user1 uuid, user2 uuid)
returns uuid
language plpgsql
security definer
as $$
declare
  room_id uuid;
begin
  select rp1.room_id into room_id
  from public.room_participants rp1
  join public.room_participants rp2 on rp1.room_id = rp2.room_id
  join public.rooms r on r.id = rp1.room_id
  where r.type = 'direct'
    and rp1.user_id = user1
    and rp2.user_id = user2;
    
  return room_id;
end;
$$;

-- ==========================================
-- 4. SECURITY (RLS)
-- ==========================================

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.connections enable row level security;
alter table public.blocked_users enable row level security;
alter table public.rooms enable row level security;
alter table public.room_participants enable row level security;
alter table public.messages enable row level security;
alter table public.calls enable row level security;
alter table public.ice_candidates enable row level security;
alter table public.statuses enable row level security;

-- Policies (Simplified for development, should be hardened for production)
create policy "Public profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Users can see their connections" on public.connections for select using (auth.uid() = requester_id or auth.uid() = addressee_id);
create policy "Users can manage their connections" on public.connections for all using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "Users can see participants" on public.room_participants for select using (true);
create policy "Users can see rooms" on public.rooms for select using (true);

create policy "Users can see messages in their rooms" on public.messages for select using (true);
create policy "Users can insert messages" on public.messages for insert with check (auth.uid() = user_id);

create policy "Ice candidates access" on public.ice_candidates for all using (true);
create policy "Calls access" on public.calls for all using (true);

create policy "Statuses are viewable by everyone" on public.statuses for select using (true);
create policy "Users can insert their own status" on public.statuses for insert with check (auth.uid() = user_id);

-- ==========================================
-- 5. STORAGE
-- ==========================================

-- Ensure storage bucket exists
insert into storage.buckets (id, name, public) 
values ('chat-media', 'chat-media', true)
on conflict (id) do nothing;

-- Ensure existence of bucket object policies (handling existing ones)
do $$
begin
    create policy "Allow Public Select" on storage.objects for select to public using ( bucket_id = 'chat-media' );
exception when others then
    null;
end;
$$;

do $$
begin
    create policy "Allow Authenticated Uploads" on storage.objects for insert to authenticated with check ( bucket_id = 'chat-media' );
exception when others then
    null;
end;
$$;

-- ==========================================
-- 6. REALTIME
-- ==========================================

-- Enable Realtime
alter table public.messages replica identity full;
alter table public.calls replica identity full;
alter table public.ice_candidates replica identity full;
alter table public.profiles replica identity full;
alter table public.statuses replica identity full;

begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table 
    public.messages, 
    public.rooms, 
    public.room_participants, 
    public.profiles, 
    public.calls, 
    public.ice_candidates, 
    public.connections,
    public.statuses;
commit;

-- Grant permissions to anon and authenticated for direct access
grant all on all tables in schema public to postgres, anon, authenticated, service_role;
grant all on all functions in schema public to postgres, anon, authenticated, service_role;
grant all on all sequences in schema public to postgres, anon, authenticated, service_role;
