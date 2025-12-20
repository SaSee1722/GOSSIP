-- Create connections table for Friend Requests
create table if not exists connections (
  id uuid default gen_random_uuid() primary key,
  requester_id uuid references profiles(id) on delete cascade not null,
  addressee_id uuid references profiles(id) on delete cascade not null,
  status text check (status in ('pending', 'accepted', 'rejected')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(requester_id, addressee_id)
);

-- Add message status columns for "Ticks"
alter table messages add column if not exists status text check (status in ('sent', 'delivered', 'read')) default 'sent';
alter table messages add column if not exists read_at timestamp with time zone;

-- Add "Public/Private" visibility to Profiles
alter table profiles add column if not exists is_public boolean default true;
alter table profiles add column if not exists bio text; -- Ensure bio exists too

-- Disable RLS for easier development
alter table connections enable row level security;
create policy "Allow all access to connections" on connections for all using (true) with check (true);

-- Grant permissions
grant all on connections to postgres, anon, authenticated, service_role;

-- Add to Realtime Publication (FIXED: Removing 'users' which does not exist)
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table messages, rooms, room_participants, profiles, calls, ice_candidates, connections;
commit;
