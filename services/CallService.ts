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
}

export const CallService = {
    async initiateCall(receiverId: string, type: 'audio' | 'video', roomId?: string): Promise<{ data: Call | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data, error } = await client
                    .from('calls')
                    .insert({
                        caller_id: user.id,
                        room_id: roomId || null,
                        type,
                        status: 'ringing'
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

    async updateCallStatus(callId: string, status: Call['status']): Promise<{ error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const updateData: any = { status };
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
                const { error } = await client
                    .from('ice_candidates')
                    .insert({
                        call_id: callId,
                        sender_id: user?.id,
                        candidate
                    });
                return { error: error?.message || null };
            });
        } catch (err: any) {
            return { error: err.message };
        }
    },

    async getCallHistory(): Promise<{ data: Call[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data, error } = await client
                    .from('calls')
                    .select(`
                        *,
                        profiles:caller_id (id, username, full_name, avatar_url)
                    `)
                    .or(`caller_id.eq.${user.id},room_id.in.(select room_id from room_participants where user_id = ${user.id})`)
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
