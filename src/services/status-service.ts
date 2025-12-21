import { safeSupabaseOperation } from '@/lib/supabase/client';

export interface StatusUpdate {
    id: string;
    user_id: string;
    media_url: string;
    caption: string | null;
    created_at: string;
    profiles?: any;
}

export const StatusService = {
    async getStatuses(): Promise<{ data: StatusUpdate[]; error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                // Fetch statuses from the last 24 hours
                const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

                const { data, error } = await client
                    .from('statuses')
                    .select(`
            *,
            profiles (
              id,
              username,
              full_name,
              avatar_url
            )
          `)
                    .gt('created_at', twentyFourHoursAgo)
                    .order('created_at', { ascending: false });

                if (error) return { data: [], error: error.message };
                return { data: (data as StatusUpdate[]) || [], error: null };
            });
        } catch (err: any) {
            return { data: [], error: err.message };
        }
    },

    async uploadStatus(mediaUrl: string, caption?: string): Promise<{ error: string | null }> {
        try {
            return await safeSupabaseOperation(async (client) => {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');

                const { error } = await client
                    .from('statuses')
                    .insert({
                        user_id: user.id,
                        media_url: mediaUrl,
                        caption
                    });

                if (error) return { error: error.message };
                return { error: null };
            });
        } catch (err: any) {
            return { error: err.message };
        }
    }
};
