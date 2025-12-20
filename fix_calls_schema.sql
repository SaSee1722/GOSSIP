-- 1. ADD RECEIVER_ID TO CALLS (CRITICAL FOR DIRECT CALLS)
ALTER TABLE public.calls ADD COLUMN IF NOT EXISTS receiver_id uuid REFERENCES auth.users(id);

-- 2. ENABLE REALTIME SAFELY
DO $$
BEGIN
  -- Enable for calls table
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'calls'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.calls;
  END IF;

  -- Enable for ice_candidates table
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'ice_candidates'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.ice_candidates;
  END IF;
END $$;

-- 3. ENSURE RLS POLICIES ALLOW CALL ACCESS
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'calls' AND policyname = 'Calls access'
    ) THEN
        CREATE POLICY "Calls access" ON public.calls FOR ALL USING (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'ice_candidates' AND policyname = 'Ice access'
    ) THEN
        CREATE POLICY "Ice access" ON public.ice_candidates FOR ALL USING (true);
    END IF;
END $$;
