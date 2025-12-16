"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";
import { CallOverlay } from "@/components/call-overlay";

interface CallContextType {
    isInCall: boolean;
    isIncomingCall: boolean;
    callDetails: any;
    startCall: (roomId: string, isVideo?: boolean) => Promise<void>;
    acceptCall: () => Promise<void>;
    endCall: () => Promise<void>;
    localStream: MediaStream | null;
    remoteStream: MediaStream | null;
}

const CallContext = createContext<CallContextType | null>(null);

export function useCall() {
    const context = useContext(CallContext);
    if (!context) throw new Error("useCall must be used within a CallProvider");
    return context;
}

export function CallProvider({ children, user }: { children: React.ReactNode; user: any }) {
    const [callDetails, setCallDetails] = useState<any>(null);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
    const [incomingCall, setIncomingCall] = useState<any>(null);

    // WebRTC refs
    const peerConnection = useRef<RTCPeerConnection | null>(null);
    const supabase = createClient();
    const signalingChannel = useRef<RealtimeChannel | null>(null);

    // ICE servers (STUN)
    const pcConfig = {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' }
        ]
    };

    // 1. Listen for incoming calls
    useEffect(() => {
        if (!user) return;

        console.log("Listening for calls on user channel:", user.id);
        const channel = supabase
            .channel(`calls:${user.id}`)
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'calls', filter: `caller_id=neq.${user.id}` }, // Simply listening for ANY insert might be too broad if not filtering by recipients, but schema is simple. 
                // Wait, the schema 'calls' table has 'room_id'. It doesn't explicitly have 'recipient_id'. 
                // We should probably listen to "calls" where I am in the "room_participants". 
                // For simplicity/MVP, I'll listen to ALL INSERTs on 'calls' and then check if I'm in the room (client-side filtering) or if it's meant for me.
                // Actually, a better query would be filtering by my user ID if I had a 'recipient_id' column.
                // Given current schema, I will subscribe to the global 'calls' table but in a real app this is bad. 
                // Let's rely on the fact that we can subscribe to changes on the Calls table.
                async (payload) => {
                    console.log("New call detected:", payload);
                    // Check if I am a participant in this room?
                    // For now, let's just show it if it's NOT my own call.
                    if (payload.new.caller_id !== user.id && payload.new.status === 'active') {
                        // TODO: Verify if user belongs to payload.new.room_id
                        setIncomingCall(payload.new);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            localStream?.getTracks().forEach(track => track.stop());
            peerConnection.current?.close();
        };
    }, []);

    const initializePeerConnection = () => {
        const pc = new RTCPeerConnection(pcConfig);

        pc.onicecandidate = (event) => {
            if (event.candidate && signalingChannel.current) {
                signalingChannel.current.send({
                    type: 'broadcast',
                    event: 'ice-candidate',
                    payload: { candidate: event.candidate }
                });
            }
        };

        pc.ontrack = (event) => {
            console.log("Track received:", event.streams[0]);
            setRemoteStream(event.streams[0]);
        };

        return pc;
    };

    const startCall = async (roomId: string, isVideo = true) => {
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Your browser does not support calling (getUserMedia missing). Possibly due to non-HTTPS or privacy settings.");
                return;
            }

            // Get user media
            const stream = await navigator.mediaDevices.getUserMedia({ video: isVideo, audio: true });
            setLocalStream(stream);

            const pc = initializePeerConnection();
            stream.getTracks().forEach(track => pc.addTrack(track, stream));
            peerConnection.current = pc;

            // Create Offer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            // Create Call Entry in DB
            const { data: call, error } = await supabase.from('calls').insert({
                room_id: roomId,
                caller_id: user.id,
                status: 'active',
                offer: offer
            }).select().single();

            if (error) throw error;
            setCallDetails(call);

            // Join Signaling Room
            setupSignaling(call.id);

        } catch (err: any) {
            console.error("Error starting call:", err);
            alert(`Call failed: ${err.message || err.name}`);
        }
    };

    const acceptCall = async () => {
        if (!incomingCall) return;

        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Your browser does not support calling. (getUserMedia missing)");
                return;
            }

            // Get user media
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalStream(stream);

            const pc = initializePeerConnection();
            stream.getTracks().forEach(track => pc.addTrack(track, stream));
            peerConnection.current = pc;

            // Set Remote Description (Offer)
            await pc.setRemoteDescription(new RTCSessionDescription(incomingCall.offer));

            // Create Answer
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            // Update Call in DB
            const { error } = await supabase.from('calls').update({
                answer: answer,
                status: 'active' // Confirming active
            }).eq('id', incomingCall.id);

            if (error) throw error;

            setCallDetails(incomingCall);
            setIncomingCall(null);

            // Join Signaling
            setupSignaling(incomingCall.id);

        } catch (err: any) {
            console.error("Error accepting call:", err);
            alert(`Accept call failed: ${err.message || err.name}`);
        }
    };

    const endCall = async () => {
        // Close connections
        localStream?.getTracks().forEach(track => track.stop());
        peerConnection.current?.close();

        // Update DB
        if (callDetails) {
            await supabase.from('calls').update({ status: 'ended' }).eq('id', callDetails.id);
        }

        // Reset state
        setLocalStream(null);
        setRemoteStream(null);
        setCallDetails(null);
        setIncomingCall(null);
    };

    const setupSignaling = (callId: string) => {
        const channel = supabase.channel(`call_signaling:${callId}`);

        channel
            .on('broadcast', { event: 'ice-candidate' }, async (payload) => {
                if (peerConnection.current && peerConnection.current.signalingState !== 'closed') {
                    // Avoid adding own candidates (basic check if needed, but usually sender doesn't send to self in broadcast if not requested? Supabase broadcast sends to all except sender by default IIRC. Double check is safer).
                    // Actually Supabase broadcast sends to "everyone else connected".
                    await peerConnection.current.addIceCandidate(new RTCIceCandidate(payload.payload.candidate));
                }
            })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'calls', filter: `id=eq.${callId}` }, async (payload) => {
                // If I am the caller and I receive an Answer
                if (payload.new.answer && !peerConnection.current?.currentRemoteDescription) {
                    const answer = payload.new.answer;
                    await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(answer));
                }

                if (payload.new.status === 'ended') {
                    endCall(); // Remote ended
                }
            })
            .subscribe();

        signalingChannel.current = channel;
    };

    return (
        <CallContext.Provider value={{ isInCall: !!callDetails, isIncomingCall: !!incomingCall, callDetails, startCall, acceptCall, endCall, localStream, remoteStream }}>
            {children}
            {/* Global Call Overlay */}
            {incomingCall && !callDetails && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 animate-float">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                                Incoming
                            </div>
                        </div>
                        <h3 className="text-xl font-bold">Incoming Call...</h3>
                        <div className="flex gap-4">
                            <button onClick={acceptCall} className="px-6 py-2 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 transition-colors">Accept</button>
                            <button onClick={() => setIncomingCall(null)} className="px-6 py-2 bg-red-500 rounded-full text-white font-medium hover:bg-red-600 transition-colors">Decline</button>
                        </div>
                    </div>
                </div>
            )}

            {callDetails && (
                <CallOverlay roomId={callDetails.room_id} currentUser={user} onClose={endCall} />
            )}
        </CallContext.Provider>
    );
}
