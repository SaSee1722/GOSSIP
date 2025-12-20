import React, { createContext, useState, ReactNode, useEffect, useRef } from 'react';
import { useAuth } from '@/template';
import { getSharedSupabaseClient } from '@/template/core/client';
import { ChatService, MessageData, Room } from '@/services/ChatService';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'document';
  timestamp: Date;
  read: boolean;
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
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [pendingRequests, setPendingRequests] = useState<ConnectionRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = getSharedSupabaseClient();
  const channelRef = useRef<any>(null);
  const connChannelRef = useRef<any>(null);

  useEffect(() => {
    if (user) {
      loadInitialData();
      setupRealtime();

      // Fallback Polling: Ensure the app works even if WebSockets are blocked or flaky
      const pollInterval = setInterval(() => {
        refreshChats();
      }, 5000); // Poll every 5 seconds for a "live" feel

      return () => {
        clearInterval(pollInterval);
        if (channelRef.current) supabase.removeChannel(channelRef.current);
        if (connChannelRef.current) supabase.removeChannel(connChannelRef.current);
      };
    } else {
      setChats([]);
      setMessages({});
      setPendingRequests([]);
      setLoading(false);
    }
  }, [user?.id]);

  const loadInitialData = async () => {
    setLoading(true);
    const { data: rooms } = await ChatService.getMyRooms();
    const { data: requests } = await ChatService.getPendingRequests();

    if (requests) setPendingRequests(requests);

    if (rooms) {
      const formattedChats: Chat[] = [];
      for (const room of rooms) {
        const chat = await formatRoomToChat(room);
        if (chat) formattedChats.push(chat);
      }
      setChats(formattedChats.sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime()));
    }
    setLoading(false);
  };

  const formatRoomToChat = async (room: any): Promise<Chat | null> => {
    const participants = await ChatService.getRoomParticipants(room.id);
    const otherUser = participants.data?.find(p => p.id !== user?.id);

    if (otherUser) {
      const { data: msgs } = await ChatService.getMessages(room.id, 1);
      const lastMsg = msgs?.[0];

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
      };
    }
    return null;
  };

  const setupRealtime = () => {
    // Clean up existing any existing channels
    if (channelRef.current) supabase.removeChannel(channelRef.current);
    if (connChannelRef.current) supabase.removeChannel(connChannelRef.current);

    console.log('[ChatContext] Setting up Realtime for user:', user?.id);

    const mainChannel = supabase
      .channel('gossip-main')
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
          read: newMessage.status === 'read',
        };

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
        filter: `addressee_id=eq.${user?.id}`
      }, async () => {
        console.log('[ChatContext] Inbound connection change detected');
        const { data: requests } = await ChatService.getPendingRequests();
        if (requests) setPendingRequests(requests);
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'room_participants',
        filter: `user_id=eq.${user?.id}`
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
        console.log('[ChatContext] Realtime status:', status);
        if (status === 'CHANNEL_ERROR') {
          console.error('[ChatContext] Realtime connection failed. Check if Realtime is enabled in Supabase dashboard.');
        }
      });

    channelRef.current = mainChannel;
  };

  const sendMessage = async (chatId: string, content: string, type: string = 'text') => {
    const { data, error } = await ChatService.sendMessage(chatId, content, type);
    if (error) throw new Error(error);
  };

  const markAsRead = async (chatId: string) => {
    // Implement read receipt update in DB
    setChats(prev => prev.map(chat =>
      chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
    ));
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
    const { data: roomId, error } = await ChatService.respondToConnection(requestId, status);
    if (error) throw new Error(error);

    // Optimistic UI or wait for reload
    setPendingRequests(prev => prev.filter(r => r.id !== requestId));
    if (status === 'accepted') {
      await loadInitialData();
      return roomId;
    }
    return null;
  };

  const refreshChats = async () => {
    await loadInitialData();
  };

  return (
    <ChatContext.Provider value={{
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
    }}>
      {children}
    </ChatContext.Provider>
  );
}
