"use client";

import React, { createContext, useState, ReactNode, useEffect, useRef, useContext } from 'react';
import { useAuth } from './auth-context';
import { createClient } from '@/lib/supabase/client';
import { ChatService, MessageData } from '@/services/chat-service';

export interface Message {
    id: string;
    chatId: string;
    senderId: string;
    content: string;
    type: 'text' | 'image' | 'video' | 'audio' | 'document';
    timestamp: Date;
    status: 'sent' | 'delivered' | 'read';
    mediaUrl?: string;
}

export interface Chat {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    lastMessage: string;
    lastMessageTime: Date;
    unreadCount: number;
    online: boolean;
    typing: boolean;
    type: 'direct' | 'group';
    age?: number;
    gender?: string;
    onlineCount?: number;
    memberCount?: number;
    description?: string;
    createdBy?: string;
}

export interface ConnectionRequest {
    id: string;
    requester_id: string;
    created_at: string;
    profiles: {
        id: string;
        username: string;
        full_name: string;
        avatar_url: string;
    };
}

interface ChatContextType {
    chats: Chat[];
    messages: Record<string, Message[]>;
    pendingRequests: ConnectionRequest[];
    loading: boolean;
    sendMessage: (chatId: string, content: string, type?: string, mediaUrl?: string) => Promise<void>;
    markAsRead: (chatId: string) => void;
    setTyping: (chatId: string, isTyping: boolean) => void;
    createChat: (userId: string, userName: string, userAvatar: string) => Promise<string>;
    sendRequest: (userId: string) => Promise<void>;
    respondToRequest: (requestId: string, status: 'accepted' | 'rejected') => Promise<string | null>;
    refreshChats: () => Promise<void>;
    blockUser: (userId: string) => Promise<void>;
    unblockUser: (userId: string) => Promise<void>;
    deleteGroup: (roomId: string) => Promise<void>;
    fetchMessages: (chatId: string) => Promise<void>;
    updateGroup: (roomId: string, updates: { name?: string; description?: string; avatar_url?: string }) => Promise<void>;
    getParticipants: (roomId: string) => Promise<any[]>;
    lockedChats: Record<string, string>; // Map chatId -> PIN
    lockChat: (chatId: string, pin: string) => Promise<void>;
    unlockChat: (chatId: string) => Promise<void>;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [chats, setChats] = useState<Chat[]>([]);
    const [messages, setMessages] = useState<Record<string, Message[]>>({});
    const [pendingRequests, setPendingRequests] = useState<ConnectionRequest[]>([]);
    const [lockedChats, setLockedChats] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const supabase = createClient();
    const channelRef = useRef<any>(null);
    const isFetchingRef = useRef(false);
    const hasInitialLoaded = useRef(false);

    useEffect(() => {
        if (user?.id) {
            if (!hasInitialLoaded.current) {
                setLoading(true);
                loadInitialData().finally(() => {
                    setLoading(false);
                    hasInitialLoaded.current = true;
                });
            }

            setupRealtime();
            ChatService.updateOnlineStatus(user.id, true);

            const pollInterval = setInterval(() => {
                refreshChats();
            }, 30000);

            return () => {
                clearInterval(pollInterval);
                ChatService.updateOnlineStatus(user.id, false);
                cleanupRealtime();
            };
        } else {
            setChats([]);
            setMessages({});
            setPendingRequests([]);
            setLockedChats({});
            setLoading(false);
            hasInitialLoaded.current = false;
            cleanupRealtime();
        }
    }, [user?.id]);

    useEffect(() => {
        const stored = localStorage.getItem('LOCKED_CHATS');
        if (stored) setLockedChats(JSON.parse(stored));
    }, []);

    const cleanupRealtime = () => {
        if (channelRef.current) {
            supabase.removeChannel(channelRef.current);
            channelRef.current = null;
        }
    };

