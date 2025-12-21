-- DANGER: THIS SCRIPT WILL WIPE ALL DATA IN YOUR DATABASE
-- Run this only if you want a fresh start to fix all schema/data inconsistencies.

-- 1. Drop existing objects to clear the slate
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

-- 2. Re-create Tables with correct columns

-- PROFILES
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

-- ROOMS
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

-- ROOM PARTICIPANTS
CREATE TABLE public.room_participants (
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (room_id, user_id)
);

-- MESSAGES
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

-- CALLS
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

-- ICE CANDIDATES
CREATE TABLE public.ice_candidates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  call_id UUID REFERENCES public.calls(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  candidate JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CONNECTIONS
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

-- STATUSES
CREATE TABLE public.statuses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT (NOW() + interval '24 hours')
);

-- 3. Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ice_candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.statuses ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies (Simplified for functionality)
CREATE POLICY "Public profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Self update profiles" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Auth access all" ON public.rooms FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access all participants" ON public.room_participants FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access messages" ON public.messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access calls" ON public.calls FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access ice" ON public.ice_candidates FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access connections" ON public.connections FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access blocks" ON public.blocked_users FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth access statuses" ON public.statuses FOR ALL USING (auth.role() = 'authenticated');

-- 5. Functions and Triggers
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'username', new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Realtime
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

-- Storage
insert into storage.buckets (id, name, public) values ('gossip-avatars', 'gossip-avatars', true) ON CONFLICT DO NOTHING;
insert into storage.buckets (id, name, public) values ('chat-attachments', 'chat-attachments', true) ON CONFLICT DO NOTHING;
