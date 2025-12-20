import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from '@/template';
import { getSharedSupabaseClient } from '@/template/core/client';
import { Call, CallService } from '@/services/CallService';
import { useRouter } from 'expo-router';

interface CallContextType {
    currentCall: Call | null;
    callHistory: Call[];
    loading: boolean;
    initiateCall: (targetId: string, type: 'audio' | 'video', isRoom?: boolean) => Promise<void>;
    endCall: () => Promise<void>;
    acceptCall: () => Promise<void>;
    rejectCall: () => Promise<void>;
    refreshHistory: () => Promise<void>;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export function CallProvider({ children }: { children: ReactNode }) {
    const [currentCall, setCurrentCall] = useState<Call | null>(null);
    const [callHistory, setCallHistory] = useState<Call[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const supabase = getSharedSupabaseClient();
    const router = useRouter();

    const refreshHistory = async () => {
        if (!user) return;
        setLoading(true);
        const { data, error } = await CallService.getCallHistory();
        if (!error && data) {
            setCallHistory(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (user) {
            refreshHistory();
        }
    }, [user?.id]);

    useEffect(() => {
        if (user) {
            // REALTIME DISABLED - Calls will use manual refresh
            /*
            const channel = supabase
                .channel('public-calls')
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'calls' }, (payload) => {
                    const newCall = payload.new as Call;
                    // Logic for incoming call (where user is not caller)
                    if (newCall.caller_id !== user.id && newCall.status === 'ringing') {
                        setCurrentCall(newCall);
                        router.push('/call/incoming');
                    }
                })
                .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'calls' }, (payload) => {
                    const updatedCall = payload.new as Call;
                    if (currentCall?.id === updatedCall.id) {
                        setCurrentCall(updatedCall);
                        if (updatedCall.status === 'ended' || updatedCall.status === 'rejected') {
                            setCurrentCall(null);
                            refreshHistory();
                            router.back();
                        }
                    } else if (updatedCall.status === 'ended' || updatedCall.status === 'rejected') {
                        refreshHistory();
                    }
                })
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
            */
        }
    }, [user?.id, currentCall?.id]);

    const initiateCall = async (targetId: string, type: 'audio' | 'video', isRoom: boolean = false) => {
        const { data, error } = await CallService.initiateCall(
            isRoom ? '' : targetId,
            type,
            isRoom ? targetId : undefined
        );
        if (data) {
            setCurrentCall(data);
            router.push(`/call/${type}`);
        }
    };

    const endCall = async () => {
        if (currentCall) {
            await CallService.updateCallStatus(currentCall.id, 'ended');
            setCurrentCall(null);
        }
    };

    const acceptCall = async () => {
        if (currentCall) {
            await CallService.updateCallStatus(currentCall.id, 'accepted');
            router.push(`/call/${currentCall.type}`);
        }
    };

    const rejectCall = async () => {
        if (currentCall) {
            await CallService.updateCallStatus(currentCall.id, 'rejected');
            setCurrentCall(null);
        }
    };

    return (
        <CallContext.Provider value={{
            currentCall,
            callHistory,
            loading,
            initiateCall,
            endCall,
            acceptCall,
            rejectCall,
            refreshHistory
        }}>
            {children}
        </CallContext.Provider>
    );
}

export function useCall() {
    const context = useContext(CallContext);
    if (!context) throw new Error('useCall must be used within CallProvider');
    return context;
}
