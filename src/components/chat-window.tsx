"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { ArrowLeft, Mic, Send, Paperclip, X, Image as ImageIcon, Check, CheckCheck, Trash2, Ban, Phone, Video, MoreVertical, Loader2, Square, Reply as ReplyIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/contexts/toast-context";
import { useCall } from "@/contexts/call-context";
import { Message, MessageType } from "@/lib/types";
import { GroupInfo } from "./group-info";
import { useParams, useRouter } from "next/navigation";

export default function ChatWindow({ roomId, user }: { roomId: string; user: any }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [room, setRoom] = useState<any>(null);
    const [uploading, setUploading] = useState(false);
    const [showGroupInfo, setShowGroupInfo] = useState(false);
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [replyingTo, setReplyingTo] = useState<Message | null>(null);
    const [isBlocked, setIsBlocked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [headerName, setHeaderName] = useState("Chat Room");
    const [headerAvatar, setHeaderAvatar] = useState<string | undefined>(undefined);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const supabase = createClient();
    const params = useParams();
    const router = useRouter();

    // Use CallContext
    const { startCall } = useCall();
    const { addToast } = useToast();

    useEffect(() => {
        const fetchRoomAndMessages = async () => {
            setLoading(true);
            const { data: roomData } = await supabase
                .from("rooms")
                .select(`*, room_participants(user_id, profiles(username, full_name, avatar_url))`)
                .eq("id", roomId)
                .single();
            setRoom(roomData);

            if (roomData) {
                if (roomData.is_group === false && roomData.room_participants) {
                    const other = roomData.room_participants.find((p: any) => p.user_id !== user.id);
                    if (other) {
                        setHeaderName(other.profiles?.full_name || other.profiles?.username || "Chat");
                        setHeaderAvatar(other.profiles?.avatar_url);

                        // Check if blocked
                        const { data: blockData } = await supabase
                            .from("blocked_users")
                            .select("*")
                            .eq("blocker_id", user.id)
                            .eq("blocked_id", other.user_id)
                            .maybeSingle();

                        setIsBlocked(!!blockData);
                    }
                } else {
                    setHeaderName(roomData.name || "Group Chat");
                }
            }

            const { data: msgData } = await supabase
                .from("messages")
                .select(`*, profiles(*), reply_item: messages!reply_to(content, message_type, profiles(username))`)
                .eq("room_id", roomId)
                .order("created_at", { ascending: true });

            if (msgData) setMessages(msgData as any);
            setLoading(false);
        };

        fetchRoomAndMessages();

        const channel = supabase
            .channel(`room:${roomId} `)
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `room_id = eq.${roomId} ` },
                async (payload) => {
                    const { data } = await supabase.from("messages").select(`*, profiles(*), reply_item: messages!reply_to(content, content, message_type, profiles(username))`).eq("id", payload.new.id).single();
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

        // Mark unread messages as read
        const unreadIds = messages
            .filter(m => m.user_id !== user.id && !m.read_at)
            .map(m => m.id);

        if (unreadIds.length > 0) {
            const markRead = async () => {
                await supabase
                    .from("messages")
                    .update({ read_at: new Date().toISOString() })
                    .in("id", unreadIds);
            };
            markRead();
        }
    }, [messages, user.id, supabase]);

    const handleSendMessage = async (e?: React.FormEvent, type: MessageType = 'text', mediaUrl?: string, meta?: any) => {
        if (e) e.preventDefault();
        if (isBlocked) return;

        let content = type === 'text' ? newMessage : null;
        if (type === 'text' && !content?.trim()) return;

        // Fallback for media types to satisfy DB NOT NULL constraint
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
            status: 'sent' // Default per spec
        });

        if (error) {
            console.error(error);
            alert("Failed to send");
        } else {
            if (type === 'text') setNewMessage("");
            setReplyingTo(null);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (isBlocked) return;

        setUploading(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt} `;
        const filePath = `${roomId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('chat-media')
            .upload(filePath, file);

        if (uploadError) {
            alert(uploadError.message);
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from('chat-media').getPublicUrl(filePath);

        // Determine type
        let type: MessageType = 'document';
        if (file.type.startsWith('image/')) type = 'image';
        else if (file.type.startsWith('video/')) type = 'video';
        else if (file.type.startsWith('audio/')) type = 'audio';

        await handleSendMessage(undefined, type, publicUrl, { size: file.size, name: file.name });
        setUploading(false);
    };

    const handleDeleteMessage = async (messageId: string) => {
        if (!confirm("Delete this message for everyone?")) return;

        const { error } = await supabase
            .from("messages")
            .update({ content: "🚫 Message deleted", deleted_for_all: true, media_url: null, media_meta: null })
            .eq("id", messageId);

        if (error) {
            console.error("Error deleting message:", error);
            alert("Failed to delete message");
        }
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
            alert("Could not access microphone");
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
        if (!audioBlob) return;
        if (isBlocked) return;
        setUploading(true);
        const fileName = `${Math.random()}.webm`;
        const filePath = `${roomId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('chat-media')
            .upload(filePath, audioBlob);

        if (uploadError) {
            alert(uploadError.message);
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from('chat-media').getPublicUrl(filePath);
        await handleSendMessage(undefined, 'audio', publicUrl, { duration: 0 }); // Duration would need analysis
        setAudioBlob(null);
        setUploading(false);
    };

    const handleBlockUser = async () => {
        if (!room || room.is_group) return;
        const other = room.room_participants?.find((p: any) => p.user_id !== user?.id);
        if (!other) return;

        try {
            if (isBlocked) {
                // Unblock
                const { error } = await supabase.from("blocked_users").delete().eq("blocker_id", user?.id).eq("blocked_id", other.user_id);
                if (error) throw error;
                setIsBlocked(false);
                addToast("User unblocked", "success");
            } else {
                // Block
                const { error } = await supabase.from("blocked_users").insert({ blocker_id: user?.id, blocked_id: other.user_id });
                if (error) throw error;
                setIsBlocked(true);
                addToast("User blocked. Redirecting to home...", "error");
                setTimeout(() => router.push('/chat'), 1500);
            }
        } catch (err: any) {
            console.error("Block/Unblock error:", err);
            addToast(`Action failed: ${err.message}`, "error");
        }
    };

    if (loading) {
        return <div className="flex-1 flex items-center justify-center">Loading chat...</div>;
    }

    return (
        <div className="flex flex-col h-full bg-black">
            {/* Chat Header */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <Avatar src={headerAvatar} fallback={headerName[0] || "R"} className="w-10 h-10 border border-white/10" />
                    <div>
                        <h3 className="font-bold text-white text-lg">{headerName}</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Active now
                        </p>
                    </div>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-2">
                    {!room?.is_group && (
                        <button
                            onClick={handleBlockUser}
                            className={`p-2 rounded-full transition-colors ${isBlocked ? 'bg-red-500/10 text-red-400' : 'hover:bg-white/5 text-gray-400'}`}
                            title={isBlocked ? "Unblock User" : "Block User"}
                        >
                            <Ban className="w-5 h-5" />
                        </button>
                    )}
                    <button onClick={() => startCall(roomId, false)} className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-5 h-5" />
                    </button>
                    <button onClick={() => startCall(roomId, true)} className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-primary transition-colors">
                        <Video className="w-5 h-5" />
                    </button>
                    <button onClick={() => setShowGroupInfo(true)} className="p-2 hover:bg-white/10 rounded-full text-muted-foreground hover:text-foreground transition-colors">
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
                            {!isMe && <Avatar src={msg.profiles?.avatar_url || ''} fallback={msg.profiles?.username || "?"} className="w-8 h-8 mt-1" />}
                            <div className={cn(
                                "max-w-[75%] rounded-2xl p-4 text-[15px] leading-relaxed relative group transition-all font-sans",
                                isMe
                                    ? "bg-[#6B4EFF] text-white rounded-tr-md" // Premium Purple
                                    : "bg-[#1F2125] text-gray-100 rounded-tl-md" // Dark Gray
                            )}>
                                {msg.deleted_for_all ? (
                                    <p className="italic text-xs opacity-70 flex items-center gap-1">
                                        <X className="w-3 h-3" /> Message deleted
                                    </p>
                                ) : (
                                    <>
                                        {/* Reply preview removed */}
                                        {msg.message_type === 'text' && <p>{msg.content}</p>}

                                        {msg.message_type === 'image' && (
                                            <div className="rounded-lg overflow-hidden my-1">
                                                <img
                                                    src={msg.media_url || ''}
                                                    alt="Shared image"
                                                    className="max-w-full max-h-[300px] w-auto h-auto object-cover border border-white/10"
                                                />
                                            </div>
                                        )}

                                        {msg.message_type === 'video' && (
                                            <div className="rounded-lg overflow-hidden my-1">
                                                <video src={msg.media_url || ''} controls className="max-w-full h-auto" />
                                            </div>
                                        )}

                                        {msg.message_type === 'audio' && (
                                            <audio src={msg.media_url || ''} controls className="w-full min-w-[200px]" />
                                        )}
                                    </>
                                )}

                                <div className="flex items-center justify-between gap-2 mt-1">
                                    <span className="text-[10px] opacity-70 flex items-center gap-1">
                                        {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        {isMe && (
                                            msg.read_at ? <CheckCheck className="w-3 h-3 text-blue-300" /> : <Check className="w-3 h-3 text-white/50" />
                                        )}
                                    </span>
                                    {!msg.deleted_for_all && (
                                        <div className="flex gap-1">
                                            <button
                                                onClick={() => setReplyingTo(msg)}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded-full"
                                                title="Reply"
                                            >
                                                <ReplyIcon className="w-3 h-3" />
                                            </button>
                                            {isMe && (
                                                <button
                                                    onClick={() => handleDeleteMessage(msg.id)}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 text-red-400 rounded-full"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
                {uploading && (
                    <div className="flex justify-end pr-4">
                        <div className="bg-primary/20 p-2 rounded-xl flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-primary" />
                            <span className="text-xs text-primary">Sending...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <form onSubmit={(e) => handleSendMessage(e, 'text')} className="p-4 bg-black">
                {replyingTo && (
                    <div className="flex items-center justify-between bg-primary/10 p-2 rounded-t-xl border-b border-primary/20 mb-2">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <div className="w-1 h-8 bg-primary rounded-full"></div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary">
                                    Replying to {
                                        replyingTo.profiles?.username || 'user'
                                    }
                                </span>
                                <span className="text-xs text-muted-foreground truncate max-w-[200px]">{replyingTo.content || 'Media message'}</span>
                            </div>
                        </div>
                        <button type="button" onClick={() => setReplyingTo(null)} className="p-1 hover:bg-black/10 rounded-full">
                            <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                    </div>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*,video/*,audio/*"
                />
                <div className="flex gap-3 items-center bg-[#1F2125] p-2 pl-4 rounded-full border border-transparent focus-within:border-[#6B4EFF]/50 transition-all">
                    {recording ? (
                        <div className="flex-1 flex items-center gap-3 animate-pulse">
                            <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Recording...</span>
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                        </div>
                    ) : audioBlob ? (
                        <div className="flex-1 flex items-center gap-3">
                            <span className="text-xs text-primary font-bold">Voice Note Recorded</span>
                            <audio src={URL.createObjectURL(audioBlob)} controls className="h-8 w-40" />
                        </div>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="p-2 text-muted-foreground hover:text-white transition-colors"
                                disabled={uploading}
                            >
                                <Paperclip className="w-4 h-4" />
                            </button>

                            <input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent border-none outline-none px-2 text-sm"
                                disabled={uploading}
                            />
                        </>
                    )}

                    {recording ? (
                        <button type="button" onClick={stopRecording} className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30">
                            <Square className="w-4 h-4 fill-current" />
                        </button>
                    ) : audioBlob ? (
                        <>
                            <button type="button" onClick={cancelRecording} className="p-2 text-muted-foreground hover:text-red-400">
                                <Trash2 className="w-4 h-4" />
                            </button>
                            <button type="button" onClick={sendVoiceNote} className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                                <Send className="w-4 h-4" />
                            </button>
                        </>
                    ) : (
                        newMessage.trim() ? (
                            <button
                                type="submit"
                                disabled={uploading}
                                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={startRecording}
                                disabled={uploading}
                                className="p-2 text-muted-foreground hover:text-white transition-all"
                            >
                                <Mic className="w-4 h-4" />
                            </button>
                        )
                    )}
                </div>
            </form>
            {showGroupInfo && <GroupInfo roomId={roomId} onClose={() => setShowGroupInfo(false)} currentUserId={user.id} />}
        </div>
    );
}
