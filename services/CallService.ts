import { safeSupabaseOperation } from '@/template/core/client';

export interface Call {
    id: string;
    room_id: string | null;
    caller_id: string;
    type: 'audio' | 'video';
    status: 'ringing' | 'accepted' | 'rejected' | 'missed' | 'ended';
    created_at: string;
}

export const CallService = {
    async initiateCall(receiverId: string, type: 'audio' | 'video'): Promise<{ data: Call | null; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { data, error } = await client
                    .from('calls')
                    .insert({
                        caller_id: user.id,
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
                const { error } = await client
                    .from('calls')
                    .update({ status, ended_at: status === 'ended' ? new Date().toISOString() : null })
                    .eq('id', callId);

                if (error) return { error: error.message };
                return { error: null };
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
    }
};
