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

interface ChatContextType {
  chats: Chat[];
  messages: Record<string, Message[]>;
  loading: boolean;
  sendMessage: (chatId: string, content: string, type?: string) => Promise<void>;
  markAsRead: (chatId: string) => void;
  setTyping: (chatId: string, isTyping: boolean) => void;
  createChat: (userId: string, userName: string, userAvatar: string) => Promise<string>;
  refreshChats: () => Promise<void>;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [loading, setLoading] = useState(true);
  const supabase = getSharedSupabaseClient();
  const channelRef = useRef<any>(null);

  useEffect(() => {
    if (user) {
      loadInitialData();
      setupRealtime();
    } else {
      setChats([]);
      setMessages({});
      setLoading(false);
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    }
  }, [user?.id]);

  const loadInitialData = async () => {
    setLoading(true);
    const { data: rooms, error } = await ChatService.getMyRooms();

    if (rooms) {
      const formattedChats: Chat[] = [];
      for (const room of rooms) {
        const participants = await ChatService.getRoomParticipants(room.id);
        const otherUser = participants.data?.find(p => p.id !== user?.id);

        if (otherUser) {
          const { data: msgs } = await ChatService.getMessages(room.id, 1);
          const lastMsg = msgs?.[0];

          formattedChats.push({
            id: room.id,
            userId: otherUser.id,
            userName: otherUser.username || otherUser.full_name || 'User',
            userAvatar: otherUser.avatar_url || `https://i.pravatar.cc/150?u=${otherUser.id}`,
            lastMessage: lastMsg?.content || '',
            lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
            unreadCount: 0, // Should fetch real count
            online: otherUser.is_online || false,
            typing: false,
          });
        }
      }
      setChats(formattedChats.sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime()));
    }
    setLoading(false);
  };

  const setupRealtime = () => {
    const channel = supabase
      .channel('public-chats')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, async (payload) => {
        const newMessage = payload.new as MessageData;

        // Update messages state
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

        // Update chat list last message
        setChats(prev => prev.map(chat =>
          chat.id === newMessage.room_id
            ? {
              ...chat,
              lastMessage: newMessage.content,
              lastMessageTime: new Date(newMessage.created_at),
              unreadCount: newMessage.user_id !== user?.id ? chat.unreadCount + 1 : chat.unreadCount
            }
            : chat
        ).sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime()));
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles' }, (payload) => {
        const updatedProfile = payload.new;
        setChats(prev => prev.map(chat =>
          chat.userId === updatedProfile.id
            ? { ...chat, online: updatedProfile.is_online }
            : chat
        ));
      })
      .on('broadcast', { event: 'typing' }, (payload) => {
        const { chatId, userId, isTyping } = payload.payload;
        if (userId === user?.id) return;

        setChats(prev => prev.map(chat =>
          chat.id === chatId
            ? { ...chat, typing: isTyping }
            : chat
        ));
      })
      .subscribe();

    channelRef.current = channel;
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

  const refreshChats = async () => {
    await loadInitialData();
  };

  return (
    <ChatContext.Provider value={{
      chats,
      messages,
      loading,
      sendMessage,
      markAsRead,
      setTyping,
      createChat,
      refreshChats,
    }}>
      {children}
    </ChatContext.Provider>
  );
}
