-- Force enable realtime for all relevant tables
-- This ensures that messages are broadcasted to all connected clients

begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
  alter publication supabase_realtime add table messages;
  alter publication supabase_realtime add table rooms;
  alter publication supabase_realtime add table room_participants;
  alter publication supabase_realtime add table connections;
  alter publication supabase_realtime add table calls;
  alter publication supabase_realtime add table profiles;
commit;
