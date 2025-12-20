-- GOSSIP MASTER DATABASE SETUP (FUNCTIONAL RESTART)
-- This script implements the core logic for:
-- 1. Real-time Chat & Requests
-- 2. Blocking Logic
-- 3. Group Creation & Admin Rules
-- 4. Call History & Signaling
-- 5. Message Tick System (Sent/Delivered/Read)

-- ==========================================
-- 1. CLEANUP
-- ==========================================

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();

drop table if exists public.ice_candidates cascade;
drop table if exists public.calls cascade;
drop table if exists public.messages cascade;
drop table if exists public.room_participants cascade;
drop table if exists public.rooms cascade;
drop table if exists public.connections cascade;
drop table if exists public.statuses cascade;
drop table if exists public.blocked_users cascade;
drop table if exists public.profiles cascade;

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
  is_online boolean default false,
  last_seen timestamp with time zone default now(),
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

-- BLOCKING LOGIC
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
  name text, -- Group name
  type text check (type in ('direct', 'group')) default 'direct',
  created_by uuid references auth.users(id), -- Admin/Creator
  created_at timestamp with time zone default now()
);

-- ROOM PARTICIPANTS
create table public.room_participants (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role text check (role in ('owner', 'admin', 'member')) default 'member',
  joined_at timestamp with time zone default now(),
  unique(room_id, user_id)
);

-- MESSAGES (Tick behavior: sent, delivered, read)
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  content text,
  message_type text check (message_type in ('text', 'image', 'video', 'audio', 'document')) default 'text',
  media_url text,
  status text check (status in ('sent', 'delivered', 'read')) default 'sent',
  delivered_at timestamp with time zone,
  read_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

-- CALLS (Recents/History)
create table public.calls (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade,
  caller_id uuid references auth.users(id) not null,
  type text check (type in ('audio', 'video')) default 'video',
  status text check (status in ('ringing', 'accepted', 'rejected', 'missed', 'ended')) default 'ringing',
  duration integer default 0, -- in seconds
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

-- Create profile on signup
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

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Backfill existing users
insert into public.profiles (id, username, full_name, avatar_url)
select id, raw_user_meta_data ->> 'username', raw_user_meta_data ->> 'full_name', raw_user_meta_data ->> 'avatar_url'
from auth.users
on conflict (id) do nothing;

-- Helper to find direct room
create or replace function public.get_direct_room(user1 uuid, user2 uuid)
returns uuid
language plpgsql
security definer
as $$
declare
  found_room_id uuid;
begin
  select rp1.room_id into found_room_id
  from public.room_participants rp1
  join public.room_participants rp2 on rp1.room_id = rp2.room_id
  join public.rooms r on r.id = rp1.room_id
  where r.type = 'direct'
    and rp1.user_id = user1
    and rp2.user_id = user2;
  return found_room_id;
end;
$$;

-- ==========================================
-- 4. SECURITY (RLS)
-- ==========================================

alter table public.profiles enable row level security;
alter table public.connections enable row level security;
alter table public.blocked_users enable row level security;
alter table public.rooms enable row level security;
alter table public.room_participants enable row level security;
alter table public.messages enable row level security;
alter table public.calls enable row level security;
alter table public.ice_candidates enable row level security;
alter table public.statuses enable row level security;

-- Policies
create policy "Public visibility" on public.profiles for select using (true);
create policy "Self update" on public.profiles for update using (auth.uid() = id);

create policy "Connections visibility" on public.connections for select using (auth.uid() = requester_id or auth.uid() = addressee_id);
create policy "Connections management" on public.connections for all using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "Block visibility" on public.blocked_users for select using (auth.uid() = blocker_id);
create policy "Block management" on public.blocked_users for all using (auth.uid() = blocker_id);

create policy "Room visibility" on public.rooms for select using (
  exists (select 1 from public.room_participants where room_id = public.rooms.id and user_id = auth.uid())
);
create policy "Room creation" on public.rooms for insert with check (auth.uid() = created_by);
create policy "Room admin delete" on public.rooms for delete using (auth.uid() = created_by);

create policy "Participants visibility" on public.room_participants for select using (true);
create policy "Participants management" on public.room_participants for all using (true);

-- Message policies with Blocking check
create policy "Message visibility" on public.messages for select using (
  exists (select 1 from public.room_participants where room_id = public.messages.room_id and user_id = auth.uid())
);
create policy "Message sending" on public.messages for insert with check (
  auth.uid() = user_id AND 
  NOT exists (
    select 1 from public.blocked_users 
    where (blocker_id = auth.uid() and blocked_id = (select user_id from public.room_participants where room_id = messages.room_id and user_id != auth.uid() limit 1))
    OR (blocked_id = auth.uid() and blocker_id = (select user_id from public.room_participants where room_id = messages.room_id and user_id != auth.uid() limit 1))
  )
);
create policy "Message update stats" on public.messages for update using (true);

create policy "Calls access" on public.calls for all using (true);
create policy "Ice access" on public.ice_candidates for all using (true);
create policy "Status access" on public.statuses for all using (true);

-- ==========================================
-- 5. REALTIME
-- ==========================================

alter table public.profiles replica identity full;
alter table public.connections replica identity full;
alter table public.rooms replica identity full;
alter table public.messages replica identity full;
alter table public.calls replica identity full;
alter table public.ice_candidates replica identity full;

begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table 
    public.profiles, 
    public.connections, 
    public.rooms, 
    public.room_participants, 
    public.messages, 
    public.calls, 
    public.ice_candidates,
    public.statuses;
commit;

grant all on all tables in schema public to postgres, anon, authenticated, service_role;
grant all on all functions in schema public to postgres, anon, authenticated, service_role;
grant all on all sequences in schema public to postgres, anon, authenticated, service_role;
