-- Privacy Features Migration

-- 1. Blocked Users Table
create table if not exists blocked_users (
    id uuid primary key default gen_random_uuid(),
    blocker_id uuid references auth.users(id) on delete cascade not null,
    blocked_id uuid references auth.users(id) on delete cascade not null,
    created_at timestamp with time zone default now(),
    unique(blocker_id, blocked_id)
);

-- RLS
alter table blocked_users enable row level security;

create policy "Users can see who they blocked"
    on blocked_users for select
    using (auth.uid() = blocker_id);

create policy "Users can block others"
    on blocked_users for insert
    with check (auth.uid() = blocker_id);

create policy "Users can unblock"
    on blocked_users for delete
    using (auth.uid() = blocker_id);

-- 2. Add 'last_seen_enabled' to profiles if not exists
alter table profiles add column if not exists last_seen_enabled boolean default true;
