-- Create statuses table
CREATE TABLE IF NOT EXISTS public.statuses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    media_url TEXT NOT NULL,
    caption TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.statuses ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public statuses are viewable by everyone"
ON public.statuses FOR SELECT
USING (true);

CREATE POLICY "Users can upload their own status"
ON public.statuses FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own status"
ON public.statuses FOR DELETE
USING (auth.uid() = user_id);

-- Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.statuses;
