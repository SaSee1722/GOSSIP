-- Cleanup Zombie Rooms (Rooms without participants)
-- This removes rooms that were created partially during the bug, allowing fresh valid rooms to be created.

delete from public.rooms 
where id not in (select distinct room_id from public.room_participants);
