import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { useStatus } from '@/contexts/StatusContext';
import { useCall } from '@/contexts/CallContext';
import { useAuth } from '@/template';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { theme } from '@/constants/theme';

export default function ChatDetailScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const { chats, messages, sendMessage, markAsRead, setTyping } = useChat();
  const { initiateCall } = useCall();
  const { user } = useAuth();
  const router = useRouter();
  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const typingTimeoutRef = useRef<any>(null);

  const chat = chats.find(c => c.id === id);
  const chatMessages = messages[id as string] || [];

  // Mocking ages for now
  const getAge = (chatId: string) => {
    const ages: Record<string, number> = { '1': 21, '2': 28, '3': 24, '4': 27, '5': 23 };
    return ages[chatId] || 22;
  };

  useEffect(() => {
    if (id) {
      markAsRead(id as string);
    }
  }, [id]);

  const handleTyping = (text: string) => {
    setMessageText(text);

    if (id) {
      if (text.length > 0) {
        setTyping(id as string, true);

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        typingTimeoutRef.current = setTimeout(() => {
          setTyping(id as string, false);
        }, 3000);
      } else {
        setTyping(id as string, false);
      }
    }
  };

  const handleSend = () => {
    if (messageText.trim() && id) {
      sendMessage(id as string, messageText.trim(), 'text');
      setMessageText('');
      setTyping(id as string, false);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  if (!chat) return null;

  return (
    <View style={[styles.container, { backgroundColor: '#000' }]}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <GradientText
            text={`${chat.userName.split(' ')[0]}, ${getAge(chat.id)}`}
            style={styles.headerName}
          />
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => initiateCall(chat.userId, 'audio')} style={styles.headerAction}>
            <Ionicons name="call-outline" size={22} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => initiateCall(chat.userId, 'video')} style={styles.headerAction}>
            <Ionicons name="videocam-outline" size={22} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAvatar}>
            <Avatar uri={chat.userAvatar} size={36} />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <FlatList
          ref={flatListRef}
          data={chatMessages}
          keyExtractor={item => item.id}
          contentContainerStyle={[styles.messageList, { paddingBottom: 20 }]}
          ListHeaderComponent={<Text style={styles.dateSeparator}>Today</Text>}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
          renderItem={({ item }) => {
            const isSent = item.senderId === user?.id;

            return (
              <View style={[styles.messageWrapper, isSent ? styles.sentWrapper : styles.receivedWrapper]}>
                <View style={[
                  styles.messageBubble,
                  { backgroundColor: isSent ? colors.primary : '#1C1C1E' }
                ]}>
                  <Text style={[styles.messageText, { color: '#FFF' }]}>
                    {item.content}
                  </Text>
                </View>
                {isSent && (
                  <Text style={styles.readIndicator}>
                    Read {formatTime(item.timestamp)}
                  </Text>
                )}
              </View>
            );
          }}
        />

        {/* Input Bar */}
        <View style={[styles.inputContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Message"
              placeholderTextColor="#666"
              value={messageText}
              onChangeText={handleTyping}
              onSubmitEditing={handleSend}
            />
            <View style={styles.inputIcons}>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="happy-outline" size={24} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="attach" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
          {messageText.length > 0 && (
            <TouchableOpacity onPress={handleSend} style={styles.realSendBtn}>
              <Ionicons name="send" size={22} color={colors.primary} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#000',
  },
  backButton: {
    width: 40,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
  },
  headerAvatar: {
    paddingLeft: 5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerAction: {
    padding: 5,
  },
  dateSeparator: {
    textAlign: 'center',
    color: '#666',
    fontSize: 13,
    marginVertical: 20,
    fontWeight: '500',
  },
  messageList: {
    paddingHorizontal: 15,
  },
  messageWrapper: {
    marginBottom: 15,
    maxWidth: '85%',
  },
  sentWrapper: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  receivedWrapper: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 22,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  readIndicator: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
    marginRight: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    gap: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    height: '100%',
    ...Platform.select({
      web: {
        outlineStyle: 'none'
      },
      default: {}
    })
  } as any,
  inputIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconBtn: {
    padding: 2,
  },
  realSendBtn: {
    padding: 5,
  }
});
