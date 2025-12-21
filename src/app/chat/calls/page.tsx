"use client";

import { useState } from "react";
import { Search, Plus, Phone, Video, Clock, ArrowUpRight, ArrowDownLeft, X, Loader2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { GradientText } from "@/components/ui/gradient-text";
import { useCall } from "@/contexts/call-context";
import { useChat } from "@/contexts/chat-context";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";

export default function CallsPage() {
    const { callHistory, loading: callsLoading, initiateCall } = useCall();
    const { chats } = useChat();
    const { user } = useAuth();
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const formatDuration = (seconds: number) => {
        if (!seconds) return "0s";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const formatTime = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const recentContacts = Array.from(new Set(chats.map(c => c.userId))).map(id => {
        const chat = chats.find(c => c.userId === id);
        return {
            id,
            name: chat?.userName || 'User',
            avatar: chat?.userAvatar,
            gender: chat?.gender
        };
    }).filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleStartCall = (userId: string, type: 'audio' | 'video') => {
        setShowAddModal(false);
        initiateCall(userId, type);
    };

    const getNameColor = (gender?: string) => {
        switch (gender?.toLowerCase()) {
            case 'male': return '#00BFFF';
            case 'female': return '#FFB6C1';
            case 'other': return '#FFD700';
            default: return '#FFF';
        }
    };

    return (
        <div className="flex-1 flex flex-col bg-black h-full relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header matches Expo: Title, Doodle, Subtitle */}
            <header className="px-5 py-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-4 mb-0.5">
                        <GradientText text="Calls" className="text-[36px] font-bold tracking-[0.5px]" />
                        <img
                            src="/images/calls_doodle.png"
                            alt=""
                            className="w-[65px] h-[65px] object-contain opacity-80"
                        />
                    </div>
                    <p className="text-[#666] text-[13px] mt-0.5">Stay connected with voice & video.</p>
                </div>

                <button
                    onClick={() => setShowAddModal(true)}
                    className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#00BFFF] to-[#FFB6C1] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                >
                    <Plus className="w-[26px] h-[26px] text-white" />
                </button>
            </header>

            {/* Content Card */}
            <div className="flex-1 w-full max-w-5xl mx-auto p-5 pt-2 min-h-0 flex flex-col relative z-10">
                <div className="flex-1 bg-[#111] border border-[#222] rounded-[40px] overflow-hidden flex flex-col shadow-2xl relative">
                    {callsLoading ? (
                        <div className="flex flex-col items-center justify-center h-64">
                            <Loader2 className="w-10 h-10 animate-spin text-primary" />
                        </div>
                    ) : callHistory.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center pb-12">
                            <div className="w-[90px] h-[90px] rounded-[30px] bg-[#161616] flex items-center justify-center mb-5 border border-[#222]">
                                <Phone className="w-[40px] h-[40px] text-[#333]" strokeWidth={1.5} />
                            </div>
                            <p className="text-[#444] text-[16px] font-semibold mb-6">No recent calls yet.</p>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="px-[30px] py-[14px] rounded-[20px] border-2 border-[#FFB6C1] text-[#FFB6C1] text-[15px] font-black hover:bg-white/5 transition-colors"
                            >
                                Start a conversation
                            </button>
                        </div>
                    ) : (
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                            <div className="space-y-1">
                                {callHistory.map((item: any) => {
                                    const isOutgoing = item.caller_id === user?.id;
                                    const otherUser = isOutgoing ? item.receiver : item.caller;
                                    const displayUser = otherUser || (item.profiles) || {};
                                    const isMissed = item.status === 'missed';

                                    return (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-[15px] p-[15px] px-5 hover:bg-white/[0.02] cursor-pointer rounded-[25px] border-b border-[#222] last:border-none"
                                        >
                                            <Avatar src={displayUser.avatar_url} fallback={displayUser.full_name?.[0]} className="w-[56px] h-[56px] rounded-full ring-2 ring-black" />

                                            <div className="flex-1">
                                                <h3 className="text-[#FFF] text-[18px] font-bold">{displayUser.full_name || displayUser.username || 'User'}</h3>
                                                <div className="flex items-center gap-[5px] mt-0.5">
                                                    {isOutgoing ? (
                                                        <ArrowUpRight className={cn("w-[14px] h-[14px]", isMissed ? "text-[#FFB6C1]" : "text-[#00BFFF]")} />
                                                    ) : (
                                                        <ArrowDownLeft className={cn("w-[14px] h-[14px]", isMissed ? "text-[#FFB6C1]" : "text-[#00BFFF]")} />
                                                    )}
                                                    <span className="text-[#555] text-[13px] font-medium">
                                                        {new Date(item.created_at).toLocaleDateString(undefined, { weekday: 'short' })}, {new Date(item.created_at).toLocaleDateString()} • {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                                <p className="text-[#444] text-[11px] mt-0.5">Duration: {formatDuration(item.duration)}</p>
                                            </div>

                                            <button
                                                onClick={() => handleStartCall(isOutgoing ? item.receiver_id : item.caller_id, item.type as any)}
                                                className="p-3 bg-[#161616] border border-[#222] rounded-[15px] hover:bg-white/10 transition-colors"
                                            >
                                                {item.type === 'video' ? (
                                                    <Video className="w-5 h-5 text-[#00BFFF]" />
                                                ) : (
                                                    <Phone className="w-5 h-5 text-[#00BFFF]" />
                                                )}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Call Modal matches Image 2 (Bottom Sheet) */}
            {showAddModal && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(0,0,0,0.95)] sm:items-center p-0 sm:p-4">
                    <div
                        className="w-full max-w-md bg-[#050505] h-[85%] rounded-t-[35px] sm:rounded-[35px] flex flex-col animate-in slide-in-from-bottom duration-300 border-t border-[#111] p-[30px] pb-[60px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-[25px]">
                            <GradientText text="New Call" className="text-[24px] font-[900] tracking-[-0.5px]" />
                            <button onClick={() => setShowAddModal(false)}>
                                <X className="w-8 h-8 text-[#444]" />
                            </button>
                        </div>

                        <div className="flex items-center bg-[#111] rounded-[18px] px-[18px] h-[55px] gap-3 mb-[25px] border border-[#222]">
                            <Search className="w-5 h-5 text-[#666]" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Find a friend..."
                                className="flex-1 bg-transparent text-white text-[17px] font-medium outline-none placeholder-[#444]"
                            />
                        </div>

                        <p className="text-[#444] text-[12px] font-[900] tracking-[2px] mb-[15px]">RECENT CONTACTS</p>

                        <div className="flex-1 overflow-y-auto custom-scrollbar -mr-2 pr-2">
                            {recentContacts.map(contact => (
                                <div key={contact.id} className="flex items-center py-[14px] gap-[18px]">
                                    <Avatar src={contact.avatar} fallback={contact.name[0]} className="w-[48px] h-[48px] rounded-full" />
                                    <span className="flex-1 text-[#FFF] text-[18px] font-semibold">{contact.name}</span>

                                    <div className="flex gap-[20px]">
                                        <button
                                            onClick={() => handleStartCall(contact.id, 'audio')}
                                            className="w-[44px] h-[44px] rounded-[15px] bg-[#111] border border-[#222] flex items-center justify-center hover:bg-[#222] transition-colors"
                                        >
                                            <Phone className="w-6 h-6 text-[#00BFFF]" />
                                        </button>
                                        <button
                                            onClick={() => handleStartCall(contact.id, 'video')}
                                            className="w-[44px] h-[44px] rounded-[15px] bg-[#111] border border-[#222] flex items-center justify-center hover:bg-[#222] transition-colors"
                                        >
                                            <Video className="w-6 h-6 text-[#FFB6C1]" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setShowAddModal(false)} />
                </div>
            )}
        </div>
    );
}