    const loadInitialData = async () => {
        if (isFetchingRef.current) return;
        isFetchingRef.current = true;
        try {
            const [roomsResponse, requestsResponse, connectionsResponse] = await Promise.all([
                ChatService.getMyRooms(),
                ChatService.getPendingRequests(),
                ChatService.getAcceptedConnections()
            ]);

            if (requestsResponse.data) {
                setPendingRequests(requestsResponse.data);
            }

            const formattedChats: Chat[] = [];
            const existingUserIds = new Set<string>();

            if (roomsResponse.data) {
                const chatPromises = roomsResponse.data.map(room => formatRoomToChat(room));
                const results = await Promise.all(chatPromises);
                results.forEach(chat => {
                    if (chat) {
                        formattedChats.push(chat);
                        if (chat.type === 'direct') existingUserIds.add(chat.userId);
                    }
                });
            }

            if (connectionsResponse.data) {
                connectionsResponse.data.forEach((conn: any) => {
                    if (!existingUserIds.has(conn.id)) {
                        formattedChats.push({
                            id: `temp_${conn.id}`,
                            userId: conn.id,
                            userName: conn.username || conn.full_name || 'User',
                            userAvatar: conn.avatar_url || `https://i.pravatar.cc/150?u=${conn.id}`,
                            lastMessage: 'Tap to start chatting',
                            lastMessageTime: new Date(conn.created_at || Date.now()),
                            unreadCount: 0,
                            online: conn.is_online || false,
                            typing: false,
                            type: 'direct',
                            age: conn.age,
                            gender: conn.gender,
                        });
                    }
                });
            }

            setChats(prev => {
                const sorted = [...formattedChats].sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime());
                if (JSON.stringify(prev) === JSON.stringify(sorted)) return prev;
                return sorted;
            });
        } catch (error) {
            console.error('[ChatContext] Load error:', error);
        } finally {
            isFetchingRef.current = false;
        }
    };

    const formatRoomToChat = async (room: any): Promise<Chat | null> => {
        const participants = await ChatService.getRoomParticipants(room.id);
        const { data: msgs } = await ChatService.getMessages(room.id, 1, false);
        const lastMsg = msgs?.[0];

        if (room.type === 'direct') {
            const otherUser = participants.data?.find(p => p.id !== user?.id);
            if (otherUser) {
                const { count } = await supabase
                    .from('messages')
                    .select('*', { count: 'exact', head: true })
                    .eq('room_id', room.id)
                    .neq('user_id', user?.id)
                    .neq('status', 'read');

                return {
                    id: room.id,
                    userId: otherUser.id,
                    userName: otherUser.username || otherUser.full_name || 'User',
                    userAvatar: otherUser.avatar_url || `https://i.pravatar.cc/150?u=${otherUser.id}`,
                    lastMessage: lastMsg?.content || 'Started a gossip...',
                    lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
                    unreadCount: count || 0,
                    online: otherUser.is_online || false,
                    typing: false,
                    type: 'direct',
                    age: otherUser.age,
                    gender: otherUser.gender,
                };
            }
        } else {
            const { count } = await supabase
                .from('messages')
                .select('*', { count: 'exact', head: true })
                .eq('room_id', room.id)
                .neq('user_id', user?.id)
                .neq('status', 'read');

            const onlineCount = participants.data?.filter(p => p.is_online).length || 0;
            const memberCount = participants.data?.length || 0;

            return {
                id: room.id,
                userId: room.id,
                userName: room.name || 'Gossip Group',
                userAvatar: room.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(room.name || 'G')}&background=FFB6C1&color=000`,
                lastMessage: lastMsg?.content || 'New gossip group created!',
                lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
                unreadCount: count || 0,
                online: onlineCount > 0,
                onlineCount,
                memberCount,
                description: room.description || 'Welcome to the gossip group!',
                createdBy: room.created_by,
                typing: false,
                type: 'group',
            };
        }
        return null;
    };

    const setupRealtime = () => {
        cleanupRealtime();
        if (!user?.id) return;

        const channel = supabase
            .channel('gossip-main', {
                config: {
                    broadcast: { self: false },
                    presence: { key: user.id }
                }
            })
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, async (payload) => {
                const newMessage = payload.new as MessageData;

                if (newMessage.user_id !== user?.id && newMessage.status === 'sent') {
                    ChatService.updateMessageStatus(newMessage.id, 'delivered');
                }

                const formattedMsg: Message = {
                    id: newMessage.id,
                    chatId: newMessage.room_id,
                    senderId: newMessage.user_id,
                    content: newMessage.content,
                    type: newMessage.message_type as any,
                    timestamp: new Date(newMessage.created_at),
                    status: newMessage.status,
                    mediaUrl: newMessage.media_url,
                };

                setMessages(prev => {
                    const currentMsgs = prev[newMessage.room_id] || [];
                    if (currentMsgs.some(m => m.id === formattedMsg.id)) return prev;
                    return { ...prev, [newMessage.room_id]: [...currentMsgs, formattedMsg] };
                });

                refreshChats();
            })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages' }, (payload) => {
                const updatedMsg = payload.new as MessageData;
                setMessages(prev => {
                    const roomMsgs = prev[updatedMsg.room_id] || [];
                    return {
                        ...prev,
                        [updatedMsg.room_id]: roomMsgs.map(m => m.id === updatedMsg.id ? { ...m, status: updatedMsg.status } : m)
                    };
                });
            })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles' }, (payload) => {
                const updatedProfile = payload.new;
                setChats(prev => prev.map(chat => chat.userId === updatedProfile.id ? { ...chat, online: updatedProfile.is_online } : chat));
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'connections', filter: `addressee_id=eq.${user.id}` }, async () => {
                const { data: requests } = await ChatService.getPendingRequests();
                if (requests) setPendingRequests(requests);
            })
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'room_participants', filter: `user_id=eq.${user.id}` }, () => {
                refreshChats();
            })
            .on('broadcast', { event: 'typing' }, (payload) => {
                const { chatId, userId, isTyping } = payload.payload;
                if (userId === user?.id) return;
                setChats(prev => prev.map(chat => chat.id === chatId ? { ...chat, typing: isTyping } : chat));
            })
            .subscribe();

        channelRef.current = channel;
    };

    const sendMessage = async (chatId: string, content: string, type: string = 'text', mediaUrl?: string) => {
        const { data: sentMsg, error } = await ChatService.sendMessage(chatId, content, type, mediaUrl);
        if (error) throw new Error(error);

        if (sentMsg) {
            const formattedMsg: Message = {
                id: sentMsg.id,
                chatId: sentMsg.room_id,
                senderId: sentMsg.user_id,
                content: sentMsg.content,
                type: sentMsg.message_type as any,
                timestamp: new Date(sentMsg.created_at),
                status: sentMsg.status,
                mediaUrl: sentMsg.media_url,
            };

            setMessages(prev => {
                const currentMsgs = prev[chatId] || [];
                if (currentMsgs.some(m => m.id === formattedMsg.id)) return prev;
                return { ...prev, [chatId]: [...currentMsgs, formattedMsg] };
            });
        }
    };

    const markAsRead = async (chatId: string) => {
        if (!user?.id) return;
        await ChatService.markRoomAsRead(chatId, user.id);
        setChats(prev => prev.map(chat => chat.id === chatId ? { ...chat, unreadCount: 0 } : chat));
        setMessages(prev => {
            const roomMsgs = prev[chatId];
            if (!roomMsgs) return prev;
            return { ...prev, [chatId]: roomMsgs.map(m => m.senderId !== user.id ? { ...m, status: 'read' } : m) };
        });
    };

    const setTyping = async (chatId: string, isTyping: boolean) => {
        if (channelRef.current) {
            await channelRef.current.send({
                type: 'broadcast',
                event: 'typing',
                payload: { chatId, userId: user?.id, isTyping },
            });
        }
    };

    const createChat = async (userId: string, userName: string, userAvatar: string): Promise<string> => {
        const { data: roomId, error } = await ChatService.createDirectChat(userId);
        if (error) throw new Error(error);
        await loadInitialData();
        return roomId!;
    };

    const sendRequest = async (userId: string) => {
        const { error } = await ChatService.sendConnectionRequest(userId);
        if (error) throw new Error(error);
    };

    const respondToRequest = async (requestId: string, status: 'accepted' | 'rejected'): Promise<string | null> => {
        setLoading(true);
        const { data: roomId, error } = await ChatService.respondToConnection(requestId, status);
        if (error) {
            setLoading(false);
            return null;
        }
        setPendingRequests(prev => prev.filter(r => r.id !== requestId));
        await loadInitialData();
        setLoading(false);
        return roomId;
    };

    const fetchMessages = async (chatId: string) => {
        const { data, error } = await ChatService.getMessages(chatId);
        if (!error && data) {
            const formattedMsgs: Message[] = data.map(m => ({
                id: m.id,
                chatId: m.room_id,
                senderId: m.user_id,
                content: m.content,
                type: m.message_type as any,
                timestamp: new Date(m.created_at),
                status: m.status,
                mediaUrl: m.media_url,
            }));
            setMessages(prev => ({ ...prev, [chatId]: formattedMsgs }));
        }
    };

    const refreshChats = async () => {
        await loadInitialData();
    };

    const blockUser = async (userId: string) => {
        const { error } = await ChatService.blockUser(userId);
        if (error) throw new Error(error);
        await refreshChats();
    };

    const unblockUser = async (userId: string) => {
        const { error } = await ChatService.unblockUser(userId);
        if (error) throw new Error(error);
        await refreshChats();
    };

    const deleteGroup = async (roomId: string) => {
        const { error } = await ChatService.deleteRoom(roomId);
        if (error) throw new Error(error);
        await refreshChats();
    };

    const updateGroup = async (roomId: string, updates: { name?: string; description?: string; avatar_url?: string }) => {
        const { error } = await ChatService.updateRoom(roomId, updates);
        if (error) throw new Error(error);
        await refreshChats();
    };

    const getParticipants = async (roomId: string) => {
        const { data, error } = await ChatService.getRoomParticipantsProfiles(roomId);
        if (error) throw new Error(error);
        return data || [];
    };

    const lockChat = async (chatId: string, pin: string) => {
        const updated = { ...lockedChats, [chatId]: pin };
        setLockedChats(updated);
        localStorage.setItem('LOCKED_CHATS', JSON.stringify(updated));
    };

    const unlockChat = async (chatId: string) => {
        const updated = { ...lockedChats };
        delete updated[chatId];
        setLockedChats(updated);
        localStorage.setItem('LOCKED_CHATS', JSON.stringify(updated));
    };

    return (
        <ChatContext.Provider value={{
            chats, messages, pendingRequests, loading, sendMessage, markAsRead, setTyping, createChat, sendRequest, respondToRequest, refreshChats, blockUser, unblockUser, deleteGroup, fetchMessages, updateGroup, getParticipants,
            lockedChats, lockChat, unlockChat
        }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) throw new Error('useChat must be used within ChatProvider');
    return context;
}
