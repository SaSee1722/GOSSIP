import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useAuth } from '@/template';
import { StatusService, StatusUpdate } from '@/services/StatusService';
import { getSharedSupabaseClient } from '@/template/core/client';

interface StatusContextType {
    statuses: StatusUpdate[];
    loading: boolean;
    uploadStatus: (mediaUrl: string, caption?: string) => Promise<void>;
    refreshStatuses: () => Promise<void>;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export function StatusProvider({ children }: { children: ReactNode }) {
    const [statuses, setStatuses] = useState<StatusUpdate[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const supabase = getSharedSupabaseClient();

    useEffect(() => {
        if (user) {
            loadStatuses();

            const channel = supabase
                .channel('public-statuses')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'statuses' }, () => {
                    loadStatuses();
                })
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
        }
    }, [user?.id]);

    const loadStatuses = async () => {
        setLoading(true);
        const { data, error } = await StatusService.getStatuses();
        if (data) setStatuses(data);
        setLoading(false);
    };

    const uploadStatus = async (mediaUrl: string, caption?: string) => {
        const { error } = await StatusService.uploadStatus(mediaUrl, caption);
        if (error) throw new Error(error);
    };

    return (
        <StatusContext.Provider value={{
            statuses,
            loading,
            uploadStatus,
            refreshStatuses: loadStatuses
        }}>
            {children}
        </StatusContext.Provider>
    );
}

export function useStatus() {
    const context = useContext(StatusContext);
    if (!context) throw new Error('useStatus must be used within StatusProvider');
    return context;
}
