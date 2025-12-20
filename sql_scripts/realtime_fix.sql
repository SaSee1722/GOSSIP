-- GOSSIP REALTIME & FINAL SYNC FIX
-- Run this in your Supabase SQL Editor to fix "CHANNEL_ERROR" and sync issues

-- 1. RECREATE PUBLICATION (Fixes Realtime Connection Errors)
DROP PUBLICATION IF EXISTS supabase_realtime;
CREATE PUBLICATION supabase_realtime FOR TABLE 
    public.profiles, 
    public.connections, 
    public.rooms, 
    public.room_participants, 
    public.messages, 
    public.calls, 
    public.ice_candidates,
    public.statuses;

-- 2. ENSURE REPLICA IDENTITY IS FULL (Required for detailed Realtime payloads)
ALTER TABLE public.profiles REPLICA IDENTITY FULL;
ALTER TABLE public.connections REPLICA IDENTITY FULL;
ALTER TABLE public.rooms REPLICA IDENTITY FULL;
ALTER TABLE public.room_participants REPLICA IDENTITY FULL;
ALTER TABLE public.messages REPLICA IDENTITY FULL;
ALTER TABLE public.calls REPLICA IDENTITY FULL;
ALTER TABLE public.ice_candidates REPLICA IDENTITY FULL;
ALTER TABLE public.statuses REPLICA IDENTITY FULL;

-- 3. PERMISSIONS CHECK
-- Ensure the 'authenticated' role can actually use Realtime
GRANT ALL ON TABLE public.connections TO authenticated;
GRANT ALL ON TABLE public.room_participants TO authenticated;
GRANT ALL ON TABLE public.rooms TO authenticated;
GRANT ALL ON TABLE public.messages TO authenticated;
