import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from '@/template';
import { getSharedSupabaseClient } from '@/template/core/client';
import { Call, CallService } from '@/services/CallService';
import { useRouter } from 'expo-router';

interface CallContextType {
    currentCall: Call | null;
    initiateCall: (receiverId: string, type: 'audio' | 'video') => Promise<void>;
    endCall: () => Promise<void>;
    acceptCall: () => Promise<void>;
    rejectCall: () => Promise<void>;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export function CallProvider({ children }: { children: ReactNode }) {
    const [currentCall, setCurrentCall] = useState<Call | null>(null);
    const { user } = useAuth();
    const supabase = getSharedSupabaseClient();
    const router = useRouter();

    useEffect(() => {
        if (user) {
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
                            router.back();
                        }
                    }
                })
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
        }
    }, [user?.id, currentCall?.id]);

    const initiateCall = async (receiverId: string, type: 'audio' | 'video') => {
        const { data, error } = await CallService.initiateCall(receiverId, type);
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
            initiateCall,
            endCall,
            acceptCall,
            rejectCall
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
