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
    Platform
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

    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [groupName, setGroupName] = useState('');
    const [loading, setLoading] = useState(false);

    const contacts = Array.from(new Set(chats.map(c => c.userId))).map(id => {
        const chat = chats.find(c => c.userId === id);
        return {
            id,
            name: chat?.userName || 'User',
            avatar: chat?.userAvatar
        };
    });

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
        setLoading(false);

        if (error) {
            Alert.alert('Error', error);
        } else if (roomId) {
            router.push(`/chat/${roomId}`);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: '#000', paddingTop: insets.top }]}>
            <View style={styles.header}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <GradientText text="Create Group" style={styles.title} />
                        <Image
                            source={require('@/assets/images/groups_doodle.png')}
                            style={{ width: 65, height: 65 }}
                            contentFit="contain"
                        />
                    </View>
                    <Text style={styles.subtitle}>Build your community.</Text>
                </View>
                <TouchableOpacity
                    onPress={handleCreateGroup}
                    disabled={loading}
                >
                    <LinearGradient
                        colors={['#00BFFF', '#FFB6C1']}
                        style={styles.createBtn}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        {loading ? <ActivityIndicator color="#FFF" size="small" /> : <Ionicons name="arrow-forward" size={24} color="#FFF" />}
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={styles.inputCard}>
                <TextInput
                    style={[styles.groupInput, { color: '#FFF' }]}
                    placeholder="New Group Name..."
                    placeholderTextColor="#444"
                    value={groupName}
                    onChangeText={setGroupName}
                />
            </View>

            <View style={styles.listHeader}>
                <Text style={[styles.sectionTitle, { color: '#FFB6C1' }]}>PARTICIPANTS {selectedUsers.length > 0 && `(${selectedUsers.length})`}</Text>
            </View>

            <FlatList
                data={contacts}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => {
                    const isSelected = selectedUsers.includes(item.id);
                    return (
                        <TouchableOpacity
                            style={[styles.userItem, isSelected && { backgroundColor: 'rgba(0,191,255,0.05)' }]}
                            onPress={() => toggleUser(item.id)}
                        >
                            <View style={styles.avatarWrapper}>
                                <Avatar uri={item.avatar || ''} size={55} />
                                {isSelected && (
                                    <View style={[styles.selectionBadge, { backgroundColor: '#FFB6C1' }]}>
                                        <Ionicons name="checkmark" size={12} color="#000" />
                                    </View>
                                )}
                            </View>
                            <Text style={[styles.userName, { color: isSelected ? '#00BFFF' : '#FFF' }]}>{item.name}</Text>
                            <Ionicons
                                name={isSelected ? "add-circle" : "add-circle-outline"}
                                size={28}
                                color={isSelected ? '#FFB6C1' : '#333'}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
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
        width: 54,
        height: 54,
        borderRadius: 27,
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
    inputCard: {
        marginHorizontal: 20,
        backgroundColor: '#111',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#222',
    },
    groupInput: {
        fontSize: 18,
        fontWeight: '600',
        ...Platform.select({
            web: {
                // @ts-ignore
                outlineStyle: 'none',
            }
        })
    },
    listHeader: { paddingHorizontal: 20, marginBottom: 15 },
    sectionTitle: { fontSize: 13, fontWeight: '800', letterSpacing: 1 },
    listContent: { paddingBottom: 120 },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        gap: 15,
    },
    avatarWrapper: { position: 'relative' },
    selectionBadge: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    userName: { flex: 1, fontSize: 17, fontWeight: '700' },
});
