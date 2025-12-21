-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- PROFILES (Extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
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

-- ROOMS (Chat groups and DMs)
CREATE TABLE IF NOT EXISTS public.rooms (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT, -- Null for DMs
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('direct', 'group')),
  created_by UUID REFERENCES public.profiles(id),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROOM PARTICIPANTS
CREATE TABLE IF NOT EXISTS public.room_participants (
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (room_id, user_id)
);

-- MESSAGES
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT, -- Can be null for media-only messages
  message_type TEXT DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'video', 'audio', 'document')),
  media_url TEXT,
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'delivered', 'read')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  is_deleted BOOLEAN DEFAULT false
);

-- CALLS
CREATE TABLE IF NOT EXISTS public.calls (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
  caller_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE, -- Nullable for group calls
  type TEXT CHECK (type IN ('audio', 'video')),
  status TEXT DEFAULT 'ringing' CHECK (status IN ('ringing', 'accepted', 'rejected', 'missed', 'ended')),
  duration INTEGER DEFAULT 0,
  offer_sdp JSONB,
  answer_sdp JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);

-- ICE CANDIDATES (For WebRTC)
CREATE TABLE IF NOT EXISTS public.ice_candidates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  call_id UUID REFERENCES public.calls(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  candidate JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CONNECTIONS (Friend Requests)
CREATE TABLE IF NOT EXISTS public.connections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  requester_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  addressee_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(requester_id, addressee_id)
);

-- BLOCKED USERS
CREATE TABLE IF NOT EXISTS public.blocked_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  blocker_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  blocked_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(blocker_id, blocked_id)
);

-- STATUSES (Vibes)
CREATE TABLE IF NOT EXISTS public.statuses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT (NOW() + interval '24 hours')
);

-- STORAGE BUCKETS
insert into storage.buckets (id, name, public) values ('gossip-avatars', 'gossip-avatars', true) ON CONFLICT DO NOTHING;
insert into storage.buckets (id, name, public) values ('chat-attachments', 'chat-attachments', true) ON CONFLICT DO NOTHING;

-- RLS POLICIES (Simplified for development - Open Access or Basic Auth)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Rooms viewable by auth users" ON public.rooms FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.room_participants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Participants viewable by auth users" ON public.room_participants FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Messages viewable by auth users" ON public.messages FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.calls ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Calls viewable by auth users" ON public.calls FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.ice_candidates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ICE candidates viewable by auth users" ON public.ice_candidates FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Connections viewable by auth users" ON public.connections FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.blocked_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Blocked users viewable by auth users" ON public.blocked_users FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE public.statuses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Statuses viewable by auth users" ON public.statuses FOR ALL USING (auth.role() = 'authenticated');

-- FUNCTIONS
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'username', new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

-- TRIGGER
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- RPC for Getting Direct Room
CREATE OR REPLACE FUNCTION get_direct_room(user1 UUID, user2 UUID)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  room_id UUID;
BEGIN
  SELECT r.id INTO room_id
  FROM rooms r
  JOIN room_participants p1 ON r.id = p1.room_id
  JOIN room_participants p2 ON r.id = p2.room_id
  WHERE r.type = 'direct'
  AND p1.user_id = user1
  AND p2.user_id = user2;
  
  RETURN room_id;
END;
$$;
