create table ice_candidates (
  id uuid default gen_random_uuid() primary key,
  call_id uuid references calls(id) on delete cascade not null,
  candidate jsonb not null,
  sender_id uuid references auth.users(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS
alter table ice_candidates enable row level security;
create policy "Allow access to participants" on ice_candidates
  for all using (
    exists (
      select 1 from calls
      where calls.id = ice_candidates.call_id
      and (calls.caller_id = auth.uid() or exists (
        select 1 from room_participants
        where room_participants.room_id = calls.room_id
        and room_participants.user_id = auth.uid()
      ))
    )
  );
