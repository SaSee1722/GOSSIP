"use client";

import { useState } from "react";
import { Search, Plus, Users, ChevronRight, X, Loader2, MessageSquare, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { GradientText } from "@/components/ui/gradient-text";
import { useChat } from "@/contexts/chat-context";
import { useAuth } from "@/contexts/auth-context";
import { ChatService } from "@/services/chat-service";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function GroupsPage() {
    const { chats } = useChat();
    const { user } = useAuth();
    const router = useRouter();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [groupName, setGroupName] = useState("");
    const [loading, setLoading] = useState(false);

    const contacts = chats
        .filter(c => c.type === 'direct')
        .map(c => ({
            id: c.userId,
            name: c.userName,
            avatar: c.userAvatar,
            gender: (c as any).gender
        }));

    const toggleUser = (userId: string) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const handleCreateGroup = async () => {
        if (!groupName.trim() || selectedUsers.length < 1) return;

        setLoading(true);
        const { data: roomId, error } = await ChatService.createGroupChat(groupName, selectedUsers);

        if (!error && roomId) {
            setShowCreateModal(false);
            router.push(`/chat?roomId=${roomId}`);
        }
        setLoading(false);
    };

    const groupChats = chats.filter(c => c.type === 'group');

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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header matches Expo: Title, Doodle, Subtitle */}
            <header className="px-5 py-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-4 mb-0.5">
                        <GradientText text="Groups" className="text-[32px] font-bold tracking-[0.5px]" />
                        <img
                            src="/images/groups_doodle.png"
                            alt=""
                            className="w-[65px] h-[65px] object-contain opacity-80"
                        />
                    </div>
                    <p className="text-[#666] text-[14px] mt-0.5">Communities you belong to.</p>
                </div>

                <button
                    onClick={() => setShowCreateModal(true)}
                    className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#00BFFF] to-[#FFB6C1] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                >
                    <Plus className="w-7 h-7 text-white" />
                </button>
            </header>

            {/* Content Card */}
            <div className="flex-1 w-full max-w-5xl mx-auto p-5 pt-2 min-h-0 flex flex-col relative z-10">
                <div className="flex-1 bg-[#111] border border-[#222] rounded-[40px] overflow-hidden flex flex-col shadow-2xl relative">
                    {groupChats.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center pb-12">
                            <Users className="w-[80px] h-[80px] text-[#222]" strokeWidth={1.5} />
                            <p className="text-[#444] text-[18px] font-semibold mt-5">No group gossips yet.</p>
                            <button
                                onClick={() => setShowCreateModal(true)}
                                className="mt-5 px-6 py-3 rounded-full border border-[#333] text-[#FFB6C1] font-bold hover:bg-white/5 transition-colors"
                            >
                                Create Your First Group
                            </button>
                        </div>
                    ) : (
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                            <div className="space-y-1">
                                {groupChats.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => router.push(`/chat?roomId=${item.id}`)}
                                        className="flex items-center gap-[15px] py-[15px] px-[20px] rounded-[25px] hover:bg-white/[0.03] active:bg-white/[0.05] transition-colors cursor-pointer border-b border-[#222] last:border-none"
                                    >
                                        <Avatar src={item.userAvatar} fallback={item.userName[0]} className="w-[60px] h-[60px] rounded-full ring-2 ring-black" />

                                        <div className="flex-1 overflow-hidden">
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="text-[#FFF] text-[17px] font-bold truncate">{item.userName}</h3>
                                                <span className="text-[#444] text-[12px]">
                                                    {item.lastMessageTime ? new Date(item.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                </span>
                                            </div>
                                            <p className="text-[#888] text-[14px] truncate">
                                                {item.lastMessage}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-[18px] h-[18px] text-[#333]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showCreateModal && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(0,0,0,0.9)] sm:items-center p-0 sm:p-4">
                    <div
                        className="w-full max-w-md bg-[#050505] h-[85%] rounded-t-[30px] sm:rounded-[30px] p-[25px] flex flex-col animate-in slide-in-from-bottom duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <GradientText text="New Group" className="text-[24px] font-extrabold" />
                            <button onClick={() => setShowCreateModal(false)}>
                                <X className="w-8 h-8 text-[#444]" />
                            </button>
                        </div>

                        <input
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            placeholder="Group Name..."
                            className="w-full bg-[#111] text-white text-[16px] p-[15px] rounded-[15px] border border-[#222] mb-5 outline-none focus:border-[#444] placeholder-[#444]"
                        />

                        <p className="text-[#444] text-[12px] font-extrabold tracking-[1px] mb-[15px]">ADD FRIENDS</p>

                        <div className="flex-1 overflow-y-auto custom-scrollbar -mr-2 pr-2">
                            {contacts.map(contact => {
                                const isSelected = selectedUsers.includes(contact.id);
                                return (
                                    <div
                                        key={contact.id}
                                        onClick={() => toggleUser(contact.id)}
                                        className={cn(
                                            "flex items-center gap-[15px] py-[10px] cursor-pointer transition-colors rounded-xl px-2",
                                            isSelected ? "bg-[rgba(0,191,255,0.05)]" : "hover:bg-white/[0.02]"
                                        )}
                                    >
                                        <div className="relative">
                                            <Avatar src={contact.avatar} fallback={contact.name[0]} className="w-[50px] h-[50px] rounded-full" />
                                            {isSelected && (
                                                <div className="absolute -bottom-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-[#FFB6C1] flex items-center justify-center border-2 border-black">
                                                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                                                </div>
                                            )}
                                        </div>
                                        <span className={cn(
                                            "flex-1 text-[16px] font-semibold",
                                            isSelected ? "text-[#00BFFF]" : "text-white"
                                        )}>
                                            {contact.name}
                                        </span>
                                        {isSelected ? (
                                            <div className="w-6 h-6 rounded bg-[#FFB6C1] flex items-center justify-center">
                                                <Check className="w-4 h-4 text-black" strokeWidth={3} />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded border-2 border-[#333]" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={handleCreateGroup}
                            disabled={loading}
                            className="mt-5 w-full h-[55px] rounded-[20px] bg-gradient-to-br from-[#00BFFF] to-[#FFB6C1] flex items-center justify-center disabled:opacity-70 transition-opacity button-shadow"
                        >
                            {loading ? <Loader2 className="w-6 h-6 text-white animate-spin" /> : <span className="text-white text-[16px] font-bold">Create Gossip Group</span>}
                        </button>
                    </div>

                    {/* Click outside to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setShowCreateModal(false)} />
                </div>
            )}
        </div>
    );
}
