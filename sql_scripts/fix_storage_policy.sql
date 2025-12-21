-- Fix Storage Policies for 'gossip-avatars'
-- Run this in the Supabase SQL Editor to enable image uploads

-- 1. Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access" ON storage.objects;

-- 2. Create Policy to Allow Authenticated Uploads (INSERT)
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'gossip-avatars' );

-- 3. Create Policy to Allow Authenticated Updates to own files (UPDATE)
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'gossip-avatars' AND auth.uid() = owner );

-- 4. Create Policy to Allow Public Read Access (SELECT)
CREATE POLICY "Allow public read access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'gossip-avatars' );

-- Note: We removed the 'ALTER TABLE' command as it caused permission errors.
-- Storage RLS is enabled by default in Supabase.
