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
  StatusBar,
  Alert,
  ActivityIndicator,
  Modal,
  Image as RNImage
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { useAuth } from '@/template';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { TypingIndicator } from '@/components/ui/TypingIndicator';
import { BlurView } from 'expo-blur';
import { theme } from '@/constants/theme';
import { ChatService } from '@/services/ChatService';
import { useCall } from '@/contexts/CallContext';

export default function ChatDetailScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const { chats, messages, sendMessage, markAsRead, setTyping, blockUser, deleteGroup, fetchMessages, updateGroup, getParticipants } = useChat();
  const { user } = useAuth();
  const { initiateCall } = useCall();
  const router = useRouter();
  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const typingTimeoutRef = useRef<any>(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const [checkingBlock, setCheckingBlock] = useState(true);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [members, setMembers] = useState<any[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');
  const [newGroupAvatar, setNewGroupAvatar] = useState('');
  const [updating, setUpdating] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);

  const chat = chats.find(c => c.id === id);
  const chatMessages = messages[id as string] || [];

  useEffect(() => {
    if (id) {
      markAsRead(id as string);
      fetchMessages(id as string);
      checkBlockStatus();
    }
  }, [id]);

  const checkBlockStatus = async () => {
    if (chat?.type === 'direct') {
      const { ChatService } = await import('@/services/ChatService');
      const blocked = await ChatService.isBlocked(chat.userId);
      setIsBlocked(blocked);
    }
    setCheckingBlock(false);
  };

  const handlePickGroupAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled && result.assets[0].uri) {
      try {
        setUpdating(true);
        const { data: publicUrl, error: uploadError } = await ChatService.uploadGroupAvatar(chat!.id, result.assets[0].uri);

        if (uploadError) {
          Alert.alert('Upload Error', uploadError);
          return;
        }

        if (publicUrl) {
          setNewGroupAvatar(publicUrl);
        }
      } catch (err: any) {
        Alert.alert('Error', err.message);
      } finally {
        setUpdating(false);
      }
    }
  };

  const handleUpdateGroup = async () => {
    if (!newGroupName.trim() || !chat) return;
    try {
      setUpdating(true);
      await updateGroup(chat.id, {
        name: newGroupName,
        description: newGroupDesc,
        avatar_url: newGroupAvatar || chat.userAvatar
      });
      setShowSettingsModal(false);
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setUpdating(false);
    }
  };

  const loadMembers = async () => {
    if (!chat) return;
    try {
      setUpdating(true);
      const data = await getParticipants(chat.id);
      setMembers(data);
      setShowMembersModal(true);
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setUpdating(false);
    }
  };

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

  if (!chat) {
    return (
      <View style={[styles.container, { backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  const getGenderColors = (gender?: string) => {
    switch (gender?.toLowerCase()) {
      case 'male': return ['#00BFFF', '#0097D7'];
      case 'female': return ['#FFB6C1', '#FF9AA2'];
      case 'other': return ['#FFD700', '#DAA520'];
      default: return ['#00E5FF', '#FF4081']; // Default Gossip Gradient
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace('/(tabs)');
            }
          }}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <GradientText
            text={chat.userName.toUpperCase()}
            style={styles.headerName}
            colors={getGenderColors(chat.gender)}
          />
          {chat.type === 'direct' ? (
            <>
              {chat.online && <Text style={styles.onlineStatus}>Online</Text>}
              {chat.typing && <Text style={styles.typingStatus}>typing...</Text>}
            </>
          ) : (
            <Text style={styles.onlineStatus}>
              {chat.onlineCount || 0} online • {chat.memberCount || 0} members
            </Text>
          )}
        </View>

        {chat.type === 'direct' && (
          <View style={{ flexDirection: 'row', gap: 18, marginRight: 15 }}>
            <TouchableOpacity onPress={() => initiateCall(chat.userId, 'audio')}>
              <Ionicons name="call-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => initiateCall(chat.userId, 'video')}>
              <Ionicons name="videocam-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            if (chat.type === 'direct') {
              Alert.alert('Gossip Settings', 'What do you want to do?', [
                { text: 'Block User', style: 'destructive', onPress: () => blockUser(chat.userId).then(() => router.back()) },
                { text: 'Cancel', style: 'cancel' }
              ]);
            } else {
              setNewGroupName(chat.userName);
              setNewGroupDesc(chat.description || '');
              setNewGroupAvatar(chat.userAvatar);
              setShowSettingsModal(true);
            }
          }}
          style={styles.headerAvatar}
        >
          <Avatar uri={chat.userAvatar} size={40} online={chat.online} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={chatMessages}
          keyExtractor={item => item.id}
          contentContainerStyle={[styles.messageList, { paddingBottom: 20 }]}
          ListHeaderComponent={<Text style={styles.dateSeparator}>Today</Text>}
          ListFooterComponent={chat.typing ? <TypingIndicator /> : null}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
          renderItem={({ item }) => {
            const isSent = item.senderId === user?.id;

            return (
              <View style={[
                styles.messageWrapper,
                isSent ? styles.sentWrapper : styles.receivedWrapper
              ]}>
                <View style={[styles.messageBubble, getBubbleStyle(isSent)]}>
                  <Text style={[styles.messageText, { color: isSent ? '#000' : '#FFF' }]}>
                    {item.content}
                  </Text>
                  <View style={styles.statusRow}>
                    <Text style={[styles.timeText, { color: isSent ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }]}>
                      {formatTime(item.timestamp)}
                    </Text>
                    {isSent && (
                      <Ionicons
                        name={item.status === 'read' || item.status === 'delivered' ? 'checkmark-done' : 'checkmark'}
                        size={14}
                        color={item.status === 'read' ? '#000' : 'rgba(0,0,0,0.3)'}
                        style={{ marginLeft: 2 }}
                      />
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />

        {/* Input Bar */}
        <View style={[styles.inputContainer, { paddingBottom: Math.max(insets.bottom, 15) }]}>
          {isBlocked ? (
            <View style={styles.blockedNotice}>
              <Text style={{ color: '#666', fontSize: 13 }}>You cannot send messages to this user.</Text>
            </View>
          ) : (
            <>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Whisper something..."
                  placeholderTextColor="#666"
                  value={messageText}
                  onChangeText={handleTyping}
                  onSubmitEditing={handleSend}
                />
                <View style={styles.inputIcons}>
                  <TouchableOpacity style={styles.iconBtn}>
                    <Ionicons name="happy-outline" size={24} color="#888" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconBtn}
                    onPress={() => setShowAttachMenu(true)}
                  >
                    <Ionicons name="attach" size={24} color="#888" />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={handleSend}
                style={[
                  styles.sendBtn,
                  { backgroundColor: messageText.length > 0 ? colors.primary : '#1A1A1A' }
                ]}
                disabled={messageText.length === 0}
              >
                <Ionicons
                  name="send"
                  size={20}
                  color={messageText.length > 0 ? '#000' : '#444'}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </KeyboardAvoidingView>

      {/* Group Settings Modal */}
      <Modal
        visible={showSettingsModal}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <BlurView intensity={80} tint="dark" style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <GradientText text="GROUP SETTINGS" style={styles.modalTitle} />
              <TouchableOpacity onPress={() => setShowSettingsModal(false)}>
                <Ionicons name="close" size={28} color="#FFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.avatarSection}>
              <TouchableOpacity onPress={handlePickGroupAvatar} disabled={chat.createdBy !== user?.id}>
                <View style={styles.avatarContainer}>
                  <Avatar uri={newGroupAvatar || chat.userAvatar} size={100} />
                  {chat.createdBy === user?.id && (
                    <View style={styles.cameraBadge}>
                      <Ionicons name="camera" size={16} color="#FFF" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              <Text style={styles.avatarHint}>
                {chat.createdBy === user?.id ? 'Tap to change group photo' : 'Group Avatar'}
              </Text>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.label}>GROUP NAME</Text>
              <TextInput
                style={styles.modalInput}
                value={newGroupName}
                onChangeText={setNewGroupName}
                placeholder="Name your gossip..."
                placeholderTextColor="#666"
                editable={chat.createdBy === user?.id}
              />

              <Text style={styles.label}>DESCRIPTION</Text>
              <TextInput
                style={[styles.modalInput, { height: 80, textAlignVertical: 'top' }]}
                value={newGroupDesc}
                onChangeText={setNewGroupDesc}
                placeholder="What is this group about?"
                placeholderTextColor="#666"
                multiline
                editable={chat.createdBy === user?.id}
              />

              <TouchableOpacity style={styles.memberBtn} onPress={loadMembers}>
                <Ionicons name="people" size={20} color={colors.primary} />
                <Text style={styles.memberBtnText}>View Members</Text>
                {updating && <ActivityIndicator size="small" color={colors.primary} />}
              </TouchableOpacity>

              {chat.createdBy === user?.id && (
                <>
                  <TouchableOpacity
                    style={[styles.saveBtn, { backgroundColor: colors.primary }]}
                    onPress={handleUpdateGroup}
                    disabled={updating}
                  >
                    <Text style={styles.saveBtnText}>{updating ? 'SAVING...' : 'UPDATE GOSSIP'}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => {
                      Alert.alert('Delete Group', 'Are you sure? This whisper will be gone forever!', [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Delete', style: 'destructive', onPress: () => deleteGroup(chat.id).then(() => router.back()) }
                      ]);
                    }}
                  >
                    <Text style={styles.deleteBtnText}>DELETE GROUP</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </BlurView>
        </View>
      </Modal>

      {/* Members Modal */}
      <Modal
        visible={showMembersModal}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <BlurView intensity={80} tint="dark" style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <GradientText text="GOSSIPERS" style={styles.modalTitle} />
              <TouchableOpacity onPress={() => setShowMembersModal(false)}>
                <Ionicons name="close" size={28} color="#FFF" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={members}
              keyExtractor={item => item.id}
              contentContainerStyle={{ padding: 20 }}
              renderItem={({ item }) => (
                <View style={styles.memberItem}>
                  <Avatar uri={item.avatar_url} size={40} online={item.is_online} />
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: '#FFF', fontWeight: '800', fontSize: 14 }}>{item.username?.toUpperCase()}</Text>
                    {item.id === chat.createdBy && <Text style={{ color: colors.primary, fontSize: 10 }}>CREATOR</Text>}
                  </View>
                </View>
              )}
            />
          </BlurView>
        </View>
      </Modal>


      {/* Attachment Menu Modal */}
      < Modal
        visible={showAttachMenu}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAttachMenu(false)
        }
      >
        <TouchableOpacity
          style={styles.attachOverlay}
          activeOpacity={1}
          onPress={() => setShowAttachMenu(false)}
        >
          <View style={[styles.attachMenu, { paddingBottom: insets.bottom + 20 }]}>
            <View style={styles.attachGrid}>
              <TouchableOpacity style={styles.attachItem}>
                <View style={[styles.attachIcon, { backgroundColor: '#5F66CD' }]}>
                  <Ionicons name="document-text" size={24} color="#FFF" />
                </View>
                <Text style={styles.attachLabel}>Document</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.attachItem}
                onPress={async () => {
                  setShowAttachMenu(false);
                  // Placeholder for image picker logic
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    quality: 0.8,
                  });
                  console.log(result);
                }}
              >
                <View style={[styles.attachIcon, { backgroundColor: '#D3396D' }]}>
                  <Ionicons name="images" size={24} color="#FFF" />
                </View>
                <Text style={styles.attachLabel}>Media</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.attachItem}>
                <View style={[styles.attachIcon, { backgroundColor: '#009688' }]}>
                  <Ionicons name="person" size={24} color="#FFF" />
                </View>
                <Text style={styles.attachLabel}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    borderBottomWidth: 0.3,
    borderBottomColor: '#333',
  },
  backButton: {
    width: 40,
    justifyContent: 'center',
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerName: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
  onlineStatus: {
    fontSize: 10,
    color: '#00B894',
    fontWeight: '700',
    marginTop: -2,
  },
  typingStatus: {
    fontSize: 10,
    color: '#888',
    marginTop: -2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 40,
    minHeight: '60%',
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: '#222',
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10,
  },
  avatarContainer: {
    position: 'relative',
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00BFFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
  },
  avatarHint: {
    color: '#666',
    fontSize: 12,
    fontWeight: '600',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
  },
  modalBody: {
    padding: 25,
  },
  label: {
    color: '#888',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 15,
  },
  modalInput: {
    backgroundColor: '#111',
    borderRadius: 15,
    padding: 15,
    color: '#FFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#222',
  },
  memberBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    marginTop: 25,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#222',
  },
  memberBtnText: {
    flex: 1,
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 12,
  },
  saveBtn: {
    marginTop: 30,
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 1,
  },
  deleteBtn: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center',
  },
  deleteBtnText: {
    color: '#FF4757',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 15,
  },
  headerAvatar: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dateSeparator: {
    textAlign: 'center',
    color: '#333',
    fontSize: 12,
    marginVertical: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  messageList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  messageWrapper: {
    marginBottom: 12,
    maxWidth: '85%',
  },
  sentWrapper: {
    alignSelf: 'flex-end',
  },
  receivedWrapper: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sentWrapper_bubble: { // Logic in component
    backgroundColor: '#00BFFF',
    borderBottomRightRadius: 4,
  },
  receivedWrapper_bubble: {
    backgroundColor: '#1A1A1A',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  timeText: {
    fontSize: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#000',
    paddingVertical: 12,
    borderTopWidth: 0.3,
    borderTopColor: '#333',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 25,
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontSize: 15,
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
  sendBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockedNotice: {
    flex: 1,
    height: 48,
    backgroundColor: '#111',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  attachOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  attachMenu: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  attachGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  attachItem: {
    alignItems: 'center',
    gap: 8,
  },
  attachIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  attachLabel: {
    color: '#CCC',
    fontSize: 12,
    fontWeight: '600',
  }
});

// Update bubble styles dynamically in renderItem
const getBubbleStyle = (isSent: boolean) => ({
  backgroundColor: isSent ? '#00BFFF' : '#1A1A1A',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: isSent ? 20 : 4,
  borderBottomRightRadius: isSent ? 4 : 20,
});
