"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export interface AuthUser {
    id: string;
    email: string;
    username: string;
    full_name?: string;
    avatar_url?: string;
    age?: number;
    phone?: string;
    bio?: string;
    gender?: string;
    created_at: string;
    updated_at: string;
}

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    operationLoading: boolean;
    signInWithPassword: (email: string, pass: string) => Promise<{ error?: string }>;
    signUpWithPassword: (email: string, pass: string, metadata: any) => Promise<{ error?: string; needsEmailConfirmation?: boolean }>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [operationLoading, setOperationLoading] = useState(false);
    const supabase = createClient();

    const mapUser = (supabaseUser: User, profile?: any): AuthUser => ({
        id: supabaseUser.id,
        email: supabaseUser.email || '',
        username: profile?.username || supabaseUser.user_metadata?.username || supabaseUser.email?.split('@')[0],
        full_name: profile?.full_name || supabaseUser.user_metadata?.full_name,
        avatar_url: profile?.avatar_url || supabaseUser.user_metadata?.avatar_url,
        age: profile?.age,
        phone: profile?.phone,
        bio: profile?.bio,
        gender: profile?.gender,
        created_at: supabaseUser.created_at,
        updated_at: supabaseUser.updated_at || supabaseUser.created_at,
    });

    const fetchUser = async (supabaseUser: User) => {
        const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', supabaseUser.id)
            .single();

        setUser(mapUser(supabaseUser, profile));
    };

    useEffect(() => {
        const initialize = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                await fetchUser(session.user);
            }
            setLoading(false);

            const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
                if (session?.user) {
                    await fetchUser(session.user);
                } else {
                    setUser(null);
                }
                setLoading(false);
            });

            return () => subscription.unsubscribe();
        };

        initialize();
    }, []);

    const signInWithPassword = async (email: string, pass: string) => {
        setOperationLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
        setOperationLoading(false);
        return { error: error?.message };
    };

    const signUpWithPassword = async (email: string, pass: string, metadata: any) => {
        setOperationLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password: pass,
            options: { data: metadata }
        });
        setOperationLoading(false);
        return {
            error: error?.message,
            needsEmailConfirmation: !!(data.user && !data.session)
        };
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            operationLoading,
            signInWithPassword,
            signUpWithPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
