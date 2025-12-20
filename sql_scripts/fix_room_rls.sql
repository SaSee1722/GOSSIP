-- Fix Room RLS policy to allow creators to see the room immediately after creation.
-- This prevents "new row violates row-level security policy" errors when creating a room with .select().

-- 1. Drop the existing restriction
drop policy if exists "Room visibility" on public.rooms;

-- 2. Create the relaxed policy
create policy "Room visibility" on public.rooms for select using (
  auth.uid() = created_by OR
  exists (select 1 from public.room_participants where room_id = public.rooms.id and user_id = auth.uid())
);
