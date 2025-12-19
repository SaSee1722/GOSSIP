-- FIX: Add Storage Policies for 'chat-media'

-- Enable RLS on storage.objects (usually enabled by default, but good to ensure)
-- alter table storage.objects enable row level security;

-- Allow Authenticated users to upload to 'chat-media'
create policy "Allow Authenticated Uploads"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'chat-media' );

-- Allow Public/Authenticated read access
create policy "Allow Public Select"
on storage.objects for select
to public
using ( bucket_id = 'chat-media' );

-- Allow Users to Update/Delete their own files (Optional but good)
create policy "Allow Individual Update"
on storage.objects for update
to authenticated
using ( bucket_id = 'chat-media' and auth.uid() = owner );

create policy "Allow Individual Delete"
on storage.objects for delete
to authenticated
using ( bucket_id = 'chat-media' and auth.uid() = owner );
