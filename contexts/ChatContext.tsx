import React, { createContext, useState, ReactNode, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '@/template';
import { getSharedSupabaseClient, safeSupabaseOperation } from '@/template/core/client';
import { ChatService, MessageData, Room } from '@/services/ChatService';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'document';
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  reactions?: string[];
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
  sendMessage: (chatId: string, content: string, type?: string) => Promise<void>;
  markAsRead: (chatId: string) => void;
  setTyping: (chatId: string, isTyping: boolean) => void;
  createChat: (userId: string, userName: string, userAvatar: string) => Promise<string>;
  sendRequest: (userId: string) => Promise<void>;
  respondToRequest: (requestId: string, status: 'accepted' | 'rejected') => Promise<string | null>;
  refreshChats: () => Promise<void>;
  blockUser: (userId: string) => Promise<void>;
  unblockUser: (userId: string) => Promise<void>;
  deleteGroup: (roomId: string) => Promise<void>;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [pendingRequests, setPendingRequests] = useState<ConnectionRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const supabase = getSharedSupabaseClient();
  const channelRef = useRef<any>(null);
  const connChannelRef = useRef<any>(null);
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

      // REALTIME RE-ENABLED with new Supabase project
      setupRealtime();

      // Keep polling as backup (every 30 seconds)
      const pollInterval = setInterval(() => {
        refreshChats();
      }, 30000);

      return () => {
        clearInterval(pollInterval);
        cleanupRealtime();
      };
    } else {
      setChats([]);
      setMessages({});
      setPendingRequests([]);
      setLoading(false);
      hasInitialLoaded.current = false;
      cleanupRealtime();
    }
  }, [user?.id]);

  const cleanupRealtime = () => {
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
      channelRef.current = null;
    }
    if (connChannelRef.current) {
      supabase.removeChannel(connChannelRef.current);
      connChannelRef.current = null;
    }
  };

  const loadInitialData = async () => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;
    try {
      const [roomsResponse, requestsResponse] = await Promise.all([
        ChatService.getMyRooms(),
        ChatService.getPendingRequests()
      ]);

      if (requestsResponse.data) {
        setPendingRequests(prev => {
          if (JSON.stringify(prev) === JSON.stringify(requestsResponse.data)) return prev;
          return requestsResponse.data;
        });
      }

      if (roomsResponse.data) {
        const formattedChats: Chat[] = [];
        // Process in parallel to be faster
        const chatPromises = roomsResponse.data.map(room => formatRoomToChat(room));
        const results = await Promise.all(chatPromises);
        results.forEach(chat => {
          if (chat) formattedChats.push(chat);
        });

        setChats(prev => {
          const newSorted = formattedChats.sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime());
          // Only update if data actually changed to prevent render loops
          if (JSON.stringify(prev) === JSON.stringify(newSorted)) return prev;
          return newSorted;
        });
      }
    } catch (error) {
      console.error('[ChatContext] Load error:', error);
    } finally {
      isFetchingRef.current = false;
    }
  };

  const formatRoomToChat = async (room: any): Promise<Chat | null> => {
    const participants = await ChatService.getRoomParticipants(room.id);
    const { data: msgs } = await ChatService.getMessages(room.id, 1);
    const lastMsg = msgs?.[0];

    if (room.type === 'direct') {
      const otherUser = participants.data?.find(p => p.id !== user?.id);
      if (otherUser) {
        return {
          id: room.id,
          userId: otherUser.id,
          userName: otherUser.username || otherUser.full_name || 'User',
          userAvatar: otherUser.avatar_url || `https://i.pravatar.cc/150?u=${otherUser.id}`,
          lastMessage: lastMsg?.content || 'Started a gossip...',
          lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
          unreadCount: 0,
          online: otherUser.is_online || false,
          typing: false,
          type: 'direct',
          age: otherUser.age,
        };
      }
    } else {
      // Group Chat
      return {
        id: room.id,
        userId: room.id, // Group ID as virtual user ID
        userName: room.name || 'Gossip Group',
        userAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(room.name || 'G')}&background=FFB6C1&color=000`,
        lastMessage: lastMsg?.content || 'New gossip group created!',
        lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
        unreadCount: 0,
        online: true,
        typing: false,
        type: 'group',
      };
    }
    return null;
  };


  const setupRealtime = () => {
    // Clean up existing any existing channels
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
      channelRef.current = null;
    }
    if (connChannelRef.current) {
      supabase.removeChannel(connChannelRef.current);
      connChannelRef.current = null;
    }

    if (!user?.id) {
      console.warn('[ChatContext] Cannot setup Realtime: No user');
      return;
    }

    console.log('[ChatContext] Setting up Realtime for user:', user.id);

    const mainChannel = supabase
      .channel('gossip-main', {
        config: {
          broadcast: { self: false },
          presence: { key: user.id }
        }
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages'
      }, async (payload) => {
        const newMessage = payload.new as MessageData;
        const formattedMsg: Message = {
          id: newMessage.id,
          chatId: newMessage.room_id,
          senderId: newMessage.user_id,
          content: newMessage.content,
          type: newMessage.message_type as any,
          timestamp: new Date(newMessage.created_at),
          status: newMessage.status,
        };

        // If message is for me, mark as delivered
        if (newMessage.user_id !== user?.id && newMessage.status === 'sent') {
          ChatService.updateMessageStatus(newMessage.id, 'delivered');
        }

        setMessages(prev => ({
          ...prev,
          [newMessage.room_id]: [...(prev[newMessage.room_id] || []), formattedMsg]
        }));

        const { data: rooms } = await ChatService.getMyRooms();
        if (rooms) {
          const formattedChats: Chat[] = [];
          for (const room of rooms) {
            const chat = await formatRoomToChat(room);
            if (chat) formattedChats.push(chat);
          }
          setChats(formattedChats.sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime()));
        }
      })
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'profiles'
      }, (payload) => {
        const updatedProfile = payload.new;
        setChats(prev => prev.map(chat =>
          chat.userId === updatedProfile.id
            ? { ...chat, online: updatedProfile.is_online }
            : chat
        ));
      })
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'connections',
        filter: `addressee_id=eq.${user.id}`
      }, async () => {
        console.log('[ChatContext] Inbound connection change detected');
        const { data: requests } = await ChatService.getPendingRequests();
        if (requests) setPendingRequests(requests);
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'room_participants',
        filter: `user_id=eq.${user.id}`
      }, () => {
        console.log('[ChatContext] Added to new room');
        refreshChats();
      })
      .on('broadcast', { event: 'typing' }, (payload) => {
        const { chatId, userId, isTyping } = payload.payload;
        if (userId === user?.id) return;
        setChats(prev => prev.map(chat =>
          chat.id === chatId ? { ...chat, typing: isTyping } : chat
        ));
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('[ChatContext] ✅ Realtime connected successfully');
        } else if (status === 'CHANNEL_ERROR') {
          console.error('[ChatContext] ❌ Realtime connection failed. Please run realtime_fix.sql in Supabase.');
          // Don't retry - prevents console spam
          if (channelRef.current) {
            supabase.removeChannel(channelRef.current);
            channelRef.current = null;
          }
        } else if (status === 'TIMED_OUT') {
          console.warn('[ChatContext] ⏱️ Realtime connection timed out');
        }
      });

    channelRef.current = mainChannel;
  };

  const sendMessage = async (chatId: string, content: string, type: string = 'text') => {
    const { data, error } = await ChatService.sendMessage(chatId, content, type);
    if (error) throw new Error(error);
  };

  const markAsRead = async (chatId: string) => {
    const chatMsgs = messages[chatId] || [];
    const unreadMsgs = chatMsgs.filter(m => m.senderId !== user?.id && m.status !== 'read');

    for (const msg of unreadMsgs) {
      ChatService.updateMessageStatus(msg.id, 'read');
    }

    setChats(prev => prev.map(chat =>
      chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
    ));

    setMessages(prev => ({
      ...prev,
      [chatId]: (prev[chatId] || []).map(m => m.senderId !== user?.id ? { ...m, status: 'read' } : m)
    }));
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
    console.log('[ChatContext] sendRequest called for userId:', userId);

    // Check if connection already exists
    const { data: existingConnection } = await safeSupabaseOperation(async (client) => {
      const { data: { user: currentUser } } = await client.auth.getUser();
      if (!currentUser) return { data: null };

      return await client
        .from('connections')
        .select('id, status')
        .or(`and(requester_id.eq.${currentUser.id},addressee_id.eq.${userId}),and(requester_id.eq.${userId},addressee_id.eq.${currentUser.id})`)
        .maybeSingle();
    });

    if (existingConnection) {
      const status = existingConnection.status;
      if (status === 'pending') {
        throw new Error('You already sent a request to this user');
      } else if (status === 'accepted') {
        throw new Error('You are already connected with this user');
      } else if (status === 'rejected') {
        throw new Error('Your previous request was rejected. Please wait before trying again.');
      }
    }

    const { error } = await ChatService.sendConnectionRequest(userId);
    if (error) {
      console.error('[ChatContext] sendRequest failed:', error);
      throw new Error(error);
    }
    console.log('[ChatContext] sendRequest completed successfully');
  };

  const respondToRequest = async (requestId: string, status: 'accepted' | 'rejected'): Promise<string | null> => {
    try {
      console.log(`[ChatContext] Responding to request ${requestId} with status: ${status}`);
      setLoading(true);

      const { data: roomId, error } = await ChatService.respondToConnection(requestId, status);

      if (error) {
        console.error('[ChatContext] respondToRequest error from service:', error);
        Alert.alert('Error', error);
        return null;
      }

      // Optimistically remove from pending list immediately and keep it removed
      setPendingRequests(prev => prev.filter(r => r.id !== requestId));

      if (status === 'accepted') {
        console.log('[ChatContext] Request accepted successfully. RoomId:', roomId);

        // Wait a longer bit for DB transaction to be fully visible to new queries
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Refresh all data
        await loadInitialData();

        // Force filter again in case loadInitialData brought back stale data
        setPendingRequests(prev => prev.filter(r => r.id !== requestId));

        return roomId;
      }
      return null;
    } catch (err: any) {
      console.error('[ChatContext] respondToRequest critical exception:', err);
      Alert.alert('System Error', err.message || 'Failed to respond to request');
      return null;
    } finally {
      setLoading(false);
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

  const contextValue = React.useMemo(() => ({
    chats,
    messages,
    pendingRequests,
    loading,
    sendMessage,
    markAsRead,
    setTyping,
    createChat,
    sendRequest,
    respondToRequest,
    refreshChats,
    blockUser,
    unblockUser,
    deleteGroup,
  }), [chats, messages, pendingRequests, loading]);

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
}
