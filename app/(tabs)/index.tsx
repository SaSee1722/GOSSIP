import { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView, ActivityIndicator, Alert, Image as RNImage, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { useStatus } from '@/contexts/StatusContext';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { theme } from '@/constants/theme';

export default function ChatsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { chats, loading: chatLoading } = useChat();
  const { statuses, loading: statusLoading } = useStatus();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filteredChats = chats.filter(chat =>
    chat.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (searchQuery.trim().length >= 2) {
        setSearchLoading(true);
        const { ProfileService } = await import('@/services/ProfileService');
        const { data, error } = await ProfileService.searchProfiles(searchQuery);
        if (!error && data) {
          // Filter out users who already have a chat room with the current user
          const existingUserIds = chats.map(c => c.userId);
          const newResults = data.filter(p => !existingUserIds.includes(p.id));
          setSearchResults(newResults);
        }
        setSearchLoading(false);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchQuery, chats]);

  const startNewChat = async (userId: string) => {
    try {
      const { ChatService } = await import('@/services/ChatService');
      const { data: roomId, error } = await ChatService.createDirectChat(userId);
      if (error) {
        Alert.alert('Error', error);
      } else if (roomId) {
        setSearchQuery('');
        router.push(`/chat/${roomId}`);
      }
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  // Mocking ages for now as they aren't in the data model yet
  const getAge = (id: string) => {
    const ages: Record<string, number> = { '1': 21, '2': 28, '3': 24, '4': 27, '5': 23 };
    return ages[id] || 22;
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

      {/* Search Results Section */}
      {searchQuery.trim().length > 0 && searchResults.length > 0 && (
        <View style={styles.searchResultSection}>
          <Text style={styles.searchResultTitle}>FOUND NEW GOSSIPERS</Text>
          {searchResults.map(profile => (
            <TouchableOpacity
              key={profile.id}
              style={styles.searchResultItem}
              onPress={() => startNewChat(profile.id)}
            >
              <Avatar uri={profile.avatar_url} size={48} />
              <View style={{ flex: 1 }}>
                <Text style={styles.searchResultName}>{profile.full_name || profile.username}</Text>
                <Text style={styles.searchResultUser}>@{profile.username}</Text>
              </View>
              <Ionicons name="chatbubble-ellipses-outline" size={22} color={colors.primary} />
            </TouchableOpacity>
          ))}
          <View style={styles.divider} />
          {filteredChats.length > 0 && <Text style={styles.searchResultTitle}>EXISTING GOSSIPS</Text>}
        </View>
      )}

      {searchQuery.trim().length > 0 && !searchLoading && searchResults.length === 0 && filteredChats.length === 0 && (
        <View style={styles.noResults}>
          <Text style={{ color: '#666' }}>No gossiper found with that name.</Text>
        </View>
      )}
    </View>
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
        data={filteredChats}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => router.push(`/chat/${item.id}`)}
          >
            <Avatar uri={item.userAvatar} size={64} online={item.online} />

            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={[styles.chatName, { color: '#00E5FF' }]} numberOfLines={1}>
                  {item.userName.split(' ')[0]}, {getAge(item.id)}
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
        )}
      />
    </View>
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
});
