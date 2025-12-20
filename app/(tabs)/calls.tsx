import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  TextInput,
  ActivityIndicator,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { useTheme } from '@/hooks/useTheme';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { useChat } from '@/hooks/useChat';
import { useCall } from '@/contexts/CallContext';
import { LinearGradient } from 'expo-linear-gradient';

interface CallItem {
  id: string;
  userName: string;
  userAvatar: string;
  userId: string;
  type: 'audio' | 'video';
  direction: 'incoming' | 'outgoing' | 'missed';
  timestamp: Date;
  duration?: string;
}

export default function CallsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const router = useRouter();
  const { chats } = useChat();
  const { initiateCall } = useCall();

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const calls: CallItem[] = [];

  const recentContacts = Array.from(new Set(chats.map(c => c.userId))).map(id => {
    const chat = chats.find(c => c.userId === id);
    return {
      id,
      name: chat?.userName || 'User',
      avatar: chat?.userAvatar
    };
  }).filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleStartCall = (userId: string, type: 'audio' | 'video') => {
    setShowAddModal(false);
    initiateCall(userId, type);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#000', paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <GradientText text="Calls" style={styles.title} />
            <Image
              source={require('@/assets/images/calls_doodle.png')}
              style={{ width: 65, height: 65 }}
              contentFit="contain"
            />
          </View>
          <Text style={[styles.subtitle, { color: '#666' }]}>Stay connected with voice & video.</Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowAddModal(true)}
        >
          <LinearGradient
            colors={['#00BFFF', '#FFB6C1']}
            style={styles.addBtn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="add" size={26} color="#FFF" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {calls.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={[styles.emptyIcon, { backgroundColor: '#111' }]}>
            <Ionicons name="call-outline" size={40} color="#333" />
          </View>
          <Text style={styles.emptyText}>No recent calls yet.</Text>
          <TouchableOpacity
            style={[styles.startBtn, { borderColor: '#FFB6C1' }]}
            onPress={() => setShowAddModal(true)}
          >
            <Text style={[styles.startBtnText, { color: '#FFB6C1' }]}>Start a conversation</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={calls}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.callItem}>
              <Avatar uri={item.userAvatar} size={56} />
              <View style={styles.callDetails}>
                <Text style={[styles.callName, { color: '#FFF' }]}>{item.userName}</Text>
                <View style={styles.callMeta}>
                  <Ionicons
                    name={item.direction === 'incoming' ? 'arrow-down' : 'arrow-up'}
                    size={14}
                    color={item.direction === 'missed' ? '#FFB6C1' : '#00BFFF'}
                  />
                  <Text style={styles.callTime}>{formatTime(item.timestamp)}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleStartCall(item.userId, item.type)}>
                <Ionicons name={item.type === 'video' ? 'videocam-outline' : 'call-outline'} size={24} color="#00BFFF" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Add Call Modal */}
      <Modal visible={showAddModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <GradientText text="New Call" style={styles.modalTitle} />
              <TouchableOpacity onPress={() => setShowAddModal(false)}>
                <Ionicons name="close-circle" size={32} color="#444" />
              </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} color="#666" />
              <TextInput
                style={styles.searchInput}
                placeholder="Find a friend..."
                placeholderTextColor="#444"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <Text style={styles.modalSubtitle}>RECENT CONTACTS</Text>

            <FlatList
              data={recentContacts}
              keyExtractor={item => item.id}
              style={{ maxHeight: 400 }}
              renderItem={({ item }) => (
                <View style={styles.contactItem}>
                  <Avatar uri={item.avatar} size={48} />
                  <Text style={styles.contactName}>{item.name}</Text>
                  <View style={styles.contactActions}>
                    <TouchableOpacity onPress={() => handleStartCall(item.id, 'audio')} style={styles.contactAction}>
                      <Ionicons name="call" size={24} color="#00BFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleStartCall(item.id, 'video')} style={styles.contactAction}>
                      <Ionicons name="videocam" size={24} color="#FFB6C1" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20 },
  title: { fontFamily: 'Poppins_700Bold', fontSize: 36, letterSpacing: 0.5 },
  subtitle: { fontSize: 13, marginTop: 2 },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#00BFFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0px 4px 10px rgba(0, 191, 255, 0.3)',
      }
    }),
  },
  listContent: { paddingBottom: 100 },
  callItem: { flexDirection: 'row', alignItems: 'center', padding: 15, paddingHorizontal: 20, gap: 15 },
  callDetails: { flex: 1 },
  callName: { fontSize: 18, fontWeight: '700' },
  callMeta: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 2 },
  callTime: { fontSize: 13, color: '#555', fontWeight: '500' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 120 },
  emptyIcon: { width: 90, height: 90, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  emptyText: { color: '#444', fontSize: 16, fontWeight: '600', marginBottom: 25 },
  startBtn: { paddingHorizontal: 30, paddingVertical: 14, borderRadius: 20, borderWidth: 2 },
  startBtnText: { fontWeight: '900', fontSize: 15 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.95)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#050505', borderTopLeftRadius: 35, borderTopRightRadius: 35, padding: 30, paddingBottom: 60, borderTopWidth: 1, borderColor: '#111' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  modalTitle: { fontSize: 24, fontWeight: '900', color: '#FFF', letterSpacing: -0.5 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111', borderRadius: 18, paddingHorizontal: 18, height: 55, gap: 12, marginBottom: 25, borderWidth: 1, borderColor: '#222' },
  searchInput: { flex: 1, color: '#FFF', fontSize: 17, fontWeight: '500' },
  modalSubtitle: { fontSize: 12, color: '#444', fontWeight: '900', letterSpacing: 2, marginBottom: 15 },
  contactItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, gap: 18 },
  contactName: { flex: 1, color: '#FFF', fontSize: 18, fontWeight: '600' },
  contactActions: { flexDirection: 'row', gap: 20 },
  contactAction: { width: 44, height: 44, borderRadius: 15, backgroundColor: '#111', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#222' }
});
