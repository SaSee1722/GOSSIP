import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Alert,
    Platform,
    Modal
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { useTheme } from '@/hooks/useTheme';
import { useChat } from '@/hooks/useChat';
import { Avatar } from '@/components/ui/Avatar';
import { GradientText } from '@/components/ui/GradientText';
import { ChatService } from '@/services/ChatService';
import { LinearGradient } from 'expo-linear-gradient';

export default function GroupsScreen() {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const { chats } = useChat();
    const router = useRouter();

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [groupName, setGroupName] = useState('');
    const [loading, setLoading] = useState(false);

    // Only allow starting groups with people you have a direct chat with
    const contacts = chats
        .filter(c => c.type === 'direct')
        .map(c => ({
            id: c.userId,
            name: c.userName,
            avatar: c.userAvatar
        }));

    const toggleUser = (userId: string) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const handleCreateGroup = async () => {
        if (!groupName.trim()) {
            Alert.alert('Error', 'Enter group name');
            return;
        }
        if (selectedUsers.length < 1) {
            Alert.alert('Error', 'Pick at least one friend');
            return;
        }

        setLoading(true);
        const { data: roomId, error } = await ChatService.createGroupChat(groupName, selectedUsers);
        setLoading(true); // Keep loading until navigation

        if (error) {
            Alert.alert('Error', error);
            setLoading(false);
        } else if (roomId) {
            setShowCreateModal(false);
            setLoading(false);
            router.push(`/chat/${roomId}`);
        }
    };

    const groupChats = chats.filter(c => c.type === 'group');

    return (
        <View style={[styles.container, { backgroundColor: '#000', paddingTop: insets.top }]}>
            <View style={styles.header}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <GradientText text="Groups" style={styles.title} />
                        <Image
                            source={require('@/assets/images/groups_doodle.png')}
                            style={{ width: 65, height: 65 }}
                            contentFit="contain"
                        />
                    </View>
                    <Text style={styles.subtitle}>Communities you belong to.</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setShowCreateModal(true)}
                >
                    <LinearGradient
                        colors={['#00BFFF', '#FFB6C1']}
                        style={styles.createBtn}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Ionicons name="add" size={28} color="#FFF" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            {groupChats.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Ionicons name="people-outline" size={80} color="#222" />
                    <Text style={styles.emptyText}>No group gossips yet.</Text>
                    <TouchableOpacity style={styles.startGroupBtn} onPress={() => setShowCreateModal(true)}>
                        <Text style={styles.startGroupBtnText}>Create Your First Group</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={groupChats}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.groupItem}
                            onPress={() => router.push(`/chat/${item.id}`)}
                        >
                            <Avatar uri={item.userAvatar} size={60} />
                            <View style={styles.groupInfo}>
                                <View style={styles.groupHeader}>
                                    <Text style={styles.groupName}>{item.userName}</Text>
                                    <Text style={styles.groupTime}>
                                        {item.lastMessageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </Text>
                                </View>
                                <Text style={styles.groupLastMsg} numberOfLines={1}>{item.lastMessage}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color="#333" />
                        </TouchableOpacity>
                    )}
                />
            )}

            <Modal
                visible={showCreateModal}
                animationType="slide"
                transparent
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { height: '85%' }]}>
                        <View style={styles.modalHeader}>
                            <GradientText text="New Group" style={styles.modalTitle} />
                            <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                                <Ionicons name="close-circle" size={32} color="#444" />
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.groupInput}
                            placeholder="Group Name..."
                            placeholderTextColor="#444"
                            value={groupName}
                            onChangeText={setGroupName}
                        />

                        <Text style={styles.sectionLabel}>ADD FRIENDS</Text>

                        <FlatList
                            data={contacts}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                const isSelected = selectedUsers.includes(item.id);
                                return (
                                    <TouchableOpacity
                                        style={[styles.userItem, isSelected && { backgroundColor: 'rgba(0,191,255,0.05)' }]}
                                        onPress={() => toggleUser(item.id)}
                                    >
                                        <View style={styles.avatarWrapper}>
                                            <Avatar uri={item.avatar || ''} size={50} />
                                            {isSelected && (
                                                <View style={[styles.selectionBadge, { backgroundColor: '#FFB6C1' }]}>
                                                    <Ionicons name="checkmark" size={12} color="#000" />
                                                </View>
                                            )}
                                        </View>
                                        <Text style={[styles.userName, { color: isSelected ? '#00BFFF' : '#FFF' }]}>{item.name}</Text>
                                        <Ionicons
                                            name={isSelected ? "checkbox" : "square-outline"}
                                            size={24}
                                            color={isSelected ? '#FFB6C1' : '#333'}
                                        />
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        <TouchableOpacity
                            style={[styles.createSubmitBtn, { opacity: loading ? 0.7 : 1 }]}
                            onPress={handleCreateGroup}
                            disabled={loading}
                        >
                            <LinearGradient
                                colors={['#00BFFF', '#FFB6C1']}
                                style={styles.submitGradient}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.submitText}>Create Gossip Group</Text>}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: { fontFamily: 'Poppins_700Bold', fontSize: 32, letterSpacing: 0.5 },
    subtitle: { color: '#666', fontSize: 14, marginTop: 2 },
    createBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContent: { paddingHorizontal: 20, paddingBottom: 100 },
    groupItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#111',
        gap: 15,
    },
    groupInfo: { flex: 1 },
    groupHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    groupName: { color: '#FFF', fontSize: 17, fontWeight: '700' },
    groupTime: { color: '#444', fontSize: 12 },
    groupLastMsg: { color: '#888', fontSize: 14 },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 100 },
    emptyText: { color: '#444', fontSize: 18, fontWeight: '600', marginTop: 20 },
    startGroupBtn: { marginTop: 20, paddingHorizontal: 25, paddingVertical: 12, borderRadius: 25, borderWidth: 1, borderColor: '#333' },
    startGroupBtnText: { color: '#FFB6C1', fontWeight: '700' },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'flex-end' },
    modalContent: { backgroundColor: '#050505', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
    modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    modalTitle: { fontSize: 24, fontWeight: '800' },
    groupInput: { backgroundColor: '#111', color: '#FFF', borderRadius: 15, padding: 15, fontSize: 16, marginBottom: 20, borderWidth: 1, borderColor: '#222' },
    sectionLabel: { color: '#444', fontSize: 12, fontWeight: '800', letterSpacing: 1, marginBottom: 15 },
    userItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, gap: 15 },
    avatarWrapper: { position: 'relative' },
    selectionBadge: { position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#000' },
    userName: { flex: 1, fontSize: 16, fontWeight: '600' },
    createSubmitBtn: { marginTop: 20 },
    submitGradient: { height: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
    submitText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
});
