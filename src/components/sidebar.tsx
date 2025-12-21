"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogOut, MessageSquare, Plus, Search, UserPlus, Users, Phone, Radio } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserSearch } from "./user-search";
import { ConnectionRequests } from "./connection-requests";
import { SettingsModal } from "./settings-modal";
import { Settings } from "lucide-react";
import { useStatus } from "@/contexts/status-context";
import { GradientText } from "./ui/gradient-text";

interface Room {
    id: string;
    name: string | null;
    is_group: boolean;
    last_message?: string;
    updated_at: string;
    room_participants?: {
        user_id: string;
        profiles: {
            username: string;
            full_name: string;
            avatar_url: string;
            gender?: string;
        }
    }[];
}

interface Connection {
    id: string;
    addressee_id: string;
    requester_id: string;
    status: string;
    requester?: { username: string; avatar_url: string; full_name: string; gender?: string };
    addressee?: { username: string; avatar_url: string; full_name: string; gender?: string };
}

export function Sidebar({ user }: { user: any }) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [matches, setMatches] = useState<Connection[]>([]);
    const [showSearch, setShowSearch] = useState(false);
    const [showRequests, setShowRequests] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [pendingCount, setPendingCount] = useState(0);
    const [blockedIds, setBlockedIds] = useState<Set<string>>(new Set());
    const { statuses } = useStatus();
    const supabase = createClient();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentRoomId = searchParams.get("roomId");

    useEffect(() => {
        const fetchRooms = async () => {
            const { data } = await supabase
                .from("rooms")
                .select(`
                    *,
                    room_participants(
                        user_id,
                        profiles(username, full_name, avatar_url, gender)
                    )
                `)
                .order("updated_at", { ascending: false });

            if (data) setRooms(data as any);
        };

        const fetchPendingCount = async () => {
            const { count } = await supabase
                .from("connections")
                .select("*", { count: 'exact', head: true })
                .eq("addressee_id", user?.id)
                .eq("status", "pending");
            setPendingCount(count || 0);

            const { data: matchesData } = await supabase
                .from("connections")
                .select(`
                    *,
                    requester:profiles!requester_id(username, avatar_url, full_name, gender),
                    addressee:profiles!addressee_id(username, avatar_url, full_name, gender)
                `)
                .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)
                .eq("status", "accepted")
                .limit(10);

            if (matchesData) setMatches(matchesData as any);

            const { data: blocks } = await supabase
                .from("blocked_users")
                .select("blocked_id")
                .eq("blocker_id", user.id);

            if (blocks) {
                setBlockedIds(new Set(blocks.map(b => b.blocked_id)));
            }
        };

        if (user) {
            fetchRooms();
            fetchPendingCount();
        }

        const roomChannel = supabase
            .channel("rooms_realtime")
            .on("postgres_changes", { event: "*", schema: "public", table: "rooms" }, () => fetchRooms())
            .subscribe();

        const connectionChannel = supabase
            .channel("connections_sidebar")
            .on("postgres_changes", { event: "*", schema: "public", table: "connections" }, () => fetchPendingCount())
            .subscribe();

        return () => {
            supabase.removeChannel(roomChannel);
            supabase.removeChannel(connectionChannel);
        };
    }, [user, supabase]);

    const handleCreateRoom = async () => {
        const name = prompt("Enter room name:");
        if (!name) return;

        const { data, error } = await supabase.from("rooms").insert({ name, is_group: true, updated_at: new Date().toISOString() }).select().single();
        if (error) alert(error.message);
        else {
            await supabase.from("room_participants").insert({ room_id: data.id, user_id: user.id });
            router.push(`/chat?roomId=${data.id}`);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    const getNameColor = (gender?: string) => {
        switch (gender?.toLowerCase()) {
            case 'male': return '#00BFFF';
            case 'female': return '#FFB6C1';
            case 'other': return '#FFD700';
            default: return '#FFF';
        }
    };

    const formatTime = (dateStr: string) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h`;
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    };

    return (
        <>
            <aside className="w-full h-full bg-black text-foreground flex flex-col font-sans overflow-hidden">
                {/* Header */}
                <div className="px-[20px] pt-[10px] pb-[15px]">
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-1">
                            <GradientText text="GOSSIP." className="text-[32px] font-[900] tracking-[0.5px]" />
                            <img
                                src="/images/gossip_header_doodle.png"
                                alt="Gossip Doodle"
                                className="w-[50px] h-[50px] object-contain -mt-2 opacity-80"
                            />
                        </div>
                        <button
                            onClick={() => setShowRequests(true)}
                            className="relative p-1"
                        >
                            <div className="w-[28px] h-[28px]">
                                <img src="data:image/svg+xml;base64,..." alt="" className="hidden" />
                                {/* Using Lucide icon to match Expo Ionicons name="notifications-outline" */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                            </div>
                            {pendingCount > 0 && (
                                <div className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 border-2 border-black flex items-center justify-center">
                                    <span className="text-white text-[10px] font-[900]">{pendingCount}</span>
                                </div>
                            )}
                        </button>
                    </div>
                    <p className="text-[13px] text-[#888] font-medium mt-1">Connect, share, and whisper in style.</p>
                </div>

                {/* Search Bar */}
                <div className="px-[20px] mb-[15px]">
                    <div className="bg-[#111] h-[48px] rounded-[24px] flex items-center px-[15px] gap-3 border border-[#222]">
                        <Search className="w-5 h-5 text-[#666]" />
                        <input
                            placeholder="Search friends or gossip..."
                            className="bg-transparent border-none outline-none text-[15px] w-full placeholder-[#666] text-white font-normal"
                            readOnly
                            onClick={() => setShowSearch(true)}
                        />
                    </div>
                </div>

                {/* Vibes Card */}
                <div className="px-4 mb-4">
                    <div className="bg-[#111] border border-[#222] rounded-[35px] p-5">
                        <h3 className="text-[11px] font-[800] tracking-[1.5px] text-[#444] mb-4 uppercase ml-1">VIBES</h3>
                        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
                            <button onClick={() => router.push('/chat/status')} className="flex flex-col items-center gap-3 min-w-[58px]">
                                <div className="relative">
                                    <Avatar src={user?.user_metadata?.avatar_url} fallback={user?.email?.[0] || "?"} className="w-[58px] h-[58px] rounded-full border-2 border-[#333] opacity-50" />
                                    <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-[#00BFFF] rounded-full flex items-center justify-center border-2 border-black">
                                        <Plus className="w-[12px] h-[12px] text-black" strokeWidth={3} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-bold text-white/60">Your Vibe</span>
                            </button>

                            {/* Active Statuses List */}
                            {Array.from(new Set(statuses.filter((s: any) => s.user_id !== user.id).map((s: any) => s.user_id))).map((userId: any) => {
                                const status = statuses.find((s: any) => s.user_id === userId);
                                if (!status || !status.profiles) return null;
                                const profile = status.profiles;

                                return (
                                    <button
                                        key={userId}
                                        onClick={() => router.push('/chat/status')}
                                        className="flex flex-col items-center gap-3 min-w-[58px]"
                                    >
                                        <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#00BFFF] to-[#FFB6C1]">
                                            <div className="p-[2px] bg-black rounded-full">
                                                <Avatar src={profile.avatar_url} fallback={profile.username?.[0] || "?"} className="w-[50px] h-[50px]" />
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-black text-center truncate w-full text-white tracking-tight uppercase">{profile.username}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Recent Gossips Card */}
                <div className="flex-1 px-4 mb-4 min-h-0 flex flex-col">
                    <div className="bg-[#111] border border-[#222] rounded-[35px] flex-1 flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="px-6 pt-5 pb-2 flex items-center gap-[10px]">
                            <h3 className="text-[11px] font-[800] tracking-[1.5px] text-[#444] uppercase">RECENT GOSSIPS</h3>
                        </div>

                        {/* Chat List */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                            <div className="space-y-1">
                                {rooms.filter(room => {
                                    const other = room.room_participants?.find(p => p.user_id !== user?.id);
                                    if (other && blockedIds.has(other.user_id)) return false;
                                    return true;
                                }).map((room) => {
                                    let displayName = room.name || "UNNAMED CHAT";
                                    let displayAvatar = undefined;
                                    let isOnline = false;
                                    let gender = undefined;

                                    if (room.room_participants) {
                                        const other = room.room_participants.find(p => p.user_id !== user?.id);
                                        if (other && other.profiles) {
                                            displayName = (other.profiles.full_name || other.profiles.username || "Unknown User").toUpperCase();
                                            displayAvatar = other.profiles.avatar_url;
                                            isOnline = true;
                                            gender = other.profiles.gender;
                                        }
                                    }

                                    const isActive = currentRoomId === room.id;

                                    return (
                                        <Link href={`/chat?roomId=${room.id}`} key={room.id} className="block group">
                                            <div className={cn(
                                                "px-6 py-3 transition-all cursor-pointer flex items-center gap-4",
                                                isActive ? "bg-primary/10" : "hover:bg-white/[0.03]"
                                            )}>
                                                <div className="relative">
                                                    <Avatar
                                                        src={displayAvatar}
                                                        fallback={displayName[0] || "?"}
                                                        className="w-[58px] h-[58px] rounded-full ring-2 ring-white/5"
                                                    />
                                                    {isOnline && (
                                                        <span className="absolute bottom-0 right-1 w-4 h-4 bg-online border-[3px] border-black rounded-full"></span>
                                                    )}
                                                </div>
                                                <div className="overflow-hidden flex-1 border-b border-white/5 pb-3 group-last:border-none">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <p className="text-[16px] font-black tracking-tight truncate" style={{ color: getNameColor(gender) }}>
                                                            {displayName}
                                                        </p>
                                                        <p className="text-[11px] font-bold text-white/20">
                                                            {formatTime(room.updated_at)}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <p className={cn("text-xs truncate flex-1 pr-2 font-medium", isActive ? "text-primary/70" : "text-white/30")}>
                                                            {room.last_message || "Started a gossip..."}
                                                        </p>
                                                        {/* Mocked unread badge if needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                                {rooms.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-12 text-center">
                                        <MessageSquare className="w-12 h-12 text-white/10 mb-4" />
                                        <p className="text-xs text-white/30 font-bold uppercase tracking-widest italic">No gossips yet</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer User Info */}
                <div className="p-4 border-t border-white/5 bg-black/80 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Avatar src={user?.user_metadata?.avatar_url} fallback={user?.email || "?"} className="w-10 h-10 ring-2 ring-white/10 shadow-lg" />
                        <div className="flex-1 overflow-hidden">
                            <p className="text-[13px] font-black truncate text-white uppercase tracking-tight">{user?.user_metadata?.username || user?.email?.split('@')[0]}</p>
                            <p className="text-[11px] font-bold text-primary flex items-center gap-1 uppercase tracking-widest">
                                Online
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <button onClick={() => setShowSettings(true)} className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl">
                                <Settings className="w-5 h-5" />
                            </button>
                            <button onClick={handleLogout} className="text-white/40 hover:text-secondary transition-colors p-2 hover:bg-white/5 rounded-xl">
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            {showSearch && <UserSearch onClose={() => setShowSearch(false)} currentUserId={user?.id} />}
            {showRequests && <ConnectionRequests onClose={() => setShowRequests(false)} currentUserId={user?.id} />}
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} user={user} />}
        </>
    );
}
