-- Enable Realtime for relevant tables
begin;
  -- Remove tables from publication if they exist to avoid errors then add them
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
  
  alter publication supabase_realtime add table public.messages;
  alter publication supabase_realtime add table public.rooms;
  alter publication supabase_realtime add table public.room_participants;
  alter publication supabase_realtime add table public.calls;
  alter publication supabase_realtime add table public.ice_candidates;
  alter publication supabase_realtime add table public.connections;
  alter publication supabase_realtime add table public.statuses;
  alter publication supabase_realtime add table public.profiles;
commit;
