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
import { SettingsModal } from "./settings-modal";
import { Settings } from "lucide-react";

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
    const [showSettings, setShowSettings] = useState(false);
    const [pendingCount, setPendingCount] = useState(0);
    const [blockedIds, setBlockedIds] = useState<Set<string>>(new Set());
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

            // Fetch Blocked Users
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
            <aside className="w-full h-full bg-background text-foreground flex flex-col font-sans border-r border-divider">
                {/* Header */}
                <div className="p-6 pb-2 flex justify-between items-center">
                    <h1 className="text-foreground">Chats</h1>
                    <div className="flex gap-4">
                        <button onClick={() => setShowRequests(true)} className="relative p-2 rounded-full hover:bg-surface transition-colors">
                            <UserPlus className="w-6 h-6 text-text-secondary hover:text-primary" />
                            {pendingCount > 0 && (
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-background"></span>
                            )}
                        </button>
                        <button onClick={handleCreateRoom} className="p-2 rounded-full hover:bg-surface transition-colors">
                            <Plus className="w-6 h-6 text-text-secondary hover:text-primary" />
                        </button>
                    </div>
                </div>

                {/* Search Bar - Glass Effect */}
                <div className="px-6 py-4">
                    <div className="bg-surface-glass-light rounded-md flex items-center px-4 py-2 gap-3 border border-transparent focus-within:border-primary/50 transition-all">
                        <Search className="w-5 h-5 text-text-secondary" />
                        <input
                            placeholder="Search chats..."
                            className="bg-transparent border-none outline-none text-body w-full placeholder:text-text-tertiary text-foreground"
                            onClick={() => setShowSearch(true)}
                        />
                    </div>
                </div>

                {/* Matches Rail (Connections) */}
                <div className="px-6 pb-4">
                    <h3 className="text-small font-semibold text-text-tertiary mb-4 tracking-wider uppercase">Matches</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        <button onClick={() => setShowSearch(true)} className="flex flex-col items-center gap-2 min-w-[60px]">
                            <div className="w-[60px] h-[60px] rounded-full border-2 border-dashed border-divider hover:border-primary flex items-center justify-center text-text-tertiary hover:text-primary transition-colors bg-surface/50">
                                <Search className="w-6 h-6" />
                            </div>
                            <span className="text-small font-medium text-text-secondary">Search</span>
                        </button>

                        {matches.map((match) => {
                            const isRequester = match.requester_id === user.id;
                            const profile = isRequester ? match.addressee : match.requester;
                            if (!profile) return null;

                            return (
                                <div key={match.id} className="flex flex-col items-center gap-2 min-w-[60px]">
                                    <div className="relative">
                                        <Avatar src={profile.avatar_url || ''} fallback={profile.username?.[0] || "?"} className="w-[60px] h-[60px] border-2 border-primary-dark p-0.5" />
                                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-online border-2 border-background rounded-full"></span>
                                    </div>
                                    <span className="text-small font-medium text-center truncate w-full text-foreground">{profile.username}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="space-y-0">
                        {rooms.filter(room => {
                            const other = room.room_participants?.find(p => p.user_id !== user?.id);
                            if (other && blockedIds.has(other.user_id)) return false;
                            return true;
                        }).map((room) => {
                            let displayName = room.name || "Unnamed Chat";
                            let displayAvatar = undefined;
                            let isOnline = false;

                            if (room.room_participants) {
                                const other = room.room_participants.find(p => p.user_id !== user?.id);
                                if (other && other.profiles) {
                                    displayName = other.profiles.full_name || other.profiles.username || "Unknown User";
                                    displayAvatar = other.profiles.avatar_url;
                                    // Mocking online status for UI alignment
                                    isOnline = true;
                                }
                            }

                            const isActive = pathname === `/chat/${room.id}`;

                            return (
                                <Link href={`/chat/${room.id}`} key={room.id} className="block">
                                    <div className={cn(
                                        "px-6 py-4 transition-all cursor-pointer flex items-center gap-4 border-b border-divider",
                                        isActive ? "bg-primary/10" : "hover:bg-surface/30"
                                    )}>
                                        <div className="relative">
                                            <Avatar
                                                src={displayAvatar}
                                                fallback={displayName[0] || "?"}
                                                className="w-[56px] h-[56px] rounded-full"
                                            />
                                            {isOnline && (
                                                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-online border-[2px] border-surface rounded-full"></span>
                                            )}
                                        </div>
                                        <div className="overflow-hidden flex-1">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <p className={cn("text-body-bold truncate", isActive ? "text-primary" : "text-foreground")}>
                                                    {displayName}
                                                </p>
                                                <p className="text-small text-text-secondary">
                                                    {room.updated_at ? new Date(room.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className={cn("text-caption truncate flex-1 pr-2", isActive ? "text-primary/70" : "text-text-secondary")}>
                                                    Tap to chat
                                                </p>
                                                {/* Unread badge logic removed for simplicity in UI alignment */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                        {rooms.length === 0 && (
                            <p className="text-caption text-text-tertiary px-6 py-4 italic">No messages yet</p>
                        )}
                    </div>
                </div>

                {/* Footer User Info */}
                <div className="p-4 border-t border-divider glass-header sticky bottom-0">
                    <div className="flex items-center gap-3">
                        <Avatar src={user?.user_metadata?.avatar_url} fallback={user?.email || "?"} className="w-10 h-10 ring-2 ring-divider shadow-reference-sm" />
                        <div className="flex-1 overflow-hidden">
                            <p className="text-caption font-semibold truncate text-foreground">{user?.email}</p>
                            <p className="text-small text-primary flex items-center gap-1">
                                My Profile
                            </p>
                        </div>
                        <button onClick={() => setShowSettings(true)} className="text-text-secondary hover:text-foreground transition-colors p-2 hover:bg-surface rounded-full" title="Settings">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button onClick={handleLogout} className="text-text-secondary hover:text-red-400 transition-colors p-2 hover:bg-surface rounded-full" title="Logout">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>
            {showSearch && <UserSearch onClose={() => setShowSearch(false)} currentUserId={user?.id} />}
            {showRequests && <ConnectionRequests onClose={() => setShowRequests(false)} currentUserId={user?.id} />}
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} user={user} />}
        </>
    );
}
