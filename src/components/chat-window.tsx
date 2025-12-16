"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { Send, Phone, Video, MoreVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCall } from "@/contexts/call-context";

export default function ChatWindow({ roomId, user }: { roomId: string; user: any }) {
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [room, setRoom] = useState<any>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const supabase = createClient();

    // Use CallContext
    const { startCall } = useCall();

    useEffect(() => {
        const fetchRoomAndMessages = async () => {
            const { data: roomData } = await supabase.from("rooms").select("*").eq("id", roomId).single();
            setRoom(roomData);

            const { data: msgData } = await supabase
                .from("messages")
                .select(`*, profiles(*)`)
                .eq("room_id", roomId)
                .order("created_at", { ascending: true });

            if (msgData) setMessages(msgData);
        };

        fetchRoomAndMessages();

        const channel = supabase
            .channel(`room:${roomId}`)
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `room_id=eq.${roomId}` },
                async (payload) => {
                    // Fetch the full message with profile to ensure we display it correctly
                    const { data } = await supabase.from("messages").select(`*, profiles(*)`).eq("id", payload.new.id).single();
                    if (data) setMessages((prev) => [...prev, data]);
                })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [roomId]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const { error } = await supabase.from("messages").insert({
            room_id: roomId,
            user_id: user.id,
            content: newMessage,
        });

        if (error) {
            console.error(error);
            alert("Failed to send");
        } else {
            setNewMessage("");
        }
    };

    if (!room) return <div className="flex-1 flex items-center justify-center">Loading chat...</div>;

    return (
        <div className="flex flex-col h-full bg-background/50 backdrop-blur-sm">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-card/30">
                <div className="flex items-center gap-3">
                    <Avatar fallback={room.name || "R"} />
                    <div>
                        <h3 className="font-bold">{room.name || "Chat Room"}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Active now
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => startCall(roomId, false)}
                        className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => startCall(roomId, true)}
                        className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>


            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.map((msg) => {
                    const isMe = msg.user_id === user.id;
                    return (
                        <div key={msg.id} className={cn("flex gap-3", isMe ? "flex-row-reverse" : "")}>
                            {!isMe && <Avatar src={msg.profiles?.avatar_url} fallback={msg.profiles?.username || "?"} className="w-8 h-8 mt-1" />}
                            <div className={cn(
                                "max-w-[70%] rounded-2xl p-3 text-sm relative group transition-all",
                                isMe
                                    ? "bg-primary text-primary-foreground rounded-tr-sm shadow-[0_5px_15px_rgba(139,92,246,0.3)]"
                                    : "bg-muted text-foreground rounded-tl-sm"
                            )}>
                                <p>{msg.content}</p>
                                <span className="text-[10px] opacity-70 mt-1 block text-right">
                                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-card/30">
                <div className="flex gap-2 items-center bg-muted/50 p-2 rounded-xl border border-border focus-within:border-primary/50 transition-colors">
                    <input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none outline-none px-2 text-sm"
                    />
                    <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
    );
}
