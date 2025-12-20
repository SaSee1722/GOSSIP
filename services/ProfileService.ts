import { safeSupabaseOperation } from '@/template/core/client';

export interface Profile {
    id: string;
    username: string;
    full_name: string;
    avatar_url: string;
    is_online: boolean;
    last_seen: string;
    age?: number;
    phone?: string;
    bio?: string;
    gender?: string;
}

export interface UpdateProfileData {
    username?: string;
    full_name?: string;
    avatar_url?: string;
    age?: number;
    phone?: string;
    bio?: string;
    gender?: string;
}

export const ProfileService = {
    async getProfile(userId: string): Promise<{ data: Profile | null; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data, error } = await client
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();
            if (error) return { data: null, error: error.message };
            return { data: data as Profile, error: null };
        });
    },

    async updateProfile(userId: string, updates: UpdateProfileData): Promise<{ error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { error } = await client
                .from('profiles')
                .update(updates)
                .eq('id', userId);
            return { error: error?.message || null };
        });
    },

    async searchProfiles(query: string): Promise<{ data: Profile[]; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            const { data, error } = await client
                .from('profiles')
                .select('*')
                .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
                .limit(20);
            if (error) return { data: [], error: error.message };
            return { data: data as Profile[], error: null };
        });
    },

    async uploadAvatar(userId: string, uri: string): Promise<{ data: string | null; error: string | null }> {
        return await safeSupabaseOperation(async (client) => {
            try {
                const response = await fetch(uri);
                const blob = await response.blob();
                const fileExt = uri.split('.').pop();
                const fileName = `${userId}_${Math.random()}.${fileExt}`;
                const filePath = `avatars/${fileName}`;

                const { error: uploadError } = await client.storage
                    .from('gossip-avatars') // Using a specific bucket name
                    .upload(filePath, blob);

                if (uploadError) throw uploadError;

                const { data } = client.storage
                    .from('gossip-avatars')
                    .getPublicUrl(filePath);

                return { data: data.publicUrl, error: null };
            } catch (err: any) {
                return { data: null, error: err.message };
            }
        });
    }
};
