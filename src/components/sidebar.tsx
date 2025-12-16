"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogOut, Plus, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

interface Room {
    id: string;
    name: string | null;
    is_group: boolean;
    last_message?: string;
    updated_at: string;
}

export function Sidebar({ user }: { user: any }) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const supabase = createClient();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const fetchRooms = async () => {
            // For simplicity in this demo, fetching all rooms. 
            // In real app: fetch rooms where user is participant.
            const { data } = await supabase.from("rooms").select("*").order("created_at", { ascending: false });
            if (data) setRooms(data);
        };

        fetchRooms();

        const channel = supabase
            .channel("rooms_realtime")
            .on("postgres_changes", { event: "*", schema: "public", table: "rooms" }, (payload) => {
                // naive update
                fetchRooms();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

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
        router.push("/login"); // Fixed: using router.push instead of redirect
    };

    return (
        <aside className="w-full h-full border-r border-border bg-card/50 glass-card flex flex-col">
            <div className="p-4 border-b border-border flex justify-between items-center">
                <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    GOSSIP
                </h2>
                <button onClick={handleCreateRoom} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Plus className="w-5 h-5 text-primary" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {rooms.map((room) => (
                    <Link href={`/chat/${room.id}`} key={room.id}>
                        <div className={cn(
                            "p-3 rounded-xl transition-all cursor-pointer flex items-center gap-3 border border-transparent",
                            pathname === `/chat/${room.id}`
                                ? "bg-primary/10 border-primary/20 shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                                : "hover:bg-white/5"
                        )}>
                            <Avatar fallback={room.name || "Room"} />
                            <div className="overflow-hidden">
                                <p className="font-medium truncate text-sm">{room.name || "Unnamed Room"}</p>
                                <p className="text-xs text-muted-foreground truncate">
                                    {room.is_group ? "Group" : "Direct Message"}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}

                {rooms.length === 0 && (
                    <div className="text-center text-muted-foreground text-sm py-8">
                        No conversations yet. <br /> Create one to start gossiping!
                    </div>
                )}
            </div>

            <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3">
                    <Avatar src={user?.user_metadata?.avatar_url} fallback={user?.email || "?"} />
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium truncate">{user?.email}</p>
                        <p className="text-xs text-green-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Online
                        </p>
                    </div>
                    <button onClick={handleLogout} className="text-muted-foreground hover:text-red-400 transition-colors">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </aside>
    );
}
