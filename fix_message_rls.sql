-- Fix Message RLS to ensure messages can be sent
-- This simplified policy removes complex block checks temporarily to identify if they are the cause of sending failures.

-- 1. Drop existing policies
drop policy if exists "Message sending" on public.messages;
drop policy if exists "Message visibility" on public.messages;

-- 2. Create simplified policies
create policy "Message sending" on public.messages for insert with check (
  auth.uid() = user_id
);

create policy "Message visibility" on public.messages for select using (
  exists (select 1 from public.room_participants where room_id = public.messages.room_id and user_id = auth.uid())
);
