import { safeSupabaseOperation } from '@/template/core/client';

export interface Call {
    id: string;
    room_id: string | null;
    caller_id: string;
    type: 'audio' | 'video';
    status: 'ringing' | 'accepted' | 'rejected' | 'missed' | 'ended';
    duration: number;
    created_at: string;
    ended_at: string | null;
    profiles?: {
        id: string;
        username: string;
        full_name: string;
        avatar_url: string;
    };
    offer_sdp?: any;
    answer_sdp?: any;
    receiver_id?: string;
}

export const CallService = {
    async initiateCall(receiverId: string, type: 'audio' | 'video', offerSdp: any, roomId?: string): Promise<{ data: Call | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                // Check if blocked
                const { data: blocked } = await client
                    .from('blocked_users')
                    .select('id')
                    .or(`and(blocker_id.eq.${user.id},blocked_id.eq.${receiverId}),and(blocker_id.eq.${receiverId},blocked_id.eq.${user.id})`)
                    .maybeSingle();

                if (blocked) {
                    throw new Error('User is blocked');
                }

                const { data, error } = await client
                    .from('calls')
                    .insert({
                        caller_id: user.id,
                        receiver_id: receiverId || null,
                        room_id: roomId || null,
                        type,
                        status: 'ringing',
                        offer_sdp: offerSdp
                    })
                    .select()
                    .single();

                if (error) return { data: null, error: error.message };
                return { data: data as Call, error: null };
            });
        } catch (err: any) {
            return { data: null, error: err.message };
        }
    },

    async updateCallStatus(callId: string, status: Call['status'], answerSdp?: any): Promise<{ error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const updateData: any = { status };
                if (answerSdp) updateData.answer_sdp = answerSdp;

                if (status === 'ended' || status === 'rejected' || status === 'missed') {
                    updateData.ended_at = new Date().toISOString();

                    // Calculate duration if it's ending
                    if (status === 'ended') {
                        const { data: call } = await client.from('calls').select('created_at').eq('id', callId).single();
                        if (call) {
                            const start = new Date(call.created_at).getTime();
                            const end = new Date().getTime();
                            updateData.duration = Math.floor((end - start) / 1000);
                        }
                    }
                }

                const { error } = await client
                    .from('calls')
                    .update(updateData)
                    .eq('id', callId);

                return { error: error?.message || null };
            });
        } catch (err: any) {
            return { error: err.message };
        }
    },

    async sendIceCandidate(callId: string, candidate: any): Promise<{ error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) return { error: 'Not authenticated' };

                const { error } = await client
                    .from('ice_candidates')
                    .insert({
                        call_id: callId,
                        sender_id: user.id,
                        candidate: candidate // Should be object
                    });
                return { error: error?.message || null };
            });
        } catch (err: any) {
            return { error: err.message };
        }
    },

    async getIceCandidates(callId: string): Promise<{ data: any[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data, error } = await client
                    .from('ice_candidates')
                    .select('*')
                    .eq('call_id', callId)
                    .order('created_at', { ascending: true });

                return { data: data || [], error: error?.message || null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    },

    async getCallHistory(): Promise<{ data: Call[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                // Get user's room IDs first to build filter
                const { data: myRooms } = await client
                    .from('room_participants')
                    .select('room_id')
                    .eq('user_id', user.id);

                const roomIds = myRooms?.map(r => r.room_id) || [];
                // Only add room filter if there are rooms
                const roomFilter = roomIds.length > 0 ? `,room_id.in.(${roomIds.join(',')})` : '';

                const { data, error } = await client
                    .from('calls')
                    .select(`
                        *,
                        profiles:caller_id (id, username, full_name, avatar_url)
                    `)
                    .or(`caller_id.eq.${user.id}${roomFilter}`)
                    .neq('status', 'ringing') // Only show completed/acted upon calls
                    .order('created_at', { ascending: false });

                if (error) return { data: [], error: error.message };
                return { data: data as Call[] || [], error: null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    }
};
