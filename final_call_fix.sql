-- ROBUST DATABASE FIX FOR CALLS
-- This script handles "already exists" errors gracefully

DO $$ 
BEGIN 
    -- 1. Add receiver_id column if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'calls' AND column_name = 'receiver_id') THEN
        ALTER TABLE public.calls ADD COLUMN receiver_id UUID REFERENCES public.profiles(id);
    END IF;

    -- 2. Add offer_sdp column if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'calls' AND column_name = 'offer_sdp') THEN
        ALTER TABLE public.calls ADD COLUMN offer_sdp JSONB;
    END IF;

    -- 3. Add answer_sdp column if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'calls' AND column_name = 'answer_sdp') THEN
        ALTER TABLE public.calls ADD COLUMN answer_sdp JSONB;
    END IF;
END $$;

-- 4. Create ice_candidates table
CREATE TABLE IF NOT EXISTS public.ice_candidates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    call_id UUID REFERENCES public.calls(id) ON DELETE CASCADE,
    sender_id UUID REFERENCES public.profiles(id),
    candidate JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Set Replica Identity
ALTER TABLE public.calls REPLICA IDENTITY FULL;
ALTER TABLE public.ice_candidates REPLICA IDENTITY FULL;

-- 6. Add to Realtime Publication (Safe Way)
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
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Publication update failed or table already added: %', SQLERRM;
END $$;

-- 7. RLS Policies
ALTER TABLE public.calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ice_candidates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own calls" ON public.calls;
CREATE POLICY "Users can view their own calls" ON public.calls
    FOR SELECT USING (auth.uid() = caller_id OR auth.uid() = receiver_id);

DROP POLICY IF EXISTS "Users can insert calls" ON public.calls;
CREATE POLICY "Users can insert calls" ON public.calls
    FOR INSERT WITH CHECK (auth.uid() = caller_id);

DROP POLICY IF EXISTS "Users can update their calls" ON public.calls;
CREATE POLICY "Users can update their calls" ON public.calls
    FOR UPDATE USING (auth.uid() = caller_id OR auth.uid() = receiver_id);

DROP POLICY IF EXISTS "Anyone in a call can see candidates" ON public.ice_candidates;
CREATE POLICY "Anyone in a call can see candidates" ON public.ice_candidates
    FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS "Participants can insert candidates" ON public.ice_candidates;
CREATE POLICY "Participants can insert candidates" ON public.ice_candidates
    FOR INSERT WITH CHECK (auth.uid() = sender_id);
