-- ALIGNMENT MIGRATION: GOSSIP MASTER SPEC

-- 1. PROFILES: Add Status Fields
alter table profiles add column if not exists last_seen timestamp with time zone;
alter table profiles add column if not exists is_online boolean default false;

-- 2. MESSAGES: Add Rich Media & Status Fields
-- Message types: text, image, video, audio, document
alter table messages add column if not exists message_type text default 'text';
alter table messages add column if not exists media_url text;
alter table messages add column if not exists media_meta jsonb; -- { width, height, duration, size, etc. }
alter table messages add column if not exists reply_to uuid references messages(id);
alter table messages add column if not exists deleted_for_all boolean default false;
alter table messages add column if not exists delivered_at timestamp with time zone;
alter table messages add column if not exists read_at timestamp with time zone;

-- 3. ROOM PARTICIPANTS: Add Roles & Muting
alter table room_participants add column if not exists role text check (role in ('owner', 'admin', 'member')) default 'member';
alter table room_participants add column if not exists muted_until timestamp with time zone;

-- 4. CALLS: Add Status & Timing
-- Status: ringing, accepted, rejected, missed, ended
alter table calls add column if not exists status text default 'ringing';
alter table calls add column if not exists ended_at timestamp with time zone;

-- 5. STORAGE BUCKETS (If not exists)
insert into storage.buckets (id, name, public) 
values ('chat-media', 'chat-media', true)
on conflict (id) do nothing;

-- 6. REALTIME REPLICA IDENTITY
-- Ensure we get old values for updates/deletes if needed
alter table messages replica identity full;
