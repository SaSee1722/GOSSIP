-- DANGER: This script deletes all data from your GOSSIP tables.
-- It does NOT delete your Supabase Auth users. 
-- To delete Auth users, you must do so from the Supabase Dashboard -> Authentication.

BEGIN;
  -- Delete all messages
  DELETE FROM public.messages;
  
  -- Delete all calls and related data
  DELETE FROM public.ice_candidates;
  DELETE FROM public.calls;
  
  -- Delete all connection requests
  DELETE FROM public.connections;
  
  -- Delete all blocks
  DELETE FROM public.blocked_users;
  
  -- Delete all statuses
  DELETE FROM public.statuses;
  
  -- Delete all room-related data
  DELETE FROM public.room_participants;
  DELETE FROM public.rooms;
  
  -- Delete all profiles (Note: Profiles will be re-created automatically if 
  -- the on_auth_user_created trigger is still active and you delete/re-create auth users)
  DELETE FROM public.profiles;

COMMIT;
