-- GOSSIP STORAGE SETUP
-- Run this in your Supabase SQL Editor to enable profile image uploads

-- 1. Create the bucket
insert into storage.buckets (id, name, public)
values ('gossip-avatars', 'gossip-avatars', true)
on conflict (id) do nothing;

-- 2. Allow public access to read avatars
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'gossip-avatars' );

-- 3. Allow authenticated users to upload their own avatar
create policy "Authenticated Upload"
on storage.objects for insert
with check (
  bucket_id = 'gossip-avatars' AND
  auth.role() = 'authenticated'
);

-- 4. Allow users to update/delete their own avatar
create policy "Individual Access"
on storage.objects for all
using (
  bucket_id = 'gossip-avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
);
