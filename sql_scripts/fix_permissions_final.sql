-- Comprehensive Fix for WebRTC Signaling Permissions

-- 1. Ensure tables exist (idempotent-ish check not needed if we assume they exist, but good for safety)
-- (Skipping create statements to avoid errors if they exist, assuming schema is there)

-- 2. Disable RLS to rule out permission issues completely for active development
alter table ice_candidates disable row level security;
alter table calls disable row level security;

-- 3. Grant Explicit Permissions
grant all on table ice_candidates to postgres, anon, authenticated, service_role;
grant all on table calls to postgres, anon, authenticated, service_role;

-- 4. Ensure Realtime Broadcasting is ON
-- Try to add tables, if they are already added, this might throw a warning/error but commonly safe in Supabase editor. 
-- However, "alter publication ... add table" will error if already present. 
-- We can recreate the publication or just try to add and ignore error if user runs it.
-- Better approach: Set REPLICA IDENTITY to FULL (sometimes helps with updates)
alter table ice_candidates replica identity full;
alter table calls replica identity full;

-- Force add to publication (will error if already added, but that's fine, user can ignore "already exists")
do $$
begin
  alter publication supabase_realtime add table ice_candidates;
exception when duplicate_object then
  null;
end;
$$;

do $$
begin
  alter publication supabase_realtime add table calls;
exception when duplicate_object then
  null;
end;
$$;
