import { safeSupabaseOperation } from '@/template/core/client';

export interface Room {
    id: string;
    name: string | null;
    type: 'direct' | 'group';
    created_by: string;
    created_at: string;
    participants?: any[];
}

export interface MessageData {
    id: string;
    room_id: string;
    user_id: string;
    content: string;
    message_type: 'text' | 'image' | 'video' | 'audio' | 'document';
    media_url?: string;
    status: 'sent' | 'delivered' | 'read';
    created_at: string;
}

export const ChatService = {
    async getMyRooms(): Promise<{ data: any[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data, error } = await client
                    .from('room_participants')
                    .select(`
            room_id,
            rooms (
              id,
              name,
              type,
              created_by,
              created_at
            )
          `)
                    .eq('user_id', user.id);

                if (error) return { data: [], error: error.message };

                // Extract room data and fetch other participants
                const rooms = data.map((item: any) => item.rooms);
                return { data: rooms, error: null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    },

    async getRoomParticipants(roomId: string): Promise<{ data: any[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data, error } = await client
                    .from('room_participants')
                    .select(`
            user_id,
            profiles (
              id,
              username,
              full_name,
              avatar_url,
              is_online,
              last_seen
            )
          `)
                    .eq('room_id', roomId);

                if (error) return { data: [], error: error.message };
                return { data: data.map((p: any) => p.profiles), error: null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    },

    async getMessages(roomId: string, limit = 50): Promise<{ data: MessageData[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data, error } = await client
                    .from('messages')
                    .select('*')
                    .eq('room_id', roomId)
                    .order('created_at', { ascending: true })
                    .limit(limit);

                if (error) return { data: [], error: error.message };
                return { data: (data as MessageData[]) || [], error: null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    },

    async sendMessage(roomId: string, content: string, type: string = 'text'): Promise<{ data: MessageData | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data, error } = await client
                    .from('messages')
                    .insert({
                        room_id: roomId,
                        user_id: user.id,
                        content,
                        message_type: type,
                        status: 'sent'
                    })
                    .select()
                    .single();

                if (error) return { data: null, error: error.message };
                return { data: data as MessageData, error: null };
            });
        } catch (err: any) {
            return { data: null, error: err.message };
        }
    },

    async createDirectChat(otherUserId: string): Promise<{ data: string | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data: existing } = await client.rpc('get_direct_room', {
                    user1: user.id,
                    user2: otherUserId
                });

                if (existing) return { data: existing, error: null };

                const { data: room, error: roomError } = await client
                    .from('rooms')
                    .insert({ type: 'direct', created_by: user.id })
                    .select()
                    .single();

                if (roomError) return { data: null, error: roomError.message };

                const participants = [
                    { room_id: room.id, user_id: user.id, role: 'owner' },
                    { room_id: room.id, user_id: otherUserId, role: 'member' }
                ];

                const { error: partError } = await client
                    .from('room_participants')
                    .insert(participants);

                if (partError) return { data: null, error: partError.message };

                return { data: room.id, error: null };
            });
        } catch (err: any) {
            return { data: null, error: err.message };
        }
    },

    async createGroupChat(name: string, participantIds: string[]): Promise<{ data: string | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data: room, error: roomError } = await client
                    .from('rooms')
                    .insert({ name, type: 'group', created_by: user.id })
                    .select()
                    .single();

                if (roomError) return { data: null, error: roomError.message };

                const participants = [
                    { room_id: room.id, user_id: user.id, role: 'owner' },
                    ...participantIds.map(id => ({ room_id: room.id, user_id: id, role: 'member' }))
                ];

                const { error: partError } = await client
                    .from('room_participants')
                    .insert(participants);

                if (partError) return { data: null, error: partError.message };

                return { data: room.id, error: null };
            });
        } catch (err: any) {
            return { data: null, error: err.message };
        }
    },

    async sendConnectionRequest(targetUserId: string): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { error: 'Not authenticated' };

            const { error } = await client
                .from('connections')
                .insert({
                    requester_id: user.id,
                    addressee_id: targetUserId,
                    status: 'pending'
                });

            return { error: error?.message || null };
        });
    },

    async getPendingRequests(): Promise<{ data: any[]; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { data: [], error: 'Not authenticated' };

            const { data, error } = await client
                .from('connections')
                .select(`
                    id,
                    requester_id,
                    created_at,
                    profiles:requester_id (
                        id,
                        username,
                        full_name,
                        avatar_url
                    )
                `)
                .eq('addressee_id', user.id)
                .eq('status', 'pending');

            if (error) return { data: [], error: error.message };
            return { data: data || [], error: null };
        });
    },

    async getAcceptedConnections(): Promise<{ data: any[]; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { data: [], error: 'Not authenticated' };

            // Get connections where I am requester OR addressee
            const { data, error } = await client
                .from('connections')
                .select(`
                    id,
                    requester_id,
                    addressee_id,
                    status,
                    created_at,
                    requester:requester_id (id, username, full_name, avatar_url, is_online, last_seen),
                    addressee:addressee_id (id, username, full_name, avatar_url, is_online, last_seen)
                `)
                .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)
                .eq('status', 'accepted');

            if (error) return { data: [], error: error.message };

            // Transform to just return the OTHER user's profile
            const connections = data.map((conn: any) => {
                const isRequester = conn.requester_id === user.id;
                const profile = isRequester ? conn.addressee : conn.requester;
                return {
                    connection_id: conn.id,
                    ...profile
                };
            });

            return { data: connections, error: null };
        });
    },

    async respondToConnection(connectionId: string, status: 'accepted' | 'rejected'): Promise<{ data: string | null; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { error } = await client
                .from('connections')
                .update({ status })
                .eq('id', connectionId);

            if (error) return { data: null, error: error.message };

            let roomId = null;
            // If accepted, create a direct chat room
            if (status === 'accepted') {
                const { data: connection } = await client
                    .from('connections')
                    .select('requester_id, addressee_id')
                    .eq('id', connectionId)
                    .single();

                if (connection) {
                    const { data: id, error: chatError } = await this.createDirectChat(connection.requester_id);
                    if (chatError) return { data: null, error: chatError };
                    roomId = id;
                }
            }

            return { data: roomId, error: null };
        });
    },

    async deleteRoom(roomId: string): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { error } = await client.from('rooms').delete().eq('id', roomId);
            return { error: error?.message || null };
        });
    },

    async updateMessageStatus(messageId: string, status: 'delivered' | 'read'): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const updateObj: any = { status };
            if (status === 'delivered') updateObj.delivered_at = new Date().toISOString();
            if (status === 'read') updateObj.read_at = new Date().toISOString();

            const { error } = await client
                .from('messages')
                .update(updateObj)
                .eq('id', messageId);
            return { error: error?.message || null };
        });
    },

    async blockUser(targetUserId: string): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { error: 'Not authenticated' };

            const { error } = await client
                .from('blocked_users')
                .insert({ blocker_id: user.id, blocked_id: targetUserId });
            return { error: error?.message || null };
        });
    },

    async unblockUser(targetUserId: string): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { error: 'Not authenticated' };

            const { error } = await client
                .from('blocked_users')
                .delete()
                .eq('blocker_id', user.id)
                .eq('blocked_id', targetUserId);
            return { error: error?.message || null };
        });
    },

    async isBlocked(targetUserId: string): Promise<boolean> {
        const { data } = await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { data: null };

            return await client
                .from('blocked_users')
                .select('id')
                .or(`and(blocker_id.eq.${user.id},blocked_id.eq.${targetUserId}),and(blocker_id.eq.${targetUserId},blocked_id.eq.${user.id})`)
                .single();
        });
        return !!data;
    }
};
