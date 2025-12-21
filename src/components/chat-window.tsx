"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { ArrowLeft, Mic, Send, Paperclip, X, Image as ImageIcon, Check, CheckCheck, Trash2, Ban, Phone, Video, MoreVertical, Loader2, Square, Reply as ReplyIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/contexts/toast-context";
import { useCall } from "@/contexts/call-context";
import { Message, MessageType } from "@/lib/types";
import { ChatActions } from "./chat-actions";
import { GroupInfo } from "./group-info";
import { useParams, useRouter } from "next/navigation";

export default function ChatWindow({ roomId, user }: { roomId: string; user: any }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [room, setRoom] = useState<any>(null);
    const [uploading, setUploading] = useState(false);
    const [showActions, setShowActions] = useState(false);
    const [showGroupInfo, setShowGroupInfo] = useState(false);
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [replyingTo, setReplyingTo] = useState<Message | null>(null);
    const [isBlocked, setIsBlocked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [headerName, setHeaderName] = useState("Chat Room");
    const [headerAvatar, setHeaderAvatar] = useState<string | undefined>(undefined);
    const [headerGender, setHeaderGender] = useState<string | undefined>(undefined);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const supabase = createClient();
    const router = useRouter();

    const { startCall } = useCall();
    const { addToast } = useToast();

    useEffect(() => {
        const fetchRoomAndMessages = async () => {
            setLoading(true);
            const { data: roomData } = await supabase
                .from("rooms")
                .select(`*, room_participants(user_id, profiles(username, full_name, avatar_url, gender))`)
                .eq("id", roomId)
                .single();

            setRoom(roomData);

            if (roomData) {
                if (roomData.is_group === false && roomData.room_participants) {
                    const other = roomData.room_participants.find((p: any) => p.user_id !== user.id);
                    if (other && other.profiles) {
                        const name = (other.profiles.full_name || other.profiles.username || "Unknown User").toUpperCase();
                        setHeaderName(name);
                        setHeaderAvatar(other.profiles.avatar_url);
                        setHeaderGender(other.profiles.gender);

                        const { data: blockData } = await supabase
                            .from("blocked_users")
                            .select("*")
                            .eq("blocker_id", user.id)
                            .eq("blocked_id", other.user_id)
                            .maybeSingle();

                        setIsBlocked(!!blockData);
                    }
                } else {
                    setHeaderName(`${(roomData.name || "Group Chat").toUpperCase()}...💖`);
                }
            }

            const { data: msgData } = await supabase
                .from("messages")
                .select(`*, profiles(username, avatar_url, gender), reply_item: messages!reply_to(content, message_type, profiles(username))`)
                .eq("room_id", roomId)
                .order("created_at", { ascending: true });

            if (msgData) setMessages(msgData as any);
            setLoading(false);
        };

        fetchRoomAndMessages();

        const channel = supabase
            .channel(`room:${roomId}`)
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `room_id=eq.${roomId}` },
                async (payload) => {
                    const { data } = await supabase.from("messages").select(`*, profiles(username, avatar_url, gender), reply_item: messages!reply_to(content, message_type, profiles(username))`).eq("id", payload.new.id).single();
                    if (data) setMessages((prev) => [...prev, data as any]);
                })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [roomId, user.id, supabase]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

        const unreadIds = messages
            .filter(m => m.user_id !== user.id && !m.read_at)
            .map(m => m.id);

        if (unreadIds.length > 0) {
            supabase
                .from("messages")
                .update({ read_at: new Date().toISOString() })
                .in("id", unreadIds)
                .then(() => { });
        }
    }, [messages, user.id, supabase]);

    const getNameColor = (gender?: string) => {
        switch (gender?.toLowerCase()) {
            case 'male': return '#00BFFF';
            case 'female': return '#FFB6C1';
            case 'other': return '#FFD700';
            default: return '#FFF';
        }
    };

    const handleSendMessage = async (e?: React.FormEvent, type: MessageType = 'text', mediaUrl?: string, meta?: any) => {
        if (e) e.preventDefault();
        if (isBlocked) return;

        let content = type === 'text' ? newMessage : null;
        if (type === 'text' && !content?.trim()) return;

        if (!content && type !== 'text') {
            if (type === 'image') content = '📷 Image';
            else if (type === 'video') content = '📹 Video';
            else if (type === 'audio') content = '🎤 Voice Note';
            else content = '📎 Attachment';
        }

        const { error } = await supabase.from("messages").insert({
            room_id: roomId,
            user_id: user.id,
            content: content,
            message_type: type,
            media_url: mediaUrl,
            media_meta: meta,
            reply_to: replyingTo?.id,
            status: 'sent',
            is_deleted: false
        });

        if (!error) {
            if (type === 'text') setNewMessage("");
            setReplyingTo(null);

            // Update room updated_at
            await supabase.from("rooms").update({ updated_at: new Date().toISOString() }).eq("id", roomId);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || isBlocked) return;

        setUploading(true);
        const fileName = `${Date.now()}_${file.name}`;
        const filePath = `${roomId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('chat-media')
            .upload(filePath, file);

        if (uploadError) {
            addToast(uploadError.message, "error");
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from('chat-media').getPublicUrl(filePath);

        let type: MessageType = 'document';
        if (file.type.startsWith('image/')) type = 'image';
        else if (file.type.startsWith('video/')) type = 'video';
        else if (file.type.startsWith('audio/')) type = 'audio';

        await handleSendMessage(undefined, type, publicUrl, { size: file.size, name: file.name });
        setUploading(false);
    };

    const handleDeleteMessage = async (messageId: string) => {
        const { error } = await supabase
            .from("messages")
            .update({ content: "🚫 Message deleted", is_deleted: true, media_url: null, media_meta: null })
            .eq("id", messageId);

        if (error) addToast("Failed to delete message", "error");
    };

    const startRecording = async () => {
        if (isBlocked) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setRecording(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            addToast("Could not access microphone", "error");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && recording) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    const cancelRecording = () => {
        stopRecording();
        setAudioBlob(null);
        chunksRef.current = [];
    };

    const sendVoiceNote = async () => {
        if (!audioBlob || isBlocked) return;
        setUploading(true);
        const fileName = `${Date.now()}.webm`;
        const filePath = `${roomId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('chat-media')
            .upload(filePath, audioBlob);

        if (uploadError) {
            addToast(uploadError.message, "error");
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from('chat-media').getPublicUrl(filePath);
        await handleSendMessage(undefined, 'audio', publicUrl, { duration: 0 });
        setAudioBlob(null);
        setUploading(false);
    };

    const handleBlockUser = async () => {
        if (!room || room.is_group) return;
        const other = room.room_participants?.find((p: any) => p.user_id !== user?.id);
        if (!other) return;

        try {
            if (isBlocked) {
                await supabase.from("blocked_users").delete().eq("blocker_id", user?.id).eq("blocked_id", other.user_id);
                setIsBlocked(false);
                addToast("User unblocked", "success");
            } else {
                await supabase.from("blocked_users").insert({ blocker_id: user?.id, blocked_id: other.user_id });
                setIsBlocked(true);
                addToast("User blocked", "error");
                router.push('/chat');
            }
        } catch (err: any) {
            addToast("Action failed", "error");
        }
    };

    if (loading) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center bg-black">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="mt-4 text-white/50 font-bold tracking-widest uppercase text-[10px]">Establishing Secure Line...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-black relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Chat Header */}
            <div className="px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-xl border-b border-white/5 z-20">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push('/chat')} className="p-2 -ml-2 hover:bg-white/5 rounded-xl text-white/30 hover:text-white transition-all">
                        <ArrowLeft className="w-6 h-6" strokeWidth={3} />
                    </button>
                    <div className="relative">
                        <div className="w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-br from-primary/30 to-secondary/30">
                            <Avatar src={headerAvatar} fallback={headerName[0] || "?"} className="w-full h-full rounded-[14px]" />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-online border-[3px] border-black rounded-full shadow-lg shadow-online/20"></div>
                    </div>
                    <div>
                        <h3 className="text-[17px] font-black tracking-tight" style={{ color: getNameColor(headerGender) }}>{headerName}</h3>
                        {room?.is_group ? (
                            <p className="text-[11px] font-black text-online uppercase tracking-widest mt-0.5">
                                {room.room_participants?.length || 0} online • {room.room_participants?.length || 0} members
                            </p>
                        ) : (
                            <p className="text-[11px] font-black text-online uppercase tracking-widest mt-0.5">Online</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => {
                            if (room?.is_group) setShowGroupInfo(true);
                            else setShowActions(true);
                        }}
                        className="p-2.5 hover:bg-white/5 rounded-xl text-white/40 hover:text-white transition-all"
                    >
                        <MoreVertical className="w-6 h-6" strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-10" ref={scrollRef}>
                <div className="flex justify-center mb-8">
                    <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Today</span>
                    </div>
                </div>

                {messages.map((msg, index) => {
                    const isMe = msg.user_id === user.id;
                    const prevMsg = messages[index - 1];
                    const isSameUser = prevMsg?.user_id === msg.user_id;

                    return (
                        <div key={msg.id} className={cn("flex flex-col", isMe ? "items-end" : "items-start")}>
                            {!isMe && !isSameUser && (
                                <span className="text-[10px] font-black text-white/20 mb-1.5 ml-14 uppercase tracking-wider" style={{ color: getNameColor((msg.profiles as any)?.gender) }}>
                                    {(msg.profiles as any)?.username}
                                </span>
                            )}
                            <div className={cn("flex items-end gap-3 max-w-[85%]", isMe && "flex-row-reverse")}>
                                {!isMe && (
                                    <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                                        {!isSameUser ? (
                                            <Avatar src={(msg.profiles as any)?.avatar_url || ''} fallback={(msg.profiles as any)?.username?.[0] || "?"} className="w-full h-full" />
                                        ) : <div className="w-full h-full" />}
                                    </div>
                                )}

                                <div className={cn(
                                    "px-4 py-2.5 relative group transition-all",
                                    isMe
                                        ? "bg-primary text-black rounded-[18px] rounded-br-[4px]"
                                        : "bg-[#1A1A1A] text-white rounded-[18px] rounded-bl-[4px]"
                                )}>
                                    {/* Action Buttons */}
                                    <div className={cn(
                                        "absolute -top-8 px-2 py-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all z-20",
                                        isMe ? "right-0" : "left-0"
                                    )}>
                                        <button
                                            onClick={() => setReplyingTo(msg)}
                                            className="text-white/60 hover:text-primary transition-colors"
                                        >
                                            <ReplyIcon size={14} />
                                        </button>
                                        {isMe && !msg.is_deleted && (
                                            <button
                                                onClick={() => handleDeleteMessage(msg.id)}
                                                className="text-white/60 hover:text-secondary transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        )}
                                    </div>

                                    {msg.is_deleted ? (
                                        <p className="italic text-[13px] opacity-40 font-medium tracking-tight">🚫 Ghost message deleted</p>
                                    ) : (
                                        <>
                                            {/* Replying To Preview */}
                                            {msg.reply_item && (
                                                <div className={cn(
                                                    "mb-2 p-2 rounded-xl flex flex-col gap-0.5 border-l-4",
                                                    isMe ? "bg-black/5 border-black/20" : "bg-white/5 border-primary/40"
                                                )}>
                                                    <span className={cn("text-[9px] font-black uppercase tracking-widest", isMe ? "text-black/50" : "text-primary/70")}>
                                                        {msg.reply_item.profiles?.username || 'GOSSIPER'}
                                                    </span>
                                                    <p className={cn("text-[11px] font-bold truncate italic opacity-60", isMe ? "text-black" : "text-white")}>
                                                        {msg.reply_item.message_type === 'text' ? msg.reply_item.content : `[MEDIA ${msg.reply_item.message_type.toUpperCase()}]`}
                                                    </p>
                                                </div>
                                            )}

                                            {msg.message_type === 'text' && <p className="text-[15px] font-medium leading-relaxed tracking-tight">{msg.content}</p>}
                                            {msg.message_type === 'image' && (
                                                <div className="rounded-2xl overflow-hidden my-1 border border-white/10">
                                                    <img src={msg.media_url || ''} alt="" className="max-w-full max-h-[400px] w-auto h-auto object-cover" />
                                                </div>
                                            )}
                                        </>
                                    )}

                                    <div className={cn("flex items-center gap-1.5 mt-1.5", isMe ? "justify-end" : "justify-start")}>
                                        <span className={cn("text-[10px] font-black uppercase tracking-widest", isMe ? "text-black/40" : "text-white/20")}>
                                            {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                        {isMe && (
                                            msg.read_at
                                                ? <CheckCheck size={12} className="text-black/60" />
                                                : <Check size={12} className="text-black/40" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {uploading && (
                    <div className="flex justify-end pr-4">
                        <div className="bg-primary/20 p-2 rounded-xl flex items-center gap-2 border border-primary/20">
                            <Loader2 className="w-4 h-4 animate-spin text-primary" />
                            <span className="text-[11px] font-black text-primary uppercase tracking-widest">Transmitting...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area matches Image 2 */}
            <form onSubmit={(e) => handleSendMessage(e, 'text')} className="p-4 bg-black">
                <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center bg-[#1A1A1A] rounded-[28px] px-4 py-1 border border-white/5">
                        <button type="button" className="p-2 text-white/40 hover:text-white">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                            </svg>
                        </button>
                        <input
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Message..."
                            className="flex-1 bg-transparent border-none outline-none px-2 text-[15px] text-white placeholder:text-white/20 h-11"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="p-2 text-white/40 hover:text-white"
                        >
                            <Paperclip className="w-5 h-5" />
                        </button>
                    </div>

                    <button
                        type={newMessage.trim() ? "submit" : "button"}
                        onClick={!newMessage.trim() ? (recording ? stopRecording : startRecording) : undefined}
                        className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                            newMessage.trim() ? "bg-primary text-black" : "bg-[#1A1A1A] text-white/60"
                        )}
                    >
                        {newMessage.trim() ? (
                            <Send className="w-5 h-5 ml-0.5" />
                        ) : (
                            <Mic className={cn("w-5 h-5", recording && "text-red-500 animate-pulse")} />
                        )}
                    </button>
                </div>
            </form>
            {showGroupInfo && <GroupInfo roomId={roomId} onClose={() => setShowGroupInfo(false)} currentUserId={user.id} />}
            {showActions && (
                <ChatActions
                    onClose={() => setShowActions(false)}
                    onVoiceCall={() => {
                        setShowActions(false);
                        startCall(roomId, false);
                    }}
                    onVideoCall={() => {
                        setShowActions(false);
                        startCall(roomId, true);
                    }}
                    onBlockUser={() => {
                        setShowActions(false);
                        handleBlockUser();
                    }}
                    isBlocked={isBlocked}
                    isGroup={false}
                />
            )}
        </div>
    );
}
