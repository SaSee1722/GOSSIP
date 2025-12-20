import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/hooks/useTheme';

const CATEGORIES = [
    { id: 'hi', label: '👋 Hi' },
    { id: 'haha', label: '😂 Haha' },
    { id: 'love', label: '❤️ Love' },
    { id: 'sad', label: '😢 Sad' },
    { id: 'angry', label: '😡 Angry' },
];

// Mock Stickers - In a real app, fetch these from a backend or Giphy/Tenor
const MOCK_STICKERS = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDN4eDJ3Z3BubHBoZHZ4eGdic2Y1eG94eG94eG94eG94eG94eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0HlCqV35hdEg/giphy.gif',
    'https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif',
    'https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif',
    'https://media.giphy.com/media/l0HlOaQcLJ2hHpYkg/giphy.gif',
    'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
    'https://media.giphy.com/media/l2R0aKwehYSg8YfTq/giphy.gif',
];

const EMOJIS = ['😂', '❤️', '😍', '🤣', '😊', '🙏', '🔥', '👍', '🥰', '😘', '😭', '😎', '🫡', '🤔', '👀', '✨', '🎉', '😁', '😉', '😅', '🙌', '💀', '🤡', '👋', '💪', '🤝', '🥳', '🥺', '🙄', '🤬'];

interface StickerPickerProps {
    onEmojiSelect: (emoji: string) => void;
    onStickerSelect: (url: string) => void;
    onClose: () => void;
    visible: boolean;
}

export function StickerPicker({ onEmojiSelect, onStickerSelect, onClose, visible }: StickerPickerProps) {
    const { colors } = useTheme();
    const [activeTab, setActiveTab] = useState<'emojis' | 'gifs' | 'stickers'>('stickers');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    if (!visible) return null;

    const renderTab = (tab: 'emojis' | 'gifs' | 'stickers', label: string) => (
        <TouchableOpacity
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
        >
            <Text style={[styles.tabText, activeTab === tab && { color: '#000', fontWeight: 'bold' }]}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <BlurView intensity={90} tint="light" style={styles.blurContainer}>
                {/* Helper Line to close/drag - optional */}
                <View style={styles.dragHandle} />

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#888" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search with text or emoji"
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity onPress={onClose} style={{ padding: 5 }}>
                        <Ionicons name="close" size={20} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Tabs */}
                <View style={styles.tabsContainer}>
                    {renderTab('emojis', 'Emojis')}
                    {renderTab('gifs', 'GIFs')}
                    {renderTab('stickers', 'Stickers')}
                </View>

                {/* Content */}
                <View style={styles.content}>
                    {activeTab === 'stickers' && (
                        <>
                            {/* Categories */}
                            <View style={styles.categories}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 10 }}>
                                    {CATEGORIES.map(cat => (
                                        <TouchableOpacity
                                            key={cat.id}
                                            style={[styles.catChip, selectedCategory === cat.id && { backgroundColor: '#e0e0e0' }]}
                                            onPress={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                                        >
                                            <Text>{cat.label}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>

                            {/* Sticker Grid */}
                            <FlatList
                                data={MOCK_STICKERS}
                                numColumns={3}
                                keyExtractor={(_, i) => i.toString()}
                                contentContainerStyle={{ padding: 5 }}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.stickerItem} onPress={() => onStickerSelect(item)}>
                                        <Image source={{ uri: item }} style={styles.stickerImage} resizeMode="contain" />
                                    </TouchableOpacity>
                                )}
                                ListHeaderComponent={
                                    <View style={styles.createButtonContainer}>
                                        <TouchableOpacity style={styles.createBtn}>
                                            <View style={styles.createIcon}>
                                                <Ionicons name="add" size={24} color="#FFF" />
                                            </View>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>Create</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            />
                        </>
                    )}

                    {activeTab === 'emojis' && (
                        <FlatList
                            data={EMOJIS}
                            numColumns={7}
                            keyExtractor={(item) => item}
                            contentContainerStyle={{ padding: 10 }}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.emojiItem} onPress={() => onEmojiSelect(item)}>
                                    <Text style={{ fontSize: 32 }}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}

                    {activeTab === 'gifs' && (
                        <View style={styles.placeholderContainer}>
                            <Ionicons name="film-outline" size={48} color="#CCC" />
                            <Text style={{ color: '#888', marginTop: 10 }}>Search for GIFs...</Text>
                        </View>
                    )}
                </View>
            </BlurView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    blurContainer: {
        flex: 1,
    },
    dragHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#DDD',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        margin: 10,
        borderRadius: 8,
        paddingHorizontal: 5,
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0', // Green border in screenshot looks specific to active state, using grey default
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
    },
    tabsContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        padding: 2,
        marginBottom: 10,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 6,
        borderRadius: 6,
    },
    activeTab: {
        backgroundColor: '#AAA', // Darker generic, or match the screenshot's pill
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    tabText: {
        fontSize: 13,
        color: '#666',
    },
    content: {
        flex: 1,
    },
    categories: {
        height: 40,
        marginBottom: 5,
    },
    catChip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#EEE',
        justifyContent: 'center',
    },
    stickerItem: {
        flex: 1 / 3,
        aspectRatio: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stickerImage: {
        width: '100%',
        height: '100%',
    },
    emojiItem: {
        flex: 1 / 7,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createButtonContainer: {
        width: '33%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    createIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#000', // Black as in screenshot
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
