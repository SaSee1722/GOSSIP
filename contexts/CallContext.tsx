import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '@/template';
import { getSharedSupabaseClient } from '@/template/core/client';
import { Call, CallService } from '@/services/CallService';
import { useRouter } from 'expo-router';
import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    mediaDevices,
    MediaStream
} from '@/utils/webrtc';

const ICE_SERVERS = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
    ]
};

interface CallContextType {
    currentCall: Call | null;
    callHistory: Call[];
    loading: boolean;
    localStream: MediaStream | null;
    remoteStream: MediaStream | null;
    initiateCall: (targetId: string, type: 'audio' | 'video', isRoom?: boolean) => Promise<void>;
    endCall: () => Promise<void>;
    acceptCall: () => Promise<void>;
    rejectCall: () => Promise<void>;
    refreshHistory: () => Promise<void>;
    toggleMute: () => void;
    toggleCamera: () => void;
    switchCamera: () => void;
    isMuted: boolean;
    isCameraOff: boolean;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export function CallProvider({ children }: { children: ReactNode }) {
    const [currentCall, setCurrentCall] = useState<Call | null>(null);
    const [callHistory, setCallHistory] = useState<Call[]>([]);
    const [loading, setLoading] = useState(false);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);

    const pc = useRef<RTCPeerConnection | null>(null);
    const pendingIceCandidates = useRef<any[]>([]);
    const pendingRemoteIceCandidates = useRef<any[]>([]);
    const activeCallId = useRef<string | null>(null);
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
            const channel = supabase
                .channel('public-calls')
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'calls' }, (payload) => {
                    const newCall = payload.new as Call;
                    const isForMe = newCall.receiver_id === user.id || (newCall.room_id && !newCall.receiver_id);

                    if (newCall.caller_id !== user.id && newCall.status === 'ringing' && isForMe) {
                        supabase.from('profiles').select('*').eq('id', newCall.caller_id).single().then(({ data }) => {
                            activeCallId.current = newCall.id; // Set ID immediately to catch ICE candidates
                            setCurrentCall({ ...newCall, profiles: data || undefined });
                            router.push('/call/incoming');
                        });
                    }
                }).on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'calls' }, async (payload) => {
                    const updatedCall = payload.new as Call;
                    if (currentCall?.id === updatedCall.id) {
                        // Ensure profiles are preserved or fetched if missing
                        const mergedCall = { ...currentCall, ...updatedCall };
                        if (!mergedCall.profiles) {
                            const { data: profile } = await supabase
                                .from('profiles')
                                .select('id, username, full_name, avatar_url')
                                .eq('id', mergedCall.caller_id)
                                .single();
                            mergedCall.profiles = profile as any;
                        }
                        setCurrentCall(mergedCall);

                        // Handle Answer
                        if (updatedCall.status === 'accepted' && updatedCall.answer_sdp && pc.current?.signalingState === 'have-local-offer') {
                            try {
                                console.log('[CallContext] Setting Remote Answer');
                                await pc.current.setRemoteDescription(new RTCSessionDescription(updatedCall.answer_sdp));

                                // Add any buffered remote candidates
                                if (pendingRemoteIceCandidates.current.length > 0) {
                                    console.log('[CallContext] Draining buffered remote candidates');
                                    for (const candidate of pendingRemoteIceCandidates.current) {
                                        await pc.current.addIceCandidate(new RTCIceCandidate(candidate));
                                    }
                                    pendingRemoteIceCandidates.current = [];
                                }

                                // Fetch any ICE candidates we might have missed
                                const { data: candidates } = await CallService.getIceCandidates(updatedCall.id);
                                if (candidates) {
                                    for (const cand of candidates) {
                                        if (user && cand.sender_id !== user.id) {
                                            try {
                                                await pc.current.addIceCandidate(new RTCIceCandidate(cand.candidate));
                                            } catch (err) {
                                                console.warn('[CallContext] Failed to add late candidate', err);
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                console.error('Error setting remote description from answer', e);
                            }
                        }

                        if (updatedCall.status === 'ended' || updatedCall.status === 'rejected') {
                            cleanupCall();
                        }
                    } else if (updatedCall.status === 'ended' || updatedCall.status === 'rejected') {
                        refreshHistory();
                    }
                })
                .subscribe();

            const iceChannel = supabase
                .channel('public-ice')
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'ice_candidates' }, async (payload) => {
                    const newCandidate = payload.new;
                    const callId = activeCallId.current || currentCall?.id;

                    if (user && newCandidate.call_id === callId && newCandidate.sender_id !== user.id) {
                        if (pc.current && newCandidate.candidate) {
                            try {
                                if (pc.current.remoteDescription) {
                                    console.log('[CallContext] Adding Remote ICE Candidate');
                                    await pc.current.addIceCandidate(new RTCIceCandidate(newCandidate.candidate));
                                } else {
                                    console.log('[CallContext] Buffering remote ICE candidate');
                                    pendingRemoteIceCandidates.current.push(newCandidate.candidate);
                                }
                            } catch (e) {
                                console.error('[CallContext] Error adding ICE candidate', e);
                            }
                        } else {
                            // Buffer even if peer connection isn't ready yet (receiver side before setupPC)
                            console.log('[CallContext] Buffering remote ICE candidate (PC not ready)');
                            pendingRemoteIceCandidates.current.push(newCandidate.candidate);
                        }
                    }
                })
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
                supabase.removeChannel(iceChannel);
            };
        }
    }, [user?.id]);

    const setupMedia = async (type: 'audio' | 'video') => {
        const stream = await mediaDevices.getUserMedia({
            audio: true,
            video: type === 'video' ? {
                facingMode: 'user',
            } : false
        });
        setLocalStream(stream as any);
        return stream;
    };

    const setupPC = (callId: string) => {
        const peerConnection = new RTCPeerConnection(ICE_SERVERS) as any;
        activeCallId.current = callId;

        peerConnection.onicecandidate = (event: any) => {
            if (event.candidate) {
                const currentId = activeCallId.current;
                if (!currentId || currentId === 'temp') {
                    console.log('[CallContext] Buffering local ICE candidate');
                    pendingIceCandidates.current.push(event.candidate.toJSON());
                } else {
                    console.log('[CallContext] Sending local ICE candidate');
                    CallService.sendIceCandidate(currentId, event.candidate.toJSON());
                }
            }
        };

        peerConnection.onconnectionstatechange = () => {
            console.log('[CallContext] Connection State:', peerConnection.connectionState);
            if (peerConnection.connectionState === 'failed' || peerConnection.connectionState === 'disconnected') {
                // Connection failed
            }
        };

        peerConnection.ontrack = (event: any) => {
            console.log('[CallContext] Received Remote Track');
            if (event.streams && event.streams[0]) {
                setRemoteStream(event.streams[0] as any);
            }
        };

        pc.current = peerConnection;
        return peerConnection;
    };

    const cleanupCall = () => {
        if (localStream) {
            console.log('[CallContext] Stopping local tracks');
            localStream.getTracks().forEach((track: any) => track.stop());
        }
        if (pc.current) {
            console.log('[CallContext] Closing PeerConnection');
            pc.current.close();
        }
        activeCallId.current = null;
        pendingIceCandidates.current = [];
        pendingRemoteIceCandidates.current = [];
        setLocalStream(null);
        setRemoteStream(null);
        setCurrentCall(null);
        pc.current = null;
        refreshHistory();
        if (router.canGoBack()) {
            router.back();
        } else {
            router.push('/(tabs)/calls');
        }
    };

    const initiateCall = async (targetId: string, type: 'audio' | 'video', isRoom: boolean = false) => {
        try {
            if (!user) throw new Error('You must be logged in to call');

            const stream = await setupMedia(type);
            const peerConnection = setupPC('temp'); // Temporary ID for setup

            stream.getTracks().forEach((track: any) => {
                peerConnection.addTrack(track, stream);
            });

            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);

            // Fetch receiver profile for UI
            const { data: receiverProfile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', targetId)
                .single();

            const { data, error } = await CallService.initiateCall(
                isRoom ? '' : targetId,
                type,
                offer, // Send the offer SDP
                isRoom ? targetId : undefined
            );

            if (data) {
                // Update PC with real call ID for ice candidates
                activeCallId.current = data.id;
                setCurrentCall({ ...data, profiles: receiverProfile as any });

                // Send pending ICE candidates
                if (pendingIceCandidates.current.length > 0) {
                    pendingIceCandidates.current.forEach(candidate => {
                        CallService.sendIceCandidate(data.id, candidate);
                    });
                    pendingIceCandidates.current = [];
                }

                router.push(`/call/${type}`);
            } else {
                cleanupCall();
                const msg = error || 'Could not reach the server. Please ensure your database is updated.';
                Alert.alert(
                    'Call Failed',
                    msg,
                    [{ text: 'OK', style: 'default' }]
                );
            }
        } catch (err: any) {
            console.error('[CallContext] Initiate Error:', err);
            cleanupCall();
            Alert.alert(
                'Error',
                err?.message || 'Failed to start call. Check your permissions.',
                [{ text: 'OK', style: 'default' }]
            );
        }
    };

    const endCall = async () => {
        if (currentCall) {
            await CallService.updateCallStatus(currentCall.id, 'ended');
            cleanupCall();
        }
    };

    const acceptCall = async () => {
        if (currentCall) {
            try {
                const stream = await setupMedia(currentCall.type);
                const peerConnection = setupPC(currentCall.id);

                stream.getTracks().forEach((track: any) => {
                    peerConnection.addTrack(track, stream);
                });

                if (!currentCall.offer_sdp) {
                    throw new Error('Missing call offer data');
                }

                await peerConnection.setRemoteDescription(new RTCSessionDescription(currentCall.offer_sdp));

                // Add any buffered remote candidates
                if (pendingRemoteIceCandidates.current.length > 0) {
                    console.log('[CallContext] Draining buffered remote candidates');
                    for (const candidate of pendingRemoteIceCandidates.current) {
                        try {
                            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
                        } catch (err) {
                            console.warn('[CallContext] Failed to add buffered remote candidate', err);
                        }
                    }
                    pendingRemoteIceCandidates.current = [];
                }

                // Fetch existing ICE candidates
                const { data: existingCandidates } = await CallService.getIceCandidates(currentCall.id);
                if (existingCandidates) {
                    for (const cand of existingCandidates) {
                        if (user && cand.sender_id !== user.id) {
                            try {
                                await peerConnection.addIceCandidate(new RTCIceCandidate(cand.candidate));
                            } catch (err) {
                                console.warn('[CallContext] Failed to add existing candidate', err);
                            }
                        }
                    }
                }

                const answer = await peerConnection.createAnswer();
                await peerConnection.setLocalDescription(answer);

                const { error: statusError } = await CallService.updateCallStatus(currentCall.id, 'accepted', answer);
                if (statusError) throw new Error(statusError);

                router.push(`/call/${currentCall.type}`);
            } catch (err: any) {
                console.error('Accept call error:', err);
                cleanupCall();
                Alert.alert('Connection Error', err?.message || 'Failed to establish call connection');
            }
        }
    };

    const rejectCall = async () => {
        if (currentCall) {
            await CallService.updateCallStatus(currentCall.id, 'rejected');
            setCurrentCall(null);
        }
    };

    const toggleMute = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsMuted(!audioTrack.enabled);
            }
        }
    };

    const toggleCamera = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsCameraOff(!videoTrack.enabled);
            }
        }
    };

    const switchCamera = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                (videoTrack as any)._switchCamera();
            }
        }
    };

    return (
        <CallContext.Provider value={{
            currentCall,
            callHistory,
            loading,
            localStream,
            remoteStream,
            initiateCall,
            endCall,
            acceptCall,
            rejectCall,
            refreshHistory,
            toggleMute,
            toggleCamera,
            switchCamera,
            isMuted,
            isCameraOff
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
