-- Add missing columns to rooms table
ALTER TABLE public.rooms ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE public.rooms ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Update existing rooms with a default description
UPDATE public.rooms SET description = 'Welcome to the gossip group!' WHERE description IS NULL;
