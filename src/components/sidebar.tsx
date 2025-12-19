"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogOut, Plus, Search, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserSearch } from "./user-search";
import { ConnectionRequests } from "./connection-requests";

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
        }
    }[];
    updated_at: string;
    room_participants?: {
        user_id: string;
        profiles: {
            username: string;
            full_name: string;
            avatar_url: string;
        }
    }[];
}

interface Connection {
    id: string;
    addressee_id: string;
    requester_id: string;
    status: string;
    requester?: { username: string; avatar_url: string; full_name: string };
    addressee?: { username: string; avatar_url: string; full_name: string };
}

export function Sidebar({ user }: { user: any }) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [matches, setMatches] = useState<Connection[]>([]);
    const [showSearch, setShowSearch] = useState(false);
    const [showRequests, setShowRequests] = useState(false);
    const [pendingCount, setPendingCount] = useState(0);
    const supabase = createClient();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const fetchRooms = async () => {
            // For simplicity in this demo, fetching all rooms. 
            // In real app: fetch rooms where user is participant.
            // Fetch rooms with participants to determine names for DMs
            const { data } = await supabase
                .from("rooms")
                .select(`
                    *,
                    room_participants(
                        user_id,
                        profiles(username, full_name, avatar_url)
                    )
                `)
                .order("created_at", { ascending: false });

            if (data) setRooms(data as any);
        };

        const fetchPendingCount = async () => {
            const { count } = await supabase
                .from("connections")
                .select("*", { count: 'exact', head: true })
                .eq("addressee_id", user?.id)
                .eq("status", "pending");
            setPendingCount(count || 0);

            // Fetch "Matches" (Accepted connections)
            const { data: matchesData } = await supabase
                .from("connections")
                .select(`
                    *,
                    requester:profiles!requester_id(username, avatar_url, full_name),
                    addressee:profiles!addressee_id(username, avatar_url, full_name)
                `)
                .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)
                .eq("status", "accepted")
                .limit(10);

            if (matchesData) setMatches(matchesData as any);
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

        const { data, error } = await supabase.from("rooms").insert({ name, is_group: true }).select().single();
        if (error) alert(error.message);
        else {
            // Join the room as creator
            await supabase.from("room_participants").insert({ room_id: data.id, user_id: user.id });
            router.push(`/chat/${data.id}`);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    return (
        <>
            <aside className="w-full h-full bg-black text-white flex flex-col font-sans border-r border-white/10">
                {/* Header */}
                <div className="p-6 pb-2 flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight">GOSSIP</h2>
                    <div className="flex gap-4">
                        <button onClick={() => setShowRequests(true)} className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
                            <UserPlus className="w-5 h-5 text-gray-400" />
                            {pendingCount > 0 && (
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-black"></span>
                            )}
                        </button>
                        <button onClick={handleCreateRoom} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            <Plus className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Matches Rail */}
                <div className="px-6 py-4">
                    <h3 className="text-xs font-semibold text-gray-500 mb-4 tracking-wider uppercase">Matches</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {/* Search Button styled as avatar circle */}
                        <button onClick={() => setShowSearch(true)} className="flex flex-col items-center gap-2 min-w-[60px]">
                            <div className="w-[60px] h-[60px] rounded-full border-2 border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-colors">
                                <Search className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium text-white/70">Search</span>
                        </button>

                        {matches.map((match) => {
                            const isRequester = match.requester_id === user.id;
                            const profile = isRequester ? match.addressee : match.requester;
                            // Only show if profile exists
                            if (!profile) return null;

                            return (
                                <div key={match.id} className="flex flex-col items-center gap-2 min-w-[60px]">
                                    <div className="relative">
                                        <Avatar src={profile.avatar_url || ''} fallback={profile.username?.[0] || "?"} className="w-[60px] h-[60px] border-2 border-primary/50 p-0.5" />
                                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full"></span>
                                    </div>
                                    <span className="text-xs font-medium text-center truncate w-full">{profile.username}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-6 mb-2">
                    <div className="bg-[#1F2125] rounded-full flex items-center px-4 py-3 gap-3">
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                            placeholder="Search"
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500 text-white"
                            onClick={() => setShowSearch(true)}
                        />
                    </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
                    {rooms.map((room) => {
                        // Determine display name and avatar
                        let displayName = room.name || "Unnamed Room";
                        let displayAvatar = undefined; // Default room avatar

                        if (!room.is_group && room.room_participants) {
                            const other = room.room_participants.find(p => p.user_id !== user?.id);
                            if (other && other.profiles) {
                                displayName = other.profiles.full_name || other.profiles.username || "Unknown User";
                                displayAvatar = other.profiles.avatar_url;
                            }
                        }

                        return (
                            <Link href={`/chat/${room.id}`} key={room.id}>
                                <div className={cn(
                                    "p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-4",
                                    pathname === `/chat/${room.id}`
                                        ? "bg-[#1F2125]" // Active Item Background
                                        : "hover:bg-white/5"
                                )}>
                                    <div className="relative">
                                        <Avatar src={displayAvatar} fallback={displayName[0] || "?"} className="w-12 h-12" />
                                        {/* Assuming online status for demo, normally fetched from presence */}
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
                                    </div>
                                    <div className="overflow-hidden flex-1">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <p className="font-semibold text-sm text-white">{displayName}</p>
                                            <span className="text-xs text-gray-500">
                                                {new Date(room.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 truncate font-light">
                                            {room.is_group ? "Group Chat" : "Tap to chat"}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                    {rooms.length === 0 && (
                        <div className="text-center text-muted-foreground text-sm py-8">
                            No conversations yet. <br /> Find people to start gossiping!
                        </div>
                    )}
                </div>

                {/* Footer User Info */}
                <div className="p-4 border-t border-white/5 bg-black">
                    <div className="flex items-center gap-3">
                        <Avatar src={user?.user_metadata?.avatar_url} fallback={user?.email || "?"} className="w-10 h-10" />
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-semibold truncate text-white">{user?.email}</p>
                            <p className="text-xs text-green-500 flex items-center gap-1">
                                My Profile
                            </p>
                        </div>
                        <button onClick={handleLogout} className="text-gray-500 hover:text-white transition-colors">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>
            {showSearch && <UserSearch onClose={() => setShowSearch(false)} currentUserId={user?.id} />}
            {showRequests && <ConnectionRequests onClose={() => setShowRequests(false)} currentUserId={user?.id} />}
        </>
    );
}
