import { safeSupabaseOperation } from '@/template/core/client';
import * as FileSystem from 'expo-file-system';

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
                console.log('[ProfileService] Starting upload for URI:', uri);

                // Read file as base64
                const base64 = await FileSystem.readAsStringAsync(uri, {
                    encoding: 'base64',
                });

                console.log('[ProfileService] File read successfully, size:', base64.length);

                // Convert base64 to blob
                const byteCharacters = atob(base64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'image/jpeg' });

                const fileExt = uri.split('.').pop() || 'jpg';
                const fileName = `${userId}_${Date.now()}.${fileExt}`;
                const filePath = `avatars/${fileName}`;

                console.log('[ProfileService] Uploading to:', filePath);

                const { error: uploadError } = await client.storage
                    .from('gossip-avatars')
                    .upload(filePath, blob, {
                        contentType: 'image/jpeg',
                        upsert: false
                    });

                if (uploadError) {
                    console.error('[ProfileService] Upload error:', uploadError);
                    throw uploadError;
                }

                const { data } = client.storage
                    .from('gossip-avatars')
                    .getPublicUrl(filePath);

                console.log('[ProfileService] Upload successful, URL:', data.publicUrl);
                return { data: data.publicUrl, error: null };
            } catch (err: any) {
                console.error('[ProfileService] Upload failed:', err);
                return { data: null, error: err.message };
            }
        });
    }
};
