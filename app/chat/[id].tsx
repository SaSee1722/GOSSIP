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
import * as DocumentPicker from 'expo-document-picker';
import { ChatService } from '@/services/ChatService';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { useToast } from '@/contexts/ToastContext';
import { useAuth } from '@/template';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { TypingIndicator } from '@/components/ui/TypingIndicator';
import { BlurView } from 'expo-blur';
import { theme } from '@/constants/theme';
import { setActiveChatId } from '@/services/NotificationService';

import { StickerPicker } from '@/components/chat/StickerPicker';
import { useCall } from '@/contexts/CallContext';
import { Keyboard } from 'react-native';

export default function ChatDetailScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const { chats, messages, sendMessage, markAsRead, setTyping, blockUser, deleteGroup, fetchMessages, updateGroup, getParticipants, lockedChats, lockChat, unlockChat } = useChat();
  const { user } = useAuth();
  const { showToast } = useToast();
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
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Lock Chat State
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinMode, setPinMode] = useState<'lock' | 'unlock'>('unlock'); // 'lock' = setting new pin, 'unlock' = verifying to unlock
  const [confirmPin, setConfirmPin] = useState(''); // For new pin confirmation

  const chat = chats.find(c => c.id === id);
  const chatMessages = messages[id as string] || [];

  useEffect(() => {
    if (id) {
      markAsRead(id as string);
      fetchMessages(id as string);
      checkBlockStatus();

      // Set active chat for notifications suppression
      setActiveChatId(id as string);

      return () => {
        setActiveChatId(null);
      };
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

  const uploadAndSend = async (uri: string, type: 'image' | 'video' | 'document') => {
    setUpdating(true); // Show spinner
    setShowAttachMenu(false); // Close menu
    try {
      const { data: url, error } = await ChatService.uploadChatAttachment(id as string, uri, type);
      if (error || !url) throw new Error(error || 'Upload failed');

      await sendMessage(id as string, type === 'document' ? 'File Attachment' : (type === 'image' ? 'Image Attachment' : 'Video Attachment'), type, url);
    } catch (e: any) {
      Alert.alert('Error', e.message);
    } finally {
      setUpdating(false);
    }
  };

  const handleMediaPick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false, // Videos shouldn't be edited usually
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      await uploadAndSend(result.assets[0].uri, result.assets[0].type === 'video' ? 'video' : 'image');
    }
  };

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true
      });
      if (!result.canceled && result.assets[0]) {
        await uploadAndSend(result.assets[0].uri, 'document');
      }
    } catch (err) {
      console.log("Document Picker Error", err);
    }
  };

  const handleContactPick = () => {
    setShowAttachMenu(false);
    Alert.alert('Contacts', 'Contact sharing will be available in the next update.');
  };

  const toggleStickerPicker = () => {
    if (showStickerPicker) {
      setShowStickerPicker(false);
      inputRef.current?.focus();
    } else {
      Keyboard.dismiss();
      setTimeout(() => setShowStickerPicker(true), 150); // Slight delay for keyboard to hide
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessageText(prev => prev + emoji);
  };

  const handleStickerSelect = async (url: string) => {
    // Send sticker as image
    await sendMessage(id as string, 'Sticker', 'image', url);
    setShowStickerPicker(false);
  };

  // Close sticker picker when typing
  const handleInputFocus = () => {
    setShowStickerPicker(false);
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
      default: return ['#00E5FF', '#FF4081'];
    }
  };

  const getBubbleStyle = (isSent: boolean) => ({
    backgroundColor: isSent ? colors.primary : '#1A1A1A',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: isSent ? 18 : 6,
    borderBottomRightRadius: isSent ? 6 : 18,
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 5 }]}>
        <View style={styles.headerLeft}>
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
        </View>

        <View style={styles.headerCenter}>
          <GradientText
            text={chat.userName.toUpperCase()}
            style={styles.headerName}
            colors={getGenderColors(chat.gender)}
          />
          {chat.type === 'direct' ? (
            chat.online && <Text style={styles.onlineStatus}>Online</Text>
          ) : (
            <Text style={styles.onlineStatus}>
              {chat.onlineCount || 0} online • {chat.memberCount || 0} members
            </Text>
          )}
        </View>

        <View style={styles.headerRight}>


          <TouchableOpacity
            onPress={() => {
              if (chat.type === 'direct') {
                Alert.alert('Gossip Settings', 'What do you want to do?', [
                  { text: 'Voice Call', onPress: () => initiateCall(chat.userId, 'audio') },
                  { text: 'Video Call', onPress: () => initiateCall(chat.userId, 'video') },
                  { text: 'Block User', style: 'destructive', onPress: () => blockUser(chat.userId).then(() => router.back()) },
                  {
                    text: lockedChats[chat.id] ? 'Unlock Chat' : 'Lock Chat',
                    onPress: () => {
                      setPinMode(lockedChats[chat.id] ? 'unlock' : 'lock');
                      setPinInput('');
                      setConfirmPin('');
                      setShowPinModal(true);
                    }
                  },
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
            <Avatar uri={chat.userAvatar} size={38} online={chat.online} />
          </TouchableOpacity>
        </View>
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
          contentContainerStyle={[styles.messageList, { paddingBottom: 120 }]}
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
                  {item.type === 'image' && item.mediaUrl ? (
                    <RNImage
                      source={{ uri: item.mediaUrl }}
                      style={{ width: 200, height: 200, borderRadius: 10, resizeMode: 'cover' }}
                    />
                  ) : (
                    <Text style={[styles.messageText, { color: isSent ? '#000' : '#FFF' }]}>
                      {item.content}
                    </Text>
                  )}
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
                <TouchableOpacity style={styles.iconBtn} onPress={toggleStickerPicker}>
                  <Ionicons name={showStickerPicker ? "keypad-outline" : "happy-outline"} size={24} color="#666" />
                </TouchableOpacity>

                <TextInput
                  ref={inputRef}
                  style={styles.input}
                  placeholder="Message..."
                  placeholderTextColor="#666"
                  value={messageText}
                  onChangeText={handleTyping}
                  onFocus={handleInputFocus}
                  multiline
                  textAlignVertical="center" // Android fix
                />

                <View style={styles.inputIcons}>
                  <TouchableOpacity style={styles.iconBtn} onPress={() => setShowAttachMenu(true)}>
                    <Ionicons name="attach" size={24} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.sendBtn, { backgroundColor: (messageText.trim() || showStickerPicker) ? colors.primary : '#1A1A1A' }]}
                onPress={handleSend}
                disabled={!messageText.trim() && !showStickerPicker}
              >
                <Ionicons name={messageText.trim() ? "send" : "mic"} size={24} color={messageText.trim() ? "#000" : "#666"} />
              </TouchableOpacity>
            </>
          )}
        </View>
        <StickerPicker
          visible={showStickerPicker}
          onEmojiSelect={handleEmojiSelect}
          onStickerSelect={handleStickerSelect}
          onClose={() => setShowStickerPicker(false)}
        />
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
              <TouchableOpacity style={styles.attachItem} onPress={handleDocumentPick}>
                <View style={[styles.attachIcon, { backgroundColor: '#5f27cd' }]}>
                  <Ionicons name="document-text" size={24} color="#FFF" />
                </View>
                <Text style={styles.attachLabel}>Document</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.attachItem} onPress={handleMediaPick}>
                <View style={[styles.attachIcon, { backgroundColor: '#ff9f43' }]}>
                  <Ionicons name="images" size={24} color="#FFF" />
                </View>
                <Text style={styles.attachLabel}>Media</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.attachItem} onPress={handleContactPick}>
                <View style={[styles.attachIcon, { backgroundColor: '#0abde3' }]}>
                  <Ionicons name="person" size={24} color="#FFF" />
                </View>
                <Text style={styles.attachLabel}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal >

      {/* PIN Entry Modal */}
      <Modal
        visible={showPinModal}
        transparent
        animationType="fade"
      >
        <BlurView intensity={95} tint="dark" style={[styles.modalOverlay, { justifyContent: 'center', alignItems: 'center' }]}>
          <View style={{ width: '80%', alignItems: 'center', gap: 20 }}>
            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
              {pinMode === 'lock'
                ? (confirmPin ? 'Confirm PIN' : 'Create a PIN')
                : 'Enter PIN to Unlock'}
            </Text>

            <View style={{ flexDirection: 'row', gap: 15, marginBottom: 20 }}>
              {[...Array(4)].map((_, i) => (
                <View
                  key={i}
                  style={{
                    width: 15, height: 15, borderRadius: 8,
                    backgroundColor: i < pinInput.length ? colors.primary : '#333',
                    borderWidth: 1, borderColor: '#555'
                  }}
                />
              ))}
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 15, width: 220 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0, -2].map((num) => {
                if (num === -1) return <View key="empty" style={{ width: 60, height: 60 }} />;
                if (num === -2) return (
                  <TouchableOpacity
                    key="back"
                    style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => setPinInput(prev => prev.slice(0, -1))}
                  >
                    <Ionicons name="backspace" size={24} color="#FFF" />
                  </TouchableOpacity>
                );

                return (
                  <TouchableOpacity
                    key={num}
                    style={{
                      width: 60, height: 60, borderRadius: 30,
                      backgroundColor: '#333', justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => {
                      if (pinInput.length < 4) {
                        const newPin = pinInput + num;
                        setPinInput(newPin);

                        if (newPin.length === 4) {
                          // Handle completion
                          setTimeout(async () => {
                            if (pinMode === 'unlock') {
                              // Verifying to unlock
                              if (newPin === lockedChats[chat?.id!]) {
                                await unlockChat(chat?.id!);
                                setShowPinModal(false);
                                showToast('This chat is now unlocked.', 'success');
                              } else {
                                showToast('Incorrect PIN', 'error');
                                setPinInput('');
                              }
                            } else {
                              // Setting up lock
                              if (!confirmPin) {
                                setConfirmPin(newPin);
                                setPinInput('');
                              } else {
                                if (newPin === confirmPin) {
                                  await lockChat(chat?.id!, newPin);
                                  setShowPinModal(false);
                                  showToast('This chat is now locked.', 'success');
                                } else {
                                  showToast('PINs do not match. Try again.', 'error');
                                  setConfirmPin('');
                                  setPinInput('');
                                }
                              }
                            }
                          }, 100);
                        }
                      }
                    }}
                  >
                    <Text style={{ color: '#FFF', fontSize: 24, fontWeight: '500' }}>{num}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity onPress={() => setShowPinModal(false)}>
              <Text style={{ color: '#888', marginTop: 20 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
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
    paddingHorizontal: 15,
    paddingBottom: 12,
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
  },
  headerLeft: {
    width: 100,
    alignItems: 'flex-start',
    zIndex: 1,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    width: 100, // Fixed width to balance header
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 15,
    zIndex: 1,
  },
  backButton: {
    padding: 5,
  },
  // headerTitleContainer removed in favor of absolute positioning logic or flex balance
  headerName: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  onlineStatus: {
    fontSize: 11,
    color: '#00B894',
    fontWeight: '600',
    marginTop: 2,
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
    minHeight: 48, // Allow growth
    alignItems: 'center', // Center icons vertically
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontSize: 15,
    maxHeight: 100, // Allow expansion
    paddingTop: Platform.OS === 'ios' ? 12 : 5, // Center vertically roughly
    paddingBottom: Platform.OS === 'ios' ? 12 : 5,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
        paddingTop: 14 // Web vertical center fix
      }
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
