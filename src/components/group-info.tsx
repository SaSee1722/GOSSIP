"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { X, UserPlus, Trash2, Shield, ShieldAlert, LogOut } from "lucide-react";
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
    const [isGroup, setIsGroup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

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
        alert("Group name updated");
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
        if (error) alert(error.message);
        else {
            alert("Member added");
            setShowAdd(false);
            fetchDetails();
        }
    };

    const removeMember = async (userId: string) => {
        if (!confirm("Remove this user?")) return;
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', userId);
        setParticipants(prev => prev.filter(p => p.id !== userId));
    };

    const promoteMember = async (userId: string) => {
        await supabase.from('room_participants').update({ role: 'admin' }).eq('room_id', roomId).eq('user_id', userId);
        fetchDetails();
    };

    const leaveGroup = async () => {
        if (!confirm("Leave this group?")) return;
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', currentUserId);
        onClose();
        window.location.href = '/chat';
    };

    if (loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-[#1e1e24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white">Group Info</h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-5 h-5 text-white/70" />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto custom-scrollbar flex-1 space-y-6">
                    {/* Header Info */}
                    <div className="flex flex-col items-center gap-3">
                        <Avatar fallback={roomName} className="w-20 h-20 text-2xl" />
                        {isAdmin ? (
                            <div className="flex gap-2 w-full">
                                <input
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-center font-bold text-white focus:border-primary outline-none"
                                />
                                <button onClick={handleUpdateName} className="text-xs text-primary hover:underline">Save</button>
                            </div>
                        ) : (
                            <h3 className="text-xl font-bold text-white">{roomName}</h3>
                        )}
                        <p className="text-xs text-white/40">{participants.length} members</p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4">
                        {isAdmin && (
                            <button onClick={() => setShowAdd(!showAdd)} className="flex flex-col items-center gap-1 text-primary hover:opacity-80">
                                <div className="p-3 bg-primary/10 rounded-full"><UserPlus className="w-5 h-5" /></div>
                                <span className="text-xs">Add</span>
                            </button>
                        )}
                        <button onClick={leaveGroup} className="flex flex-col items-center gap-1 text-red-400 hover:opacity-80">
                            <div className="p-3 bg-red-500/10 rounded-full"><LogOut className="w-5 h-5" /></div>
                            <span className="text-xs">Leave</span>
                        </button>
                    </div>

                    {/* Add Member Search */}
                    {showAdd && (
                        <div className="bg-white/5 p-3 rounded-xl space-y-2 animate-in slide-in-from-top-2">
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                                    placeholder="Search username..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button onClick={handleSearch} className="px-3 bg-primary rounded-lg text-white text-xs">Search</button>
                            </div>
                            <div className="space-y-1 max-h-32 overflow-y-auto">
                                {searchResults.map(u => (
                                    <div key={u.id} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <Avatar src={u.avatar_url || undefined} fallback={u.username || "?"} className="w-6 h-6" />
                                            <span className="text-sm text-white">{u.username}</span>
                                        </div>
                                        <button onClick={() => addMember(u.id)} className="text-primary text-xs hover:underline">Add</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Participants List */}
                    <div>
                        <h4 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-wider">Participants</h4>
                        <div className="space-y-2">
                            {participants.map((p) => (
                                <div key={p.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={p.avatar_url || undefined} fallback={p.username || "?"} />
                                        <div>
                                            <p className="text-sm font-medium text-white flex items-center gap-1">
                                                {p.full_name || p.username}
                                                {p.role === 'owner' && <ShieldAlert className="w-3 h-3 text-yellow-500" />}
                                                {p.role === 'admin' && <Shield className="w-3 h-3 text-blue-400" />}
                                            </p>
                                            <p className="text-xs text-white/40 capitalize">{p.role}</p>
                                        </div>
                                    </div>

                                    {isAdmin && currentUserId !== p.id && (
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {p.role === 'member' && (
                                                <button onClick={() => promoteMember(p.id)} className="p-1 hover:bg-blue-500/20 text-blue-400 rounded" title="Promote">
                                                    <Shield className="w-4 h-4" />
                                                </button>
                                            )}
                                            <button onClick={() => removeMember(p.id)} className="p-1 hover:bg-red-500/20 text-red-400 rounded" title="Remove">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
