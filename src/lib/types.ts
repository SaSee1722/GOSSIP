export interface Profile {
    id: string;
    username: string | null;
    full_name: string | null;
    avatar_url: string | null;
    bio: string | null;
    is_public: boolean;
    last_seen?: string;
    is_online?: boolean;
    updated_at: string;
}

export interface Connection {
    id: string;
    requester_id: string;
    addressee_id: string;
    status: 'pending' | 'accepted' | 'rejected';
    created_at: string;
    requester?: Profile; // Joined data
    addressee?: Profile; // Joined data
}

export type MessageType = 'text' | 'image' | 'video' | 'audio' | 'document';

export interface Message {
    id: string;
    room_id: string;
    user_id: string;
    content: string | null;
    message_type: MessageType;
    media_url?: string | null;
    media_meta?: any;
    reply_to?: string | null;
    created_at: string;
    profiles?: Profile; // Sender joined data
    reply_item?: { // Joined reply data
        content: string | null;
        message_type: MessageType;
        profiles: { username: string | null } | null;
    } | null;
    deleted_for_all?: boolean;
    read_at?: string | null;
    delivered_at?: string | null;
}

