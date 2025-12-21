"use client";

import { X, Phone, Video, Lock, Ban } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatActionsProps {
    onClose: () => void;
    onVoiceCall: () => void;
    onVideoCall: () => void;
    onBlockUser: () => void;
    isBlocked: boolean;
    isGroup: boolean;
}

export function ChatActions({ onClose, onVoiceCall, onVideoCall, onBlockUser, isBlocked, isGroup }: ChatActionsProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4">
            <div
                className="w-full max-w-2xl bg-[#0A0A0A] border-t border-x border-white/10 rounded-t-[32px] sm:rounded-b-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 flex items-center justify-between border-b border-white/5">
                    <h2 className="text-xl font-bold tracking-tighter">
                        <span className="text-primary font-black">GOSSIP</span>{" "}
                        <span className="text-secondary font-black">ACTIONS</span>
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Actions List */}
                <div className="p-4 space-y-3 pb-12">
                    <button
                        onClick={onVoiceCall}
                        className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-[15px]">Voice Call</span>
                    </button>

                    <button
                        onClick={onVideoCall}
                        className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Video className="w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-[15px]">Video Call</span>
                    </button>

                    <button
                        className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                            <Lock className="w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-[15px]">Lock Chat</span>
                    </button>

                    <button
                        onClick={onBlockUser}
                        className={cn(
                            "w-full flex items-center gap-4 p-4 border rounded-2xl transition-all group",
                            isBlocked
                                ? "bg-green-500/5 border-green-500/20 hover:bg-green-500/10"
                                : "bg-red-500/5 border-red-500/20 hover:bg-red-500/10"
                        )}
                    >
                        <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                            isBlocked ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                        )}>
                            <Ban className="w-5 h-5" />
                        </div>
                        <span className={cn(
                            "font-bold text-[15px]",
                            isBlocked ? "text-green-500" : "text-red-500"
                        )}>
                            {isBlocked ? "Unblock User" : "Block User"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}
