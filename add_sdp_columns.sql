-- ADD SDP COLUMNS TO CALLS TABLE
ALTER TABLE public.calls ADD COLUMN IF NOT EXISTS offer_sdp JSONB;
ALTER TABLE public.calls ADD COLUMN IF NOT EXISTS answer_sdp JSONB;

-- REFRESH PUBLICATION
ALTER PUBLICATION supabase_realtime ADD TABLE public.calls;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ice_candidates;
