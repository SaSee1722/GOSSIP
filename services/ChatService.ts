import { safeSupabaseOperation } from '@/template/core/client';
import { sendPushNotification } from '@/services/NotificationService';

export interface Room {
    id: string;
    name: string | null;
    description: string | null;
    type: 'direct' | 'group';
    created_by: string;
    created_at: string;
    avatar_url: string | null;
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
            rooms (*)
          `)
                    .eq('user_id', user.id);

                if (error) return { data: [], error: error.message };
                if (!data || data.length === 0) return { data: [], error: null };

                // Get blocked users to filter them out
                const { data: blockedData } = await client
                    .from('blocked_users')
                    .select('blocked_id')
                    .eq('blocker_id', user.id);
                const blockedIds = (blockedData || []).map((b: any) => b.blocked_id);

                // Get rooms and filter out those with blocked participants (for direct chats)
                const filteredRooms = [];
                for (const item of data) {
                    const room = item.rooms as any;
                    if (!room) continue;

                    if (room.type === 'direct') {
                        // For direct chats, we need to check if the other person is blocked
                        const { data: participants } = await client
                            .from('room_participants')
                            .select('user_id')
                            .eq('room_id', room.id)
                            .neq('user_id', user.id);

                        const otherUserId = participants?.[0]?.user_id;
                        if (otherUserId && blockedIds.includes(otherUserId)) {
                            continue; // Skip this room
                        }
                    }
                    filteredRooms.push(room);
                }

                return { data: filteredRooms, error: null };
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
              last_seen,
              gender,
              age
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

    async getMessages(roomId: string, limit = 50, ascending = true): Promise<{ data: MessageData[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data, error } = await client
                    .from('messages')
                    .select('*')
                    .eq('room_id', roomId)
                    .order('created_at', { ascending })
                    .limit(limit);

                if (error) return { data: [], error: error.message };
                return { data: (data as MessageData[]) || [], error: null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    },

    async sendMessage(roomId: string, content: string, type: string = 'text', mediaUrl?: string): Promise<{ data: MessageData | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                // Check if anyone in the room has blocked the sender
                const { data: participants } = await client
                    .from('room_participants')
                    .select('user_id')
                    .eq('room_id', roomId)
                    .neq('user_id', user.id);

                if (participants && participants.length > 0) {
                    const participantIds = participants.map(p => p.user_id);
                    const { data: blocks } = await client
                        .from('blocked_users')
                        .select('id')
                        .or(`and(blocker_id.eq.${user.id},blocked_id.in.(${participantIds.join(',')})),and(blocker_id.in.(${participantIds.join(',')}),blocked_id.eq.${user.id})`)
                        .maybeSingle();

                    if (blocks) {
                        throw new Error('Cannot send message: Blocked connection');
                    }
                }

                const { data, error } = await client
                    .from('messages')
                    .insert({
                        room_id: roomId,
                        user_id: user.id,
                        content,
                        message_type: type,
                        media_url: mediaUrl,
                        status: 'sent'
                    })
                    .select()
                    .single();

                if (error) {
                    console.error('[ChatService] sendMessage error:', error);
                    return { data: null, error: error.message };
                }

                // Send Push Notifications asynchronously
                (async () => {
                    try {
                        // Get all participants except sender
                        const { data: recipients } = await client
                            .from('room_participants')
                            .select('user_id, profiles(push_token, full_name, username)')
                            .eq('room_id', roomId)
                            .neq('user_id', user.id);

                        if (recipients) {
                            const senderName = user.user_metadata?.username || 'Gossiper';
                            const title = `New Gossip from ${senderName}`;
                            const body = type === 'text' ? content : `Sent a ${type}`;

                            for (const r of recipients) {
                                const profile = r.profiles as any;
                                if (profile && profile.push_token) {
                                    sendPushNotification(profile.push_token, title, body, {
                                        chatId: roomId,
                                        senderId: user.id
                                    });
                                }
                            }
                        }
                    } catch (pushErr) {
                        console.error('[ChatService] Failed to send push:', pushErr);
                    }
                })();

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

    async updateRoom(roomId: string, updates: { name?: string; description?: string; avatar_url?: string }): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { error } = await client
                .from('rooms')
                .update(updates)
                .eq('id', roomId);
            return { error: error?.message || null };
        });
    },

    async uploadGroupAvatar(roomId: string, uri: string): Promise<{ data: string | null; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            try {
                const fileExt = uri.split('.').pop() || 'jpg';
                const fileName = `group_${roomId}_${Date.now()}.${fileExt}`;
                const filePath = `groups/${fileName}`;

                const file = {
                    uri: uri,
                    name: fileName,
                    type: 'image/jpeg',
                };

                const { error: uploadError } = await client.storage
                    .from('gossip-avatars')
                    .upload(filePath, file as any, {
                        contentType: 'image/jpeg',
                        upsert: false
                    });

                if (uploadError) throw uploadError;

                const { data } = client.storage
                    .from('gossip-avatars')
                    .getPublicUrl(filePath);

                return { data: data.publicUrl, error: null };
            } catch (err: any) {
                return { data: null, error: err.message };
            }
        });
    },

    async uploadChatAttachment(roomId: string, uri: string, type: 'image' | 'video' | 'audio' | 'document'): Promise<{ data: string | null; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            try {
                const fileExt = uri.split('.').pop() || 'dat';
                const folder = type === 'image' ? 'images' : type === 'video' ? 'videos' : 'docs';
                const fileName = `${folder}/${roomId}_${Date.now()}.${fileExt}`;

                const response = await fetch(uri);
                const blob = await response.blob();

                // Determine mime type
                let mimeType = 'application/octet-stream';
                if (type === 'image') mimeType = 'image/jpeg';
                else if (type === 'video') mimeType = 'video/mp4';

                const { error: uploadError } = await client.storage
                    .from('chat-attachments')
                    .upload(fileName, blob, {
                        contentType: mimeType,
                        upsert: false
                    });

                if (uploadError) throw uploadError;

                const { data } = client.storage
                    .from('chat-attachments')
                    .getPublicUrl(fileName);

                return { data: data.publicUrl, error: null };
            } catch (err: any) {
                return { data: null, error: err.message };
            }
        });
    },

    async updateOnlineStatus(userId: string, isOnline: boolean): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { error } = await client
                .from('profiles')
                .update({ is_online: isOnline, last_seen: new Date().toISOString() })
                .eq('id', userId);
            return { error: error?.message || null };
        });
    },

    async getRoomParticipantsProfiles(roomId: string): Promise<{ data: any[]; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data, error } = await client
                .from('room_participants')
                .select('profiles (*)')
                .eq('room_id', roomId);
            if (error) return { data: [], error: error.message };
            return { data: data.map((p: any) => p.profiles), error: null };
        });
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
                    requester:requester_id (id, username, full_name, avatar_url, is_online, last_seen, gender, age),
                    addressee:addressee_id (id, username, full_name, avatar_url, is_online, last_seen, gender, age)
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

    async markRoomAsRead(roomId: string, userId: string): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { error } = await client
                .from('messages')
                .update({ status: 'read', read_at: new Date().toISOString() })
                .eq('room_id', roomId)
                .neq('user_id', userId)
                .neq('status', 'read');
            return { error: error?.message || null };
        });
    },

    async blockUser(targetUserId: string): Promise<{ error: string | null }> {
        console.log('[ChatService] Blocking user:', targetUserId);
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { error: 'Not authenticated' };

            const { error } = await client
                .from('blocked_users')
                .insert({ blocker_id: user.id, blocked_id: targetUserId });

            if (error) {
                console.error('[ChatService] blockUser error:', error);
                return { error: error.message };
            }
            return { error: null };
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
                .maybeSingle();
        });
        return !!data;
    },

    async getBlockedUsers(): Promise<{ data: any[]; error: string | null }> {
        console.log('[ChatService] Fetching blocked users...');
        return await safeSupabaseOperation(async (client) => {
            const { data: { user } } = await client.auth.getUser();
            if (!user) return { data: [], error: 'Not authenticated' };

            const { data, error } = await client
                .from('blocked_users')
                .select(`
                    id,
                    blocked_id,
                    profiles:blocked_id (*)
                `)
                .eq('blocker_id', user.id);

            if (error) {
                console.error('[ChatService] getBlockedUsers error:', error);
                return { data: [], error: error.message };
            }

            const blockedUsers = (data || []).map((item: any) => ({
                id: item.blocked_id,
                username: item.profiles?.username || 'Unknown',
                full_name: item.profiles?.full_name || 'Unknown Gossiper',
                avatar_url: item.profiles?.avatar_url
            }));

            console.log(`[ChatService] Found ${blockedUsers.length} blocked users`);
            return { data: blockedUsers, error: null };
        });
    }
};
