-- FIX BLOCKED USERS TABLE AND POLICIES
-- Drop if exists to ensure clean start
DROP TABLE IF EXISTS public.blocked_users CASCADE;

CREATE TABLE public.blocked_users (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  blocker_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  blocked_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(blocker_id, blocked_id)
);

-- Enable RLS
ALTER TABLE public.blocked_users ENABLE ROW LEVEL SECURITY;

-- Block visibility (Only show to the person who blocked)
CREATE POLICY "Block visibility" ON public.blocked_users 
FOR SELECT USING (auth.uid() = blocker_id);

-- Block management (Allow insert/delete for the blocker)
CREATE POLICY "Block management" ON public.blocked_users 
FOR ALL USING (auth.uid() = blocker_id);

-- Explicitly allow service role
GRANT ALL ON public.blocked_users TO service_role;
GRANT ALL ON public.blocked_users TO postgres;
GRANT ALL ON public.blocked_users TO authenticated;

-- Refresh Publication for Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.blocked_users;
