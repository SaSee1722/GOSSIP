-- GOSSIP APP: FRESH SUPABASE SETUP SCRIPT (ROBUST VERSION)
-- Run this in the SQL Editor of your NEW Supabase project.
-- This script first CLEARS existing tables to prevent "already exists" errors, then sets everything up.

-- 1. CLEANUP (Drop existing objects if they exist)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.get_direct_room(UUID, UUID);

DROP TABLE IF EXISTS public.ice_candidates CASCADE;
DROP TABLE IF EXISTS public.calls CASCADE;
DROP TABLE IF EXISTS public.messages CASCADE;
DROP TABLE IF EXISTS public.room_participants CASCADE;
DROP TABLE IF EXISTS public.rooms CASCADE;
DROP TABLE IF EXISTS public.connections CASCADE;
DROP TABLE IF EXISTS public.blocked_users CASCADE;
DROP TABLE IF EXISTS public.statuses CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- 2. Enable Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 3. Create Tables

-- PROFILES: Stores user information. Linked to auth.users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  gender TEXT CHECK (gender IN ('Male', 'Female', 'Other')),
  age INTEGER,
  phone TEXT,
  bio TEXT,
  push_token TEXT,
  is_online BOOLEAN DEFAULT false,
  last_seen TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROOMS: Chat channels (both Direct and Group)
CREATE TABLE public.rooms (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('direct', 'group')),
  created_by UUID REFERENCES public.profiles(id),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- PARTICIPANTS: Links Users to Rooms
CREATE TABLE public.room_participants (
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (room_id, user_id)
);

-- MESSAGES: Content within Rooms
CREATE TABLE public.messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT,
  message_type TEXT DEFAULT 'text',
  media_url TEXT,
  status TEXT DEFAULT 'sent',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  is_deleted BOOLEAN DEFAULT false
);

-- CALLS: WebRTC Signaling Data
CREATE TABLE public.calls (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  caller_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('audio', 'video')),
  status TEXT DEFAULT 'ringing',
  duration INTEGER DEFAULT 0,
  offer_sdp JSONB,
  answer_sdp JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);

-- ICE CANDIDATES: WebRTC Connection Candidates
CREATE TABLE public.ice_candidates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  call_id UUID REFERENCES public.calls(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  candidate JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CONNECTIONS: Friend Requests System
CREATE TABLE public.connections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  requester_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  addressee_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(requester_id, addressee_id)
);

-- BLOCKED USERS
CREATE TABLE public.blocked_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  blocker_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  blocked_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(blocker_id, blocked_id)
);

-- STATUSES: 24h Stories/Vibes
CREATE TABLE public.statuses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT (NOW() + interval '24 hours')
);

-- 4. Row Level Security (RLS) Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ice_candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.statuses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Self update profiles" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Auth access all" ON public.rooms FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access participants" ON public.room_participants FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access messages" ON public.messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access calls" ON public.calls FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access ice" ON public.ice_candidates FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access connections" ON public.connections FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access blocks" ON public.blocked_users FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access statuses" ON public.statuses FOR ALL USING (auth.role() = 'authenticated');

-- 5. Functions & Triggers

-- Function: handle_new_user
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'username', new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function: get_direct_room
create or replace function get_direct_room(user1 UUID, user2 UUID)
returns UUID
language plpgsql
security definer
as $$
declare
  room_id UUID;
begin
  SELECT r.id INTO room_id
  FROM rooms r
  JOIN room_participants p1 ON r.id = p1.room_id
  JOIN room_participants p2 ON r.id = p2.room_id
  WHERE r.type = 'direct'
  AND p1.user_id = user1
  AND p2.user_id = user2;
  
  RETURN room_id;
end;
$$;

-- 6. Storage Buckets
insert into storage.buckets (id, name, public) values ('gossip-avatars', 'gossip-avatars', true) ON CONFLICT DO NOTHING;
insert into storage.buckets (id, name, public) values ('chat-attachments', 'chat-attachments', true) ON CONFLICT DO NOTHING;
insert into storage.buckets (id, name, public) values ('status-uploads', 'status-uploads', true) ON CONFLICT DO NOTHING;


-- 7. Enable Realtime
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
  alter publication supabase_realtime add table public.messages;
  alter publication supabase_realtime add table public.rooms;
  alter publication supabase_realtime add table public.room_participants;
  alter publication supabase_realtime add table public.calls;
  alter publication supabase_realtime add table public.ice_candidates;
  alter publication supabase_realtime add table public.connections;
  alter publication supabase_realtime add table public.statuses;
  alter publication supabase_realtime add table public.profiles;
commit;
