-- Add push_token column to profiles if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'push_token') THEN
        ALTER TABLE profiles ADD COLUMN push_token TEXT;
    END IF;
END $$;
