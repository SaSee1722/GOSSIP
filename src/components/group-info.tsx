"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { X, UserPlus, Trash2, Shield, ShieldAlert, LogOut, Users } from "lucide-react";
import { Profile } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GroupInfoProps {
    roomId: string;
    onClose: () => void;
    currentUserId: string;
}

interface Participant extends Profile {
    role: 'owner' | 'admin' | 'member';
}

export function GroupInfo({ roomId, onClose, currentUserId }: GroupInfoProps) {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [roomName, setRoomName] = useState("");
    const [roomDescription, setRoomDescription] = useState("ELLARUM VANGA ALWAYS WELCOME YOU");
    const [isGroup, setIsGroup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showParticipants, setShowParticipants] = useState(false);

    // For adding members
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Profile[]>([]);
    const [showAdd, setShowAdd] = useState(false);

    const supabase = createClient();

    useEffect(() => {
        fetchDetails();
    }, [roomId]);

    const fetchDetails = async () => {
        // Fetch Room
        const { data: room } = await supabase.from('rooms').select('*').eq('id', roomId).single();
        if (room) {
            setRoomName(room.name || "Chat");
            setIsGroup(room.is_group);
        }

        // Fetch Participants
        const { data: parts } = await supabase
            .from('room_participants')
            .select(`role, profiles(*)`)
            .eq('room_id', roomId);

        if (parts) {
            const mapped = parts.map((p: any) => ({
                ...p.profiles,
                role: p.role
            }));
            setParticipants(mapped);

            const me = mapped.find((p: any) => p.id === currentUserId);
            if (me && (me.role === 'owner' || me.role === 'admin')) setIsAdmin(true);
        }
        setLoading(false);
    };

    const handleUpdateName = async () => {
        if (!roomName.trim()) return;
        await supabase.from('rooms').update({ name: roomName }).eq('id', roomId);
    };

    const handleSearch = async () => {
        if (!searchQuery) return;
        const { data } = await supabase.from('profiles')
            .select('*')
            .ilike('username', `%${searchQuery}%`)
            .limit(5);
        if (data) setSearchResults(data);
    };

    const addMember = async (userId: string) => {
        const { error } = await supabase.from('room_participants').insert({
            room_id: roomId,
            user_id: userId,
            role: 'member'
        });
        if (!error) {
            setShowAdd(false);
            fetchDetails();
        }
    };

    const removeMember = async (userId: string) => {
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', userId);
        setParticipants(prev => prev.filter(p => p.id !== userId));
    };

    const promoteMember = async (userId: string) => {
        await supabase.from('room_participants').update({ role: 'admin' }).eq('room_id', roomId).eq('user_id', userId);
        fetchDetails();
    };

    const leaveGroup = async () => {
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', currentUserId);
        onClose();
        window.location.href = '/chat';
    };

    if (loading) return null;

    if (showParticipants) {
        return (
            <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm">
                <div className="w-full max-w-2xl bg-[#0A0A0A] border-t border-x border-white/10 rounded-t-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 max-h-[80vh] flex flex-col">
                    <div className="p-6 flex items-center justify-between border-b border-white/5">
                        <button onClick={() => setShowParticipants(false)} className="text-primary font-bold">Back</button>
                        <h2 className="text-xl font-bold tracking-tighter">
                            <span className="text-primary font-black">GROUP</span>{" "}
                            <span className="text-secondary font-black">MEMBERS</span>
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                            <X className="w-6 h-6 text-white" />
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                        <div className="space-y-3">
                            {participants.map((p) => (
                                <div key={p.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={p.avatar_url || undefined} fallback={p.username || "?"} className="w-10 h-10" />
                                        <div>
                                            <p className="font-bold text-white">{p.full_name || p.username}</p>
                                            <p className="text-[10px] text-white/40 uppercase font-black">{p.role}</p>
                                        </div>
                                    </div>
                                    {isAdmin && currentUserId !== p.id && (
                                        <div className="flex gap-2">
                                            <button onClick={() => removeMember(p.id)} className="text-red-500 text-xs font-bold">REMOVE</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4">
            <div
                className="w-full max-w-2xl bg-[#0A0A0A] border-t border-x border-white/10 rounded-t-[32px] sm:rounded-b-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header matches Image 3 */}
                <div className="p-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tighter">
                        <span className="text-primary font-black">GROUP</span>{" "}
                        <span className="text-secondary font-black">SETTINGS</span>
                    </h2>
                    <button onClick={onClose} className="p-1 px-[3px] border-2 border-primary rounded-md text-primary hover:bg-primary/10 transition-colors">
                        <X className="w-4 h-4 text-primary" strokeWidth={4} />
                    </button>
                </div>

                <div className="flex flex-col items-center p-6 pt-0 space-y-8">
                    {/* Centered Avatar */}
                    <div className="flex flex-col items-center gap-2">
                        <Avatar src={participants[0]?.avatar_url} fallback={roomName[0]} className="w-[100px] h-[100px] rounded-full border-4 border-white/5" />
                        <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Group Avatar</span>
                    </div>

                    {/* Inputs matches Image 3 */}
                    <div className="w-full space-y-6 pb-12">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Group Name</label>
                            <div className="p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl">
                                <input
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                    onBlur={handleUpdateName}
                                    className="w-full bg-transparent border-none outline-none text-white font-bold"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Description</label>
                            <div className="p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl min-h-[80px]">
                                <textarea
                                    value={roomDescription}
                                    onChange={(e) => setRoomDescription(e.target.value)}
                                    className="w-full bg-transparent border-none outline-none text-white font-bold resize-none h-full"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setShowParticipants(true)}
                            className="w-full flex items-center gap-4 p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl hover:bg-white/5 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Users className="w-5 h-5" />
                            </div>
                            <span className="text-white font-bold text-[15px]">View Members</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}
