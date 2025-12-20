import { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView, ActivityIndicator, Alert, Platform, Modal, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { useToast } from '@/contexts/ToastContext';
import { useStatus } from '@/contexts/StatusContext';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';

export default function ChatsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { chats, loading: chatLoading, pendingRequests, sendRequest, respondToRequest, createChat, blockUser, lockedChats, lockChat, unlockChat } = useChat();
  const { showToast } = useToast();
  const { statuses, loading: statusLoading } = useStatus();
  usePushNotifications();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showRequestsModal, setShowRequestsModal] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState<string | null>(null);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedChats, setSelectedChats] = useState<Set<string>>(new Set());
  const [showBlockConfirm, setShowBlockConfirm] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);

  // Lock Logic State
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinMode, setPinMode] = useState<'setup' | 'unlock'>('unlock');
  const [pinInput, setPinInput] = useState('');
  const [targetLockChatId, setTargetLockChatId] = useState<string | null>(null);
  const [confirmPin, setConfirmPin] = useState(''); // For setup validation

  const existingUserIds = useRef<string[]>([]);
  useEffect(() => {
    existingUserIds.current = chats.map(c => c.userId);
  }, [chats]);

  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (searchQuery.trim().length >= 2) {
        setSearchLoading(true);
        const { ProfileService } = await import('@/services/ProfileService');
        const { data, error } = await ProfileService.searchProfiles(searchQuery);
        if (!error && data) {
          const newResults = data.filter(p => !existingUserIds.current.includes(p.id));
          setSearchResults(newResults);
        }
        setSearchLoading(false);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchQuery]);

  const handleSendRequest = async (userId: string) => {
    try {
      setIsSendingRequest(userId);
      await sendRequest(userId);
      showToast('Chat request sent!', 'success');
      setSearchResults(prev => prev.filter(p => p.id !== userId));
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Failed to send request');
    } finally {
      setIsSendingRequest(null);
    }
  };

  const handleRespondToRequest = async (requestId: string, status: 'accepted' | 'rejected') => {
    try {
      setRequestLoading(true);
      const roomId = await respondToRequest(requestId, status);
      if (status === 'accepted') {
        showToast('You are now connected!', 'success');
        setShowRequestsModal(false);
        if (roomId) router.push(`/chat/${roomId}`);
      }
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setRequestLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days`;
    return 'Last week';
  };

  const handleChatPress = async (item: any) => {
    if (selectionMode) {
      toggleSelection(item);
      return;
    }

    if (lockedChats[item.id]) {
      setTargetLockChatId(item.id);
      setPinMode('unlock');
      setPinInput('');
      setShowPinModal(true);
      return;
    }

    if (item.id.startsWith('temp_')) {
      const result = await createChat(item.userId, item.userName, item.userAvatar);
      if (result) router.push(`/chat/${result}`);
      else Alert.alert('Error', 'Failed to start chat');
    } else {
      router.push(`/chat/${item.id}`);
    }
  };

  const handleChatLongPress = (item: any) => {
    if (!selectionMode && item.type === 'direct') {
      setSelectionMode(true);
      setSelectedChats(new Set([item.id]));
    }
  };

  const toggleSelection = (item: any) => {
    if (item.type !== 'direct') return;

    const chatId = item.id;
    setSelectedChats(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chatId)) {
        newSet.delete(chatId);
        if (newSet.size === 0) setSelectionMode(false);
      } else {
        newSet.add(chatId);
      }
      return newSet;
    });
  };

  const handleBlockMultiple = () => {
    const chatArray = Array.from(selectedChats)
      .map(id => chats.find(c => c.id === id))
      .filter(c => !!c && c.type === 'direct');

    if (chatArray.length === 0) {
      setSelectionMode(false);
      setSelectedChats(new Set());
      return;
    }
    setShowBlockConfirm(true);
  };

  const confirmBlock = async () => {
    const chatArray = Array.from(selectedChats)
      .map(id => chats.find(c => c.id === id))
      .filter(c => !!c && c.type === 'direct');

    setIsBlocking(true);
    try {
      for (const chat of chatArray) {
        if (chat) await blockUser(chat.userId);
      }
      setShowBlockConfirm(false);
      setSelectionMode(false);
      setSelectedChats(new Set());
      showToast('Gossipers blocked successfully!', 'success');
    } catch (err: any) {
      Alert.alert('Error', 'Failed to block: ' + err.message);
    } finally {
      setIsBlocking(false);
    }
  };

  const initLockProcess = () => {
    if (selectedChats.size !== 1) {
      Alert.alert('Notice', 'Please select exactly one chat to lock/unlock.');
      return;
    }
    const chatId = Array.from(selectedChats)[0];

    // Check if already locked
    if (lockedChats[chatId]) {
      Alert.alert('Unlock Chat', 'Do you want to remove the lock?', [
        { text: 'Cancel' },
        {
          text: 'Unlock', onPress: async () => {
            await unlockChat(chatId);
            setSelectionMode(false);
            setSelectedChats(new Set());
            showToast('Chat unlocked!', 'success');
          }
        }
      ]);
    } else {
      setTargetLockChatId(chatId);
      setPinMode('setup');
      setPinInput('');
      setConfirmPin('');
      setShowPinModal(true);
    }
  };

  const handlePinSubmit = async () => {
    if (pinInput.length !== 4) return;

    if (pinMode === 'unlock') {
      if (targetLockChatId && lockedChats[targetLockChatId] === pinInput) {
        setShowPinModal(false);
        setPinInput('');
        router.push(`/chat/${targetLockChatId}`);
      } else {
        Alert.alert('Error', 'Incorrect PIN');
        setPinInput('');
      }
    } else if (pinMode === 'setup') {
      if (!confirmPin) {
        setConfirmPin(pinInput);
        setPinInput('');
      } else {
        if (pinInput === confirmPin && targetLockChatId) {
          await lockChat(targetLockChatId, pinInput);
          setShowPinModal(false);
          setSelectionMode(false);
          setSelectedChats(new Set());
          setPinInput('');
          setConfirmPin('');
          showToast('Chat Locked! Use PIN to open.', 'success');
        } else {
          showToast('PINs do not match. Try again.', 'error');
          setConfirmPin('');
          setPinInput('');
        }
      }
    }
  };

  const getNameColor = (gender?: string) => {
    switch (gender?.toLowerCase()) {
      case 'male': return '#00BFFF';
      case 'female': return '#FFB6C1';
      case 'other': return '#FFD700';
      default: return '#FFF';
    }
  };

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      <View style={styles.brandingSection}>
        {selectionMode ? (
          <View style={styles.selectionHeader}>
            <TouchableOpacity onPress={() => { setSelectionMode(false); setSelectedChats(new Set()); }}>
              <Ionicons name="close" size={28} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.selectionTitle}>{selectedChats.size} SELECTED</Text>
            <TouchableOpacity onPress={handleBlockMultiple}>
              <View style={styles.blockBtn}>
                <Ionicons name="hand-right-outline" size={18} color="#FFF" style={{ marginRight: 6 }} />
                <Text style={styles.blockActionText}>BLOCK</Text>
              </View>
            </TouchableOpacity>
            {selectedChats.size === 1 && (
              <TouchableOpacity onPress={initLockProcess}>
                <View style={[styles.blockBtn, { backgroundColor: '#5F66CD', marginLeft: 10 }]}>
                  <Ionicons name={lockedChats[Array.from(selectedChats)[0]] ? "lock-open" : "lock-closed"} size={18} color="#FFF" style={{ marginRight: 6 }} />
                  <Text style={styles.blockActionText}>{lockedChats[Array.from(selectedChats)[0]] ? "UNLOCK" : "LOCK"}</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View style={styles.brandHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <GradientText text="GOSSIP." style={styles.brandTitle} />
              <Ionicons name="chatbubbles-outline" size={30} color={colors.primary} />
            </View>
            <TouchableOpacity
              style={styles.notificationBtn}
              onPress={() => setShowRequestsModal(true)}
            >
              <Ionicons name="notifications-outline" size={28} color="#FFF" />
              {pendingRequests.length > 0 && (
                <View style={[styles.requestBadge, { backgroundColor: colors.error }]}>
                  <Text style={styles.requestBadgeText}>{pendingRequests.length}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
        {!selectionMode && (
          <Text style={styles.brandQuote}>Connect, share, and whisper in style.</Text>
        )}
      </View>

      <View style={styles.searchCard}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput as any}
          placeholder="Search friends or gossip..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchLoading && <ActivityIndicator size="small" color={colors.primary} />}
      </View>

      {searchQuery.trim().length > 0 && searchResults.length > 0 && (
        <View style={styles.searchResultSection}>
          <Text style={styles.sectionTitle}>FIND NEW GOSSIPERS</Text>
          {searchResults.map(profile => (
            <TouchableOpacity
              key={profile.id}
              style={styles.searchResultItem}
              onPress={() => handleSendRequest(profile.id)}
            >
              <Avatar uri={profile.avatar_url} size={48} />
              <View style={{ flex: 1 }}>
                <Text style={styles.searchResultName}>{profile.full_name || profile.username}</Text>
                <Text style={styles.searchResultUser}>@{profile.username}</Text>
              </View>
              {isSendingRequest === profile.id ? (
                <ActivityIndicator size="small" color={colors.primary} />
              ) : (
                <View style={[styles.sendRequestBtn, { backgroundColor: colors.primary + '20' }]}>
                  <Text style={[styles.sendRequestText, { color: colors.primary }]}>Request</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {chats.length > 0 && !searchQuery && (
        <View style={styles.chatsLabel}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={styles.sectionTitle}>RECENT GOSSIPS</Text>
            <Image
              source={require('@/assets/images/gossip_illustration.png')}
              style={{ width: 60, height: 60, marginTop: -15 }}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
    </View>
  );

  const renderChatItem = ({ item }: { item: any }) => {
    const isSelected = selectedChats.has(item.id);
    const isLocked = !!lockedChats[item.id];

    // Determine what text to show
    let previewText = item.typing ? 'typing...' : (item.lastMessage || 'Started a gossip...');
    if (isLocked) {
      if (item.unreadCount > 0) {
        previewText = `${item.unreadCount} New Message${item.unreadCount > 1 ? 's' : ''}`;
      } else {
        previewText = 'Locked Gossip';
      }
    }

    return (
      <TouchableOpacity
        style={[styles.chatItem, isSelected && { backgroundColor: 'rgba(0,191,255,0.08)' }]}
        activeOpacity={0.7}
        onPress={() => handleChatPress(item)}
        onLongPress={() => handleChatLongPress(item)}
      >
        <View style={styles.avatarContainer}>
          <Avatar uri={item.userAvatar} size={58} online={item.online} />
          {selectionMode && (
            <View style={[styles.selectionCircle, { backgroundColor: isSelected ? colors.primary : '#333' }]}>
              {isSelected && <Ionicons name="checkmark" size={14} color="#000" />}
            </View>
          )}
        </View>

        <View style={styles.chatContent}>
          <View style={styles.chatHeader}>
            <Text style={[styles.chatName, { color: getNameColor(item.gender) }]} numberOfLines={1}>
              {item.userName.toUpperCase()}
            </Text>
            {isLocked && <Ionicons name="lock-closed" size={12} color="#666" style={{ marginLeft: 5, marginRight: 'auto' }} />}
            <Text style={styles.chatTime}>
              {formatTime(item.lastMessageTime || new Date())}
            </Text>
          </View>
          <View style={styles.chatFooter}>
            <Text
              style={[
                styles.chatMessage,
                (item.unreadCount > 0 || isLocked) && { color: (isLocked && item.unreadCount > 0) ? colors.primary : (item.unreadCount > 0 ? '#FFF' : '#777'), fontWeight: item.unreadCount > 0 ? '600' : 'normal' },
                isLocked && { fontStyle: 'italic' }
              ]}
              numberOfLines={1}
            >
              {previewText}
            </Text>
            {item.unreadCount > 0 && !selectionMode && (
              <View style={[styles.unreadBadge, { backgroundColor: colors.primary }]}>
                <Text style={styles.unreadText}>{item.unreadCount}</Text>
              </View>
            )}
            {selectionMode && (
              <Ionicons
                name={isSelected ? "checkbox" : "square-outline"}
                size={22}
                color={isSelected ? colors.primary : '#333'}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (chatLoading && chats.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={chats.filter(c => c.type === 'direct' && (searchQuery ? c.userName.toLowerCase().includes(searchQuery.toLowerCase()) : true))}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader()}
        renderItem={renderChatItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={showBlockConfirm}
        transparent
        animationType="fade"
      >
        <View style={styles.confirmOverlay}>
          <BlurView intensity={90} tint="dark" style={styles.confirmContent}>
            <Ionicons name="hand-right" size={50} color="#FFB6C1" />
            <Text style={styles.confirmTitle}>Block Selected?</Text>
            <Text style={styles.confirmDesc}>
              They won't be able to whisper or call you anymore. You can unblock them later in settings.
            </Text>
            <View style={styles.confirmActions}>
              <TouchableOpacity
                style={styles.confirmCancel}
                onPress={() => setShowBlockConfirm(false)}
              >
                <Text style={{ color: '#888', fontWeight: 'bold' }}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmBlockBtn}
                onPress={confirmBlock}
                disabled={isBlocking}
              >
                {isBlocking ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <Text style={{ color: '#FFF', fontWeight: 'bold' }}>BLOCK</Text>
                )}
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </Modal>

      <Modal
        visible={showRequestsModal}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <BlurView intensity={80} tint="dark" style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <GradientText text="Chat Requests" style={styles.modalTitle} />
              <TouchableOpacity onPress={() => setShowRequestsModal(false)}>
                <Ionicons name="close-circle" size={32} color="#444" />
              </TouchableOpacity>
            </View>
            {pendingRequests.length === 0 ? (
              <View style={styles.emptyRequests}>
                <Ionicons name="mail-unread-outline" size={60} color="#333" />
                <Text style={{ color: '#666', marginTop: 15 }}>No pending gossip requests</Text>
              </View>
            ) : (
              <ScrollView style={{ flex: 1 }}>
                {pendingRequests.map(request => (
                  <View key={request.id} style={styles.requestItem}>
                    <Avatar uri={request.profiles.avatar_url} size={50} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.requestName}>{request.profiles.full_name || request.profiles.username}</Text>
                      <Text style={styles.requestUser}>@{request.profiles.username}</Text>
                    </View>
                    <View style={styles.requestActions}>
                      <TouchableOpacity
                        style={[styles.actionBtn, { backgroundColor: '#111' }]}
                        onPress={() => handleRespondToRequest(request.id, 'rejected')}
                      >
                        <Ionicons name="close" size={20} color="#666" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.actionBtn, { backgroundColor: colors.primary }]}
                        onPress={() => handleRespondToRequest(request.id, 'accepted')}
                      >
                        <Ionicons name="checkmark" size={20} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            )}
            {requestLoading && (
              <View style={styles.modalLoading}>
                <ActivityIndicator color={colors.primary} />
              </View>
            )}
          </BlurView>
        </View>
      </Modal>

      {/* PIN Entry Modal */}
      <Modal
        visible={showPinModal}
        transparent
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <BlurView intensity={95} tint="dark" style={[styles.modalContent, { height: 'auto', paddingBottom: 50 }]}>
            <View style={{ alignItems: 'center', gap: 20 }}>
              <Ionicons name="lock-closed" size={40} color={colors.primary} />
              <Text style={styles.modalTitle}>
                {pinMode === 'setup'
                  ? (confirmPin ? 'Confirm PIN' : 'Create 4-Digit PIN')
                  : 'Enter PIN'}
              </Text>

              <View style={styles.pinContainer}>
                {[0, 1, 2, 3].map(i => (
                  <View key={i} style={[styles.pinDot, {
                    backgroundColor: pinInput.length > i ? colors.primary : '#333'
                  }]} />
                ))}
              </View>

              <View style={styles.numberPad}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'del'].map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.padButton}
                    onPress={() => {
                      if (typeof item === 'number') {
                        if (pinInput.length < 4) {
                          const newVal = pinInput + item;
                          setPinInput(newVal);
                          // Auto accept on 4th digit if in unlock mode
                          if (newVal.length === 4 && pinMode === 'unlock') {
                            // Trigger submit after state update (handled by useEffect or explicitly call logic wrapper)
                            // Since logic relies on current pinInput which is stale here, we won't call handlePinSubmit directly
                            // instead we'll let a separate Effect or just require manual "OK" or auto-trigger?
                            // Let's just update state, and use an Effect
                          }
                        }
                      } else if (item === 'del') {
                        setPinInput(prev => prev.slice(0, -1));
                      } else if (item === 'C') {
                        setShowPinModal(false);
                        setPinInput('');
                        setConfirmPin('');
                      }
                    }}
                  >
                    {item === 'del' ? (
                      <Ionicons name="backspace" size={24} color="#FFF" />
                    ) : (
                      <Text style={styles.padText}>{item}</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                style={[styles.confirmCancel, { width: '100%', backgroundColor: pinInput.length === 4 ? colors.primary : '#222' }]}
                onPress={handlePinSubmit}
                disabled={pinInput.length !== 4}
              >
                <Text style={{ color: pinInput.length === 4 ? '#000' : '#666', fontWeight: 'bold' }}>
                  {pinMode === 'setup' ? (confirmPin ? 'CONFIRM' : 'NEXT') : 'UNLOCK'}
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </Modal >
    </View >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  loadingContainer: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  headerWrapper: { backgroundColor: '#000' },
  brandingSection: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15 },
  brandHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brandTitle: { fontSize: 32, fontWeight: '900', letterSpacing: 0.5 },
  brandQuote: { fontSize: 13, color: '#888', fontWeight: '500', marginTop: 4 },
  notificationBtn: { position: 'relative', padding: 4 },
  requestBadge: { position: 'absolute', top: -4, right: -4, minWidth: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#000' },
  requestBadgeText: { color: '#FFF', fontSize: 10, fontWeight: '900' },
  searchCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111', marginHorizontal: 20, marginBottom: 15, paddingHorizontal: 15, height: 48, borderRadius: 24, gap: 12, borderWidth: 1, borderColor: '#222' },
  searchInput: { flex: 1, fontSize: 15, color: '#FFF', height: '100%', ...Platform.select({ web: { outlineStyle: 'none' }, default: {} }) },
  chatsLabel: { paddingHorizontal: 20, marginTop: 10, marginBottom: 5 },
  sectionTitle: { fontSize: 11, fontWeight: '800', letterSpacing: 1.5, color: '#444' },
  listContent: { paddingBottom: 120 },
  chatItem: { flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, alignItems: 'center', gap: 15 },
  avatarContainer: { position: 'relative' },
  selectionCircle: { position: 'absolute', bottom: -2, right: -2, width: 22, height: 22, borderRadius: 11, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#000' },
  chatContent: { flex: 1, paddingBottom: 12, borderBottomWidth: 0.3, borderBottomColor: '#222' },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  chatName: { fontSize: 17, fontWeight: '800', letterSpacing: 0.5 },
  chatTime: { fontSize: 12, color: '#444' },
  chatFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  chatMessage: { fontSize: 14, color: '#777', flex: 1 },
  unreadBadge: { minWidth: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 6, marginLeft: 10 },
  unreadText: { color: '#000', fontSize: 10, fontWeight: '900' },
  selectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  selectionTitle: { color: '#FFF', fontSize: 18, fontWeight: '900', letterSpacing: 1 },
  blockBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FF4757', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  blockActionText: { color: '#FFF', fontSize: 13, fontWeight: '900' },
  searchResultSection: { paddingHorizontal: 20, marginTop: 10, marginBottom: 20, gap: 12 },
  searchResultItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0A0A0A', padding: 12, borderRadius: 16, gap: 15, borderWidth: 1, borderColor: '#111' },
  searchResultName: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  searchResultUser: { color: '#666', fontSize: 13 },
  sendRequestBtn: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12 },
  sendRequestText: { fontSize: 13, fontWeight: '700' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'flex-end' },
  modalContent: { height: '80%', backgroundColor: '#000', borderTopLeftRadius: 35, borderTopRightRadius: 35, padding: 30, borderTopWidth: 0.5, borderColor: '#222' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  modalTitle: { fontSize: 24, fontWeight: '900' },
  emptyRequests: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  requestItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 0.3, borderBottomColor: '#222', gap: 15 },
  requestName: { color: '#FFF', fontSize: 17, fontWeight: '700' },
  requestUser: { color: '#666', fontSize: 13 },
  requestActions: { flexDirection: 'row', gap: 12 },
  actionBtn: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  modalLoading: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', borderRadius: 35 },
  confirmOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center', padding: 40 },
  confirmContent: { width: '100%', padding: 30, borderRadius: 30, alignItems: 'center', gap: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  confirmTitle: { color: '#FFF', fontSize: 22, fontWeight: '900', marginTop: 10 },
  confirmDesc: { color: '#888', textAlign: 'center', lineHeight: 20, marginBottom: 10 },
  confirmActions: { flexDirection: 'row', gap: 15, width: '100%' },
  confirmCancel: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#111' },
  confirmBlockBtn: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#FF4757' },
  pinContainer: { flexDirection: 'row', gap: 20, marginBottom: 20 },
  pinDot: { width: 16, height: 16, borderRadius: 8, borderWidth: 1, borderColor: '#444' },
  numberPad: { flexDirection: 'row', flexWrap: 'wrap', width: 280, justifyContent: 'center', gap: 20 },
  padButton: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center' },
  padText: { color: '#FFF', fontSize: 24, fontWeight: '700' },
});
