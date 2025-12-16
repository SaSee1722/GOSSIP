"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "./ui/avatar";
import { useCall } from "@/contexts/call-context";

interface CallOverlayProps {
    roomId: string;
    currentUser: any;
    minimize?: boolean;
    onClose?: () => void;
}

export function CallOverlay({ roomId, currentUser, minimize = false, onClose }: CallOverlayProps) {
    const { localStream, remoteStream } = useCall();
    const [isMinimized, setIsMinimized] = useState(minimize);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);

    // Refs for media elements
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (localVideoRef.current && localStream) {
            localVideoRef.current.srcObject = localStream;
        }
    }, [localStream]);

    useEffect(() => {
        if (remoteVideoRef.current && remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream;
        }
    }, [remoteStream]);


    const toggleMinimize = () => setIsMinimized(!isMinimized);

    const toggleMute = () => {
        if (localStream) {
            localStream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
            setIsMuted(!isMuted);
        }
    }

    const toggleVideo = () => {
        if (localStream) {
            localStream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
            setIsVideoOff(!isVideoOff);
        }
    }

    return (
        <div className={cn(
            "fixed transition-all duration-500 ease-in-out bg-black/90 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden z-50",
            isMinimized
                ? "bottom-4 right-4 w-72 h-48 rounded-2xl"
                : "inset-4 rounded-3xl"
        )}>
            {/* Main Video Area */}
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Remote Video (Full Size) */}
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative">
                    {(!remoteStream) && (
                        <div className="flex flex-col items-center">
                            <Avatar fallback="Remote" className="w-24 h-24 bg-zinc-800 text-zinc-500 mb-4" />
                            <p className="text-zinc-500 animate-pulse">Connecting...</p>
                        </div>
                    )}
                    <video
                        ref={remoteVideoRef}
                        autoPlay
                        playsInline
                        className={cn("absolute inset-0 w-full h-full object-cover", !remoteStream && "hidden")}
                    />
                </div>

                {/* Local Video (PIP) */}
                <div className={cn(
                    "absolute transition-all duration-300 bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-white/10 z-10",
                    isMinimized ? "hidden" : "top-4 right-4 w-48 h-36"
                )}>
                    <div className="w-full h-full flex items-center justify-center relative bg-black">
                        {!localStream && <span className="text-xs text-muted-foreground">You</span>}
                        <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-full object-cover transform -scale-x-100" />
                    </div>
                </div>

                {/* Controls Overlay */}
                <div className={cn(
                    "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end transition-opacity z-20",
                    isMinimized ? "opacity-0 hover:opacity-100" : "opacity-100"
                )}>
                    {!isMinimized && (
                        <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold text-white">Call in Progress</h3>
                            <p className="text-white/60">Connected</p>
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <button onClick={toggleMute} className={cn("p-4 rounded-full transition-all", isMuted ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20")}>
                            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                        </button>

                        <button onClick={toggleVideo} className={cn("p-4 rounded-full transition-all", isVideoOff ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20")}>
                            {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                        </button>

                        <button
                            onClick={onClose}
                            className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/30 scale-100 hover:scale-110"
                        >
                            <PhoneOff className="w-8 h-8" />
                        </button>

                        <button onClick={toggleMinimize} className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
                            {isMinimized ? <Maximize2 className="w-6 h-6" /> : <Minimize2 className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
