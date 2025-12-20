-- 1. ADD SIGNALING COLUMNS (SAFE)
ALTER TABLE public.calls ADD COLUMN IF NOT EXISTS offer_sdp JSONB;
ALTER TABLE public.calls ADD COLUMN IF NOT EXISTS answer_sdp JSONB;

-- 2. ENABLE REALTIME SAFELY (CHECKS IF ALREADY ADDED)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'calls'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.calls;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'ice_candidates'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.ice_candidates;
  END IF;
END $$;
