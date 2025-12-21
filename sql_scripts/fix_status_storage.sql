-- Create the status-uploads bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('status-uploads', 'status-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies to ensure clean slate
DROP POLICY IF EXISTS "Allow authenticated status uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public status read access" ON storage.objects;
DROP POLICY IF EXISTS "Give public access to status files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated to insert statuses" ON storage.objects;

-- 1. Create Policy to Allow Authenticated Uploads (INSERT)
CREATE POLICY "Allow authenticated status uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'status-uploads' );

-- 2. Create Policy to Allow Public Read Access (SELECT)
CREATE POLICY "Allow public status read access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'status-uploads' );
