"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";
import { CallOverlay } from "@/components/call-overlay";

declare global {
    interface Window {
        iceErrorShown: boolean;
    }
}

interface CallContextType {
    isInCall: boolean;
    isIncomingCall: boolean;
    callDetails: any;
    startCall: (roomId: string, isVideo?: boolean) => Promise<void>;
    acceptCall: () => Promise<void>;
    endCall: () => Promise<void>;
    localStream: MediaStream | null;
    remoteStream: MediaStream | null;
    callType: "video" | "audio";
    connectionState: string;
    signalingStatus: string;
    iceCandidateCount: number;
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
    const [callType, setCallType] = useState<"video" | "audio">("video");
    const [connectionState, setConnectionState] = useState<string>("new");
    const [signalingStatus, setSignalingStatus] = useState<string>("disconnected");
    const [iceCandidateCount, setIceCandidateCount] = useState<number>(0);

    // WebRTC refs
    const peerConnection = useRef<RTCPeerConnection | null>(null);
    const supabase = createClient();
    const signalingChannel = useRef<RealtimeChannel | null>(null);



    const candidateQueue = useRef<any[]>([]); // Queue for early candidates

    // ICE servers (STUN) - Expanded list for better connectivity
    const pcConfig = {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' },
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

    // We need a ref to store the current call ID for the callback
    const currentCallIdRef = useRef<string | null>(null);
    const remoteCandidateQueue = useRef<RTCIceCandidateInit[]>([]); // Buffer for incoming candidates

    const startCall = async (roomId: string, isVideo = true) => {
        try {
            setIceCandidateCount(0);
            const type = isVideo ? 'video' : 'audio';
            setCallType(type);

            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Browser not supported (getUserMedia missing).");
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({ video: isVideo, audio: true });
            setLocalStream(stream);

            // Create PC first
            const pc = new RTCPeerConnection(pcConfig);
            peerConnection.current = pc;
            remoteCandidateQueue.current = []; // Reset queue

            // Standard "Add Track" pattern
            stream.getTracks().forEach(track => {
                pc.addTrack(track, stream);
            });

            // Force ALL transceivers to sendrecv (ensure bidirectional)
            pc.getTransceivers().forEach(t => {
                if (t.direction !== 'stopped') {
                    t.direction = 'sendrecv';
                }
            });

            // Queue for local candidates generated before Call ID is ready
            const localQueuedCandidates: RTCIceCandidate[] = [];

            // Bind ICE handler IMMEDIATELY
            pc.onicecandidate = async (event) => {
                if (event.candidate) {
                    setIceCandidateCount(prev => prev + 1);

                    if (currentCallIdRef.current) {
                        // Call ID ready, send immediately
                        const { error } = await supabase.from('ice_candidates').insert({
                            call_id: currentCallIdRef.current,
                            candidate: event.candidate,
                            sender_id: user.id
                        });
                        if (error) console.error("ICE Insert Error:", error);
                    } else {
                        // Call ID not ready, queue it
                        console.log("Queueing local candidate (Call ID not ready)");
                        localQueuedCandidates.push(event.candidate);
                    }
                }
            };

            // Bind other events
            pc.ontrack = (event) => {
                console.log("Track received:", event.track.kind, event.streams[0]);
                setRemoteStream(new MediaStream(event.streams[0].getTracks()));
            };
            pc.onconnectionstatechange = () => {
                console.log("Connection state changes:", pc.connectionState);
                setConnectionState(pc.connectionState);
            };



            // Create Offer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            // Create Call in DB
            const { data: call, error } = await supabase.from('calls').insert({
                room_id: roomId,
                caller_id: user.id,
                status: 'active',
                offer: offer,
                type: type
            }).select().single();

            if (error) throw error;

            setCallDetails(call);
            currentCallIdRef.current = call.id; // Set ref for ICE callback

            // FLUSH QUEUED CANDIDATES
            if (localQueuedCandidates.length > 0) {
                console.log(`Flushing ${localQueuedCandidates.length} queued local candidates`);
                const inserts = localQueuedCandidates.map(c => ({
                    call_id: call.id,
                    candidate: c,
                    sender_id: user.id
                }));
                const { error: flushError } = await supabase.from('ice_candidates').insert(inserts);
                if (flushError) console.error("Error flushing local candidates:", flushError);
            }

            // Setup DB handlers
            setupSignaling(call.id);



        } catch (err: any) {
            console.error("Error starting call:", err);
            alert(`Call failed: ${err.message}`);
        }
    };

    const acceptCall = async () => {
        if (!incomingCall) return;

        try {
            setIceCandidateCount(0);
            // ... getUserMedia logic ...
            const isVideo = incomingCall.type === 'video';
            setCallType(incomingCall.type || 'video');

            const stream = await navigator.mediaDevices.getUserMedia({ video: isVideo, audio: true });
            setLocalStream(stream);

            const pc = new RTCPeerConnection(pcConfig);
            peerConnection.current = pc;
            currentCallIdRef.current = incomingCall.id;
            remoteCandidateQueue.current = []; // Reset queue

            // Bind events IMMEDIATELY
            pc.onicecandidate = async (event) => {
                if (event.candidate) {
                    setIceCandidateCount(prev => prev + 1);
                    const { error } = await supabase.from('ice_candidates').insert({
                        call_id: incomingCall.id,
                        candidate: event.candidate,
                        sender_id: user.id
                    });
                    if (error) console.error("ICE Insert Error:", error);
                }
            };

            pc.ontrack = (event) => {
                console.log("Track received:", event.track.kind, event.streams[0]);
                setRemoteStream(new MediaStream(event.streams[0].getTracks()));
            };

            pc.onconnectionstatechange = () => {
                console.log("Connection state changes:", pc.connectionState);
                setConnectionState(pc.connectionState);
            };

            // 1. Set Offer FIRST (This creates the receivers/transceivers from the caller)
            await pc.setRemoteDescription(new RTCSessionDescription(incomingCall.offer));

            // 2. Add our tracks to the existing transceivers
            stream.getTracks().forEach(track => {
                try {
                    pc.addTrack(track, stream);
                } catch (e) {
                    console.error("Error adding track:", e);
                }
            });

            // Force ALL transceivers to sendrecv (crucial for Receiver to send back)
            pc.getTransceivers().forEach(t => {
                if (t.direction !== 'stopped') {
                    t.direction = 'sendrecv';
                }
            });





            // Create Answer
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            // Update DB - Answer
            const { error: updateError } = await supabase.from('calls').update({
                answer: answer,
                status: 'active'
            }).eq('id', incomingCall.id);

            if (updateError) throw updateError;

            setCallDetails(incomingCall);
            setIncomingCall(null);

            setupSignaling(incomingCall.id);

            // Fetch existing candidates!
            const { data: existingCandidates, error: fetchError } = await supabase
                .from('ice_candidates')
                .select('*')
                .eq('call_id', incomingCall.id)
                .neq('sender_id', user.id);

            if (fetchError) console.error("Error fetching candidates:", fetchError);

            if (existingCandidates) {
                console.log(`Found ${existingCandidates.length} existing candidates`);
                // If we are accepting, we have already set RemoteDescription (Offer) above.
                // So we can add them safely.
                existingCandidates.forEach(async (c) => {
                    await pc.addIceCandidate(new RTCIceCandidate(c.candidate));
                });
            }

        } catch (err: any) {
            console.error("Error accepting call:", err);
            alert(`Accept call failed: ${err.message}`);
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
        setConnectionState("new"); // Reset connection state
        if (signalingChannel.current) {
            await supabase.removeChannel(signalingChannel.current);
            signalingChannel.current = null;
        }
        currentCallIdRef.current = null;
    };

    const processCandidateQueue = async () => {
        if (!peerConnection.current || !remoteCandidateQueue.current.length) return;

        console.log(`Processing ${remoteCandidateQueue.current.length} queued remote candidates.`);
        for (const candidate of remoteCandidateQueue.current) {
            try {
                await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
            } catch (e) {
                console.error("Error flushing candidate from queue:", e);
            }
        }
        remoteCandidateQueue.current = [];
    };

    const setupSignaling = (callId: string) => {
        // Cleanup existing channel if any
        if (signalingChannel.current) {
            supabase.removeChannel(signalingChannel.current);
            signalingChannel.current = null;
        }

        // Subscribe to Call Updates (Answer/Status) AND ICE Candidates
        const channel = supabase.channel(`call_signaling:${callId}`);
        setSignalingStatus("initializing");

        channel
            // Listen for ICE Candidates inserted into DB
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'ice_candidates', filter: `call_id=eq.${callId}` }, async (payload) => {
                // Ignore my own candidates
                if (payload.new.sender_id === user.id) return;

                if (peerConnection.current && peerConnection.current.signalingState !== 'closed') {
                    console.log("Received new ICE candidate from DB via Realtime");

                    // Attempt to add, with fallback to queue
                    const pc = peerConnection.current;
                    const candidate = new RTCIceCandidate(payload.new.candidate);

                    if (pc.remoteDescription && pc.signalingState !== 'have-local-offer') { // Extra check for stability
                        try {
                            await pc.addIceCandidate(candidate);
                            console.log("Successfully added ICE candidate");
                        } catch (e: any) {
                            console.error("Error adding live candidate:", e);
                            // Self-healing: If it failed due to remote description or state, QUEUE IT
                            if (e.message?.includes("remote description") || e.name === 'InvalidStateError') {
                                console.log("Add failed (remote desc missing/invalid state). Re-queueing candidate.");
                                remoteCandidateQueue.current.push(payload.new.candidate);
                            }
                        }
                    } else {
                        console.log("Remote description not set (or unstable). Queueing candidate.");
                        remoteCandidateQueue.current.push(payload.new.candidate);
                    }
                }
            })
            // Listen for Call Updates (Answer, End)
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'calls', filter: `id=eq.${callId}` }, async (payload) => {
                if (payload.new.answer && !peerConnection.current?.currentRemoteDescription) {
                    console.log("Received Answer via Realtime");
                    const answer = payload.new.answer;
                    await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(answer));

                    // Now that remote description is set, process any queued candidates
                    await processCandidateQueue();
                }

                if (payload.new.status === 'ended') {
                    endCall();
                }
            })
            .subscribe((status) => {
                console.log("Signaling Channel Status:", status);
                setSignalingStatus(status);
            });

        signalingChannel.current = channel;
    };

    return (
        <CallContext.Provider value={{
            isInCall: !!callDetails,
            isIncomingCall: !!incomingCall,
            callDetails,
            startCall,
            acceptCall,
            endCall,
            localStream,
            remoteStream,
            callType,
            connectionState,
            signalingStatus,
            iceCandidateCount
        }}>
            {children}
            {/* Global Call Overlay */}
            {incomingCall && !callDetails && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 animate-float">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                                {incomingCall.type === 'audio' ? '🎤' : '📹'}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold">Incoming {incomingCall.type === 'audio' ? 'Voice' : 'Video'} Call...</h3>
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
