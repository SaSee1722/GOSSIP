import { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView, ActivityIndicator, Alert, Image as RNImage, Platform, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { Chat } from '@/contexts/ChatContext';
import { useStatus } from '@/contexts/StatusContext';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { theme } from '@/constants/theme';

export default function ChatsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { chats, loading: chatLoading, pendingRequests, sendRequest, respondToRequest } = useChat();
  const { statuses, loading: statusLoading } = useStatus();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showRequestsModal, setShowRequestsModal] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState<string | null>(null);

  const handleSendRequest = async (userId: string) => {
    try {
      setIsSendingRequest(userId);
      await sendRequest(userId);
      Alert.alert('Success', 'Chat request sent!');
      setSearchResults(prev => prev.filter(p => p.id !== userId));
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setIsSendingRequest(null);
    }
  };

  const handleRespondToRequest = async (requestId: string, status: 'accepted' | 'rejected') => {
    try {
      setRequestLoading(true);
      const roomId = await respondToRequest(requestId, status);
      if (status === 'accepted') {
        Alert.alert('Success', 'You are now connected!');
        setShowRequestsModal(false);
        if (roomId) {
          router.push(`/chat/${roomId}`);
        }
      }
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setRequestLoading(false);
    }
  };

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

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.brandingSection}>
        <View style={styles.brandHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <GradientText
              text="GOSSIP."
              style={styles.brandTitle}
            />
            <Image
              source={require('@/assets/images/gossip_talk.png')}
              style={{ width: 65, height: 65 }}
              contentFit="contain"
            />
          </View>
          <TouchableOpacity
            style={styles.requestBadgeBtn}
            onPress={() => setShowRequestsModal(true)}
          >
            <Ionicons name="people-outline" size={26} color={colors.primary} />
            {pendingRequests.length > 0 && (
              <View style={[styles.badgeContainer, { backgroundColor: colors.error }]}>
                <Text style={styles.badgeText}>{pendingRequests.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <GradientText
          text="Connect, share, and whisper in style."
          style={styles.brandQuote}
          colors={['#E0E0E0', '#C0C0C0']}
        />
      </View>

      <View style={styles.header}>
        <GradientText
          text="VIBES"
          style={styles.sectionTitle}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContent}
      >
        <TouchableOpacity
          style={styles.storyItem}
          onPress={() => Alert.alert('Add Status', 'Status upload feature coming soon! (Requires camera access)')}
        >
          <View style={[styles.storyAvatarContainer, { borderColor: theme.colors.light.primary, borderStyle: 'dotted', borderWidth: 2 }]}>
            <View style={[styles.storyAvatarInner, { backgroundColor: '#111' }]}>
              <Ionicons name="add" size={30} color={theme.colors.light.secondary} />
            </View>
          </View>
          <Text style={[styles.storyName, { color: '#FFF' }]} numberOfLines={1}>
            Your Vibe
          </Text>
        </TouchableOpacity>

        {statuses.map(item => (
          <TouchableOpacity key={item.id} style={styles.storyItem}>
            <View style={[styles.storyAvatarContainer, { borderColor: theme.colors.light.secondary, borderWidth: 2 }]}>
              <Avatar uri={item.profiles?.avatar_url || 'https://i.pravatar.cc/150'} size={70} />
            </View>
            <Text style={[styles.storyName, { color: '#DDD' }]} numberOfLines={1}>
              {item.profiles?.username || 'User'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.searchCard}>
        <Ionicons name="search" size={20} color="#555" />
        <TextInput
          style={styles.searchInput as any}
          placeholder="Find people to gossip with..."
          placeholderTextColor="#555"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchLoading && <ActivityIndicator size="small" color={colors.primary} style={{ marginRight: 10 }} />}
      </View>

      {searchQuery.trim().length > 0 && searchResults.length > 0 && (
        <View style={styles.searchResultSection}>
          <Text style={styles.searchResultTitle}>FOUND NEW GOSSIPERS</Text>
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
          <View style={styles.divider} />
          {chats.filter(c => c.type === 'direct' && c.userName.toLowerCase().includes(searchQuery.toLowerCase())).length > 0 && <Text style={styles.searchResultTitle}>EXISTING GOSSIPS</Text>}
        </View>
      )}

      {searchQuery.trim().length > 0 && !searchLoading && searchResults.length === 0 && chats.filter(c => c.type === 'direct' && c.userName.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
        <View style={styles.noResults}>
          <Text style={{ color: '#666' }}>No gossiper found with that name.</Text>
        </View>
      )}
    </View>
  );

  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => router.push(`/chat/${item.id}`)}
    >
      <Avatar uri={item.userAvatar} size={64} online={item.online} />

      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={[styles.chatName, { color: '#00E5FF' }]} numberOfLines={1}>
            {item.userName.split(' ')[0]}{item.age ? `, ${item.age}` : ''}
            {item.online && <Text style={{ color: colors.success }}> •</Text>}
          </Text>
          <Text style={[styles.chatTime, { color: '#666' }]}>
            {formatTime(item.lastMessageTime || new Date())}
          </Text>
        </View>

        <Text
          style={[styles.chatMessage, { color: '#CCC' }]}
          numberOfLines={1}
        >
          {item.typing ? 'typing...' : item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (chatLoading && chats.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: '#000', paddingTop: insets.top }]}>
      <FlatList
        data={chats.filter(c => c.type === 'direct' && (searchQuery ? c.userName.toLowerCase().includes(searchQuery.toLowerCase()) : true))}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader()}
        renderItem={renderChatItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

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
              <ScrollView style={styles.requestsList}>
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
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingBottom: 10,
  },
  brandingSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  brandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  brandTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    letterSpacing: 0.5,
  },
  searchIcon: {
    padding: 8,
    backgroundColor: '#111',
    borderRadius: 12,
  },
  brandQuote: {
    fontSize: 13,
    color: '#CCC',
    fontWeight: '600',
    marginTop: -2,
    letterSpacing: 0.2,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  storiesContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 80,
  },
  storyAvatarContainer: {
    padding: 3,
    borderWidth: 2,
    borderRadius: 40,
    marginBottom: 8,
  },
  storyAvatarInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyName: {
    fontSize: 14,
    fontWeight: '600',
  },
  storyAge: {
    fontSize: 12,
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 25,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    height: '100%',
    ...Platform.select({
      web: {
        // @ts-ignore
        outlineStyle: 'none',
      }
    })
  },
  searchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#222',
  },
  listContent: {
    paddingBottom: 120,
  },
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 15,
  },
  chatContent: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
    paddingBottom: 12,
    height: '100%',
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 17,
    fontWeight: '700',
  },
  chatTime: {
    fontSize: 13,
  },
  chatMessage: {
    fontSize: 14,
    lineHeight: 20,
  },
  searchResultSection: {
    paddingHorizontal: 20,
    marginTop: 10,
    gap: 12,
  },
  searchResultTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#333',
    letterSpacing: 2,
    marginBottom: 5,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#080808',
    padding: 12,
    borderRadius: 16,
    gap: 15,
    borderWidth: 1,
    borderColor: '#111',
  },
  searchResultName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  searchResultUser: {
    color: '#666',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: '#111',
    marginVertical: 10,
  },
  noResults: {
    padding: 40,
    alignItems: 'center',
  },
  requestBadgeBtn: {
    position: 'relative',
    padding: 5,
  },
  badgeContainer: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#000',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
  },
  sendRequestBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
  },
  sendRequestText: {
    fontSize: 13,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '60%',
    backgroundColor: '#050505',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30,
    borderTopWidth: 1,
    borderColor: '#111',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '900',
  },
  emptyRequests: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  requestsList: {
    flex: 1,
  },
  requestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
    gap: 15,
  },
  requestName: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
  },
  requestUser: {
    color: '#666',
    fontSize: 13,
  },
  requestActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalLoading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
});
