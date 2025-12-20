-- Disable RLS on ice_candidates to ensure signaling works freely
alter table ice_candidates disable row level security;
