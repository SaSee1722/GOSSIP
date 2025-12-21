import { createBrowserClient } from '@supabase/ssr'
import { SupabaseClient } from '@supabase/supabase-js'

let clientInstance: SupabaseClient | null = null;

export function createClient() {
    if (!clientInstance) {
        clientInstance = createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )
    }
    return clientInstance;
}

export const safeSupabaseOperation = async <T>(
    operation: (client: SupabaseClient) => Promise<T>
): Promise<T> => {
    const client = createClient();
    return await operation(client);
};
