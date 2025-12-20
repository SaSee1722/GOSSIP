import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  ActivityIndicator,
  Alert,
  Modal,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { useAuth, useAlert } from '@/template';
import { Avatar } from '@/components/ui/Avatar';
import { theme } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { ProfileService } from '@/services/ProfileService';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { GradientText } from '@/components/ui/GradientText';
import { BlurView } from 'expo-blur';
import { useChat } from '@/hooks/useChat';
import { ChatService } from '@/services/ChatService';

// Basic Localization Mapping
const translations: Record<string, Record<string, string>> = {
  'English': {
    profile: 'Profile',
    personalInfo: 'PERSONAL INFO',
    settings: 'SETTINGS',
    notifications: 'Notifications',
    language: 'Language',
    logout: 'Logout',
    fullName: 'Full Name',
    username: 'Username',
    age: 'Age',
    phone: 'Phone',
    bio: 'Bio',
    edit: 'Edit',
    save: 'Save Changes',
    cancel: 'Cancel',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other'
  },
  'Tamil': {
    profile: 'சுயவிவரம்',
    personalInfo: 'தனிப்பட்ட தகவல்',
    settings: 'அமைப்புகள்',
    notifications: 'அறிவிப்புகள்',
    language: 'மொழி',
    logout: 'வெளியேறு',
    fullName: 'முழு பெயர்',
    username: 'பயனர்பெயர்',
    age: 'வயது',
    phone: 'தொலைபேசி',
    bio: 'சுயசரிதை',
    edit: 'தொகு',
    save: 'மாற்றங்களை சேமி',
    cancel: 'ரத்துசெய்',
    gender: 'பாலினம்',
    male: 'ஆண்',
    female: 'பெண்',
    other: 'மற்றவை'
  }
};

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { colors, toggleTheme, isDark } = useTheme();
  const { user, logout, refreshUser } = useAuth();
  const router = useRouter();
  const { showAlert } = useAlert();

  const [isEditing, setIsEditing] = useState(false);
  const [language, setLanguage] = useState('English');
  const t = translations[language] || translations['English'];

  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    full_name: user?.full_name || '',
    age: user?.age?.toString() || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    avatar_url: user?.avatar_url || '',
    gender: user?.gender || ''
  });

  const [loading, setLoading] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);
  const { blockUser, unblockUser, refreshChats } = useChat();

  const fetchBlockedUsers = async () => {
    const { data, error } = await ChatService.getBlockedUsers();
    if (!error && data) {
      setBlockedUsers(data);
    }
  };

  useEffect(() => {
    if (showBlockedModal) {
      fetchBlockedUsers();
    }
  }, [showBlockedModal]);

  const handleUnblock = async (userId: string) => {
    try {
      await unblockUser(userId);
      await fetchBlockedUsers();
      Alert.alert('Success', 'User unblocked');
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  useEffect(() => {
    if (user) {
      setProfileData({
        username: user.username || '',
        full_name: user.full_name || '',
        age: user.age?.toString() || '',
        phone: user.phone || '',
        bio: user.bio || '',
        avatar_url: user.avatar_url || '',
        gender: user.gender || ''
      });
    }
  }, [user]);

  const handleLogout = async () => {
    Alert.alert(t.logout, 'Are you sure?', [
      { text: t.cancel, style: 'cancel' },
      {
        text: t.logout,
        style: 'destructive',
        onPress: async () => {
          await logout();
        }
      }
    ]);
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled && result.assets[0].uri) {
      setLoading(true);
      try {
        const { data: publicUrl, error: uploadError } = await ProfileService.uploadAvatar(user!.id, result.assets[0].uri);

        if (uploadError) {
          showAlert('Upload Error', uploadError);
          setLoading(false);
          return;
        }

        if (publicUrl) {
          setProfileData(prev => ({ ...prev, avatar_url: publicUrl }));
          if (!isEditing) {
            await ProfileService.updateProfile(user!.id, { avatar_url: publicUrl });
            await refreshUser();
          }
        }
      } catch (err: any) {
        showAlert('Error', err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { error } = await ProfileService.updateProfile(user.id, {
        ...profileData,
        age: parseInt(profileData.age) || undefined
      });

      if (error) {
        setLoading(false);
        showAlert('Error', error);
      } else {
        await refreshUser();
        setLoading(false);
        setIsEditing(false);
        showAlert('Success', 'Profile updated successfully');
      }
    } catch (err: any) {
      setLoading(false);
      showAlert('Error', err.message || 'Failed to update profile');
    }
  };

  const languages = ['English', 'Spanish', 'French', 'German', 'Hindi', 'Tamil'];

  // Dynamic Avatar Glow Colors
  const glowColors: [string, string] = profileData.gender === 'Male'
    ? ['#00BFFF', 'rgba(0, 191, 255, 0)']
    : profileData.gender === 'Female'
      ? ['#FFB6C1', 'rgba(255, 182, 193, 0)']
      : ['#FFD700', 'rgba(255, 215, 0, 0)'];

  return (
    <View style={[styles.container, { backgroundColor: '#000' }]}>
      {/* Background Gradient Mesh - Extended for better feel */}
      <LinearGradient
        colors={
          profileData.gender === 'Male'
            ? ['rgba(0,191,255,0.15)', 'transparent']
            : profileData.gender === 'Female'
              ? ['rgba(255,182,193,0.15)', 'transparent']
              : ['rgba(255,215,0,0.15)', 'transparent']
        }
        style={styles.backgroundMesh}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.6 }}
      />

      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 20 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          {/* Glowing Avatar Container */}
          <TouchableOpacity onPress={handlePickImage} activeOpacity={0.9}>
            <View style={styles.avatarGlowContainer}>
              <LinearGradient
                colors={glowColors}
                style={styles.avatarGlow}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
              <View style={styles.avatarWrapper}>
                <Avatar
                  uri={profileData.avatar_url || `https://i.pravatar.cc/150?u=${user?.id}`}
                  size={120}
                />
              </View>
              <View style={[styles.editBadge, { backgroundColor: '#00BFFF' }]}>
                <Ionicons name="camera" size={16} color="#FFF" />
              </View>
            </View>
          </TouchableOpacity>

          <GradientText
            text={profileData.full_name || profileData.username || 'User'}
            style={[styles.profileName, { marginTop: 20 }]}
          />
          <Text style={[styles.profileEmail, { color: 'rgba(255,255,255,0.6)' }]}>
            {user?.email}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <GradientText text={t.personalInfo} style={styles.sectionTitleGradient} />
              <Image
                source={require('@/assets/images/profile_doodle.png')}
                style={{ width: 45, height: 45 }}
                contentFit="contain"
              />
            </View>
            {!isEditing && (
              <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.glassButtonSmall}>
                <Text style={{ color: '#00BFFF', fontWeight: 'bold', fontSize: 13 }}>{t.edit}</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Glassmorphic Card */}
          <BlurView intensity={25} tint="dark" style={styles.glassCard}>
            {isEditing ? (
              <View style={styles.editForm}>
                <InputField label={t.fullName} value={profileData.full_name} onChange={(val: string) => setProfileData(p => ({ ...p, full_name: val }))} />
                <InputField label={t.username} value={profileData.username} onChange={(val: string) => setProfileData(p => ({ ...p, username: val }))} />
                <View style={styles.row}>
                  <View style={{ flex: 1 }}>
                    <InputField label={t.age} value={profileData.age} onChange={(val: string) => setProfileData(p => ({ ...p, age: val }))} keyboard="numeric" />
                  </View>
                  <View style={{ width: 20 }} />
                  <View style={{ flex: 2 }}>
                    <InputField label={t.phone} value={profileData.phone} onChange={(val: string) => setProfileData(p => ({ ...p, phone: val }))} keyboard="phone-pad" />
                  </View>
                </View>
                <InputField label={t.bio} value={profileData.bio} onChange={(val: string) => setProfileData(p => ({ ...p, bio: val }))} multiline />

                <View style={styles.genderSection}>
                  <Text style={styles.inputLabel}>{t.gender}</Text>
                  <View style={styles.genderContainer}>
                    {['Male', 'Female', 'Other'].map((g) => (
                      <TouchableOpacity
                        key={g}
                        style={[
                          styles.genderBtn,
                          profileData.gender === g && (g === 'Male' ? styles.maleActive : g === 'Female' ? styles.femaleActive : styles.otherActive)
                        ]}
                        onPress={() => setProfileData(p => ({ ...p, gender: g }))}
                      >
                        <Text style={[styles.genderBtnText, profileData.gender === g && { color: '#FFF' }]}>
                          {translations[language][g.toLowerCase()] || g}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <View style={styles.editActions}>
                  <TouchableOpacity onPress={() => setIsEditing(false)} style={styles.cancelBtn}>
                    <Text style={{ color: '#888' }}>{t.cancel}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleUpdateProfile} style={styles.saveBtnGlass}>
                    <LinearGradient
                      colors={['#00BFFF', '#009ACD']}
                      style={styles.saveBtnGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      {loading ? <ActivityIndicator color="#FFF" /> : <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{t.save}</Text>}
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.infoList}>
                <InfoItem icon="person-outline" label={t.fullName} value={profileData.full_name || 'Not set'} color="#00BFFF" />
                <InfoItem icon="at-outline" label={t.username} value={profileData.username || 'Not set'} color="#00BFFF" />
                <InfoItem icon="calendar-outline" label={t.age} value={profileData.age || 'Not set'} color="#00BFFF" />
                <InfoItem icon="call-outline" label={t.phone} value={profileData.phone || 'Not set'} color="#00BFFF" />
                <InfoItem icon="transgender-outline" label={t.gender} value={profileData.gender || 'Not set'} color="#00BFFF" />
                <InfoItem icon="information-circle-outline" label={t.bio} value={profileData.bio || 'New to GOSSIP!'} color="#00BFFF" />
              </View>
            )}
          </BlurView>
        </View>

        <View style={styles.section}>
          <GradientText text={t.settings} style={[styles.sectionTitleGradient, { marginBottom: 15 }]} />
          <BlurView intensity={25} tint="dark" style={styles.glassCard}>
            <SettingItem
              icon="notifications-outline"
              label={t.notifications}
              value={<Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} trackColor={{ false: '#333', true: '#00BFFF' }} thumbColor={Platform.OS === 'ios' ? '#FFF' : notificationsEnabled ? '#FFF' : '#f4f3f4'} />}
            />
            <TouchableOpacity onPress={() => setShowLanguageModal(true)}>
              <SettingItem
                icon="globe-outline"
                label={t.language}
                value={<View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}><Text style={{ color: '#FFB6C1', fontWeight: '700' }}>{language}</Text><Ionicons name="chevron-forward" color="#666" size={16} /></View>}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowBlockedModal(true)}>
              <SettingItem
                icon="hand-right-outline"
                label="Blocked Users"
                value={<Ionicons name="chevron-forward" color="#666" size={16} />}
              />
            </TouchableOpacity>
          </BlurView>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <BlurView intensity={10} tint="light" style={styles.logoutBlur}>
            <Ionicons name="log-out-outline" size={20} color="#FFB6C1" />
            <Text style={styles.logoutText}>{t.logout}</Text>
          </BlurView>
        </TouchableOpacity>

        <Text style={styles.version}>GOSSIP v1.2.0 • {language}</Text>
      </ScrollView>

      <Modal visible={showLanguageModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <BlurView intensity={50} tint="dark" style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <ScrollView style={{ maxHeight: 300 }} indicatorStyle="white">
              {languages.map(lang => (
                <TouchableOpacity
                  key={lang}
                  style={styles.langItem}
                  onPress={() => { setLanguage(lang); setShowLanguageModal(false); }}
                >
                  <Text style={[styles.langText, language === lang && { color: '#00BFFF', fontWeight: 'bold' }]}>{lang}</Text>
                  {language === lang && <Ionicons name="checkmark-circle" size={20} color="#00BFFF" />}
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setShowLanguageModal(false)}>
              <Text style={{ color: '#FFB6C1', fontWeight: 'bold', fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
      </Modal>

      <Modal visible={showBlockedModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <BlurView intensity={80} tint="dark" style={[styles.modalContent, { height: '80%' }]}>
            <View style={styles.modalHeader}>
              <GradientText text="Blocked Users" style={styles.modalTitle} />
              <TouchableOpacity onPress={() => setShowBlockedModal(false)}>
                <Ionicons name="close-circle" size={32} color="#444" />
              </TouchableOpacity>
            </View>

            {blockedUsers.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Ionicons name="hand-right-outline" size={60} color="#333" />
                <Text style={{ color: '#666', marginTop: 15 }}>No one is blocked.</Text>
              </View>
            ) : (
              <ScrollView style={{ flex: 1 }}>
                {blockedUsers.map(u => (
                  <View key={u.id} style={styles.blockedItem}>
                    <Avatar uri={u.avatar_url} size={45} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.blockedName}>{u.full_name || u.username}</Text>
                      <Text style={styles.blockedUser}>@{u.username}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.unblockBtn}
                      onPress={() => handleUnblock(u.id)}
                    >
                      <Text style={styles.unblockText}>UNBLOCK</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            )}

            <TouchableOpacity style={styles.closeBtn} onPress={() => setShowBlockedModal(false)}>
              <Text style={{ color: '#FFB6C1', fontWeight: 'bold', fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
      </Modal>
    </View>
  );
}

function InputField({ label, value, onChange, keyboard = 'default', multiline = false }: { label: string, value: string, onChange: (v: string) => void, keyboard?: any, multiline?: boolean }) {
  return (
    <View style={styles.inputField}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && { height: 80, textAlignVertical: 'top' }]}
        value={value}
        onChangeText={onChange}
        placeholder={label}
        placeholderTextColor="#555"
        keyboardType={keyboard}
        multiline={multiline}
      />
    </View>
  );
}

function InfoItem({ icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
  return (
    <View style={styles.infoItem}>
      <View style={[styles.infoIcon, { backgroundColor: 'rgba(0, 191, 255, 0.1)' }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

function SettingItem({ icon, label, value }: { icon: any, label: string, value: React.ReactNode }) {
  return (
    <View style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <View style={[styles.infoIcon, { backgroundColor: 'rgba(255,255,255,0.05)', width: 36, height: 36, borderRadius: 10 }]}>
          <Ionicons name={icon} size={18} color="#CCC" />
        </View>
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      {value}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundMesh: { position: 'absolute', top: 0, left: 0, right: 0, height: 400 },
  content: { padding: 20, paddingBottom: 120 },
  profileHeader: { alignItems: 'center', marginBottom: 40 },
  avatarGlowContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
  },
  avatarGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 70,
    opacity: 0.6,
  },
  avatarWrapper: {
    padding: 4,
    backgroundColor: '#000',
    borderRadius: 70,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#000'
  },
  profileName: { fontFamily: 'Poppins_700Bold', fontSize: 34, letterSpacing: 0.5 },
  profileEmail: { fontSize: 14, marginTop: 8, paddingHorizontal: 12 },
  section: { marginBottom: 30 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, paddingHorizontal: 5 },
  sectionTitleGradient: { fontSize: 15, fontWeight: '800', letterSpacing: 1.5 },
  glassCard: {
    borderRadius: 30,
    padding: 25,
    gap: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(30,30,30,0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)'
  },
  glassButtonSmall: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(0,191,255,0.1)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,191,255,0.2)'
  },
  infoList: { gap: 20 },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  infoIcon: { width: 42, height: 42, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  infoLabel: { fontSize: 11, color: '#888', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 2 },
  infoValue: { fontSize: 17, color: '#FFF', fontWeight: '500' },
  editForm: { gap: 16 },
  inputField: { gap: 8 },
  inputLabel: { fontSize: 12, color: '#888', fontWeight: 'bold', marginLeft: 4 },
  input: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
    padding: 16,
    color: '#FFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    ...Platform.select({
      web: {
        // @ts-ignore
        outlineStyle: 'none',
      }
    })
  } as any,
  row: { flexDirection: 'row' },
  editActions: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 15, marginTop: 10 },
  cancelBtn: { padding: 12 },
  saveBtnGlass: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#00BFFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0px 4px 8px rgba(0, 191, 255, 0.3)',
      }
    })
  },
  saveBtnGradient: { paddingHorizontal: 25, paddingVertical: 14 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
  settingLeft: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  settingLabel: { fontSize: 16, color: '#EEE', fontWeight: '500' },
  logoutBtn: { marginHorizontal: 20, borderRadius: 25, overflow: 'hidden', marginTop: 10 },
  logoutBlur: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 18,
    backgroundColor: 'rgba(255,182,193,0.05)'
  },
  logoutText: { color: '#FFB6C1', fontSize: 16, fontWeight: '800' },
  version: { textAlign: 'center', color: '#444', marginTop: 30, fontSize: 11, fontWeight: '700' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'center', padding: 25 },
  modalContent: {
    borderRadius: 35,
    padding: 30,
    gap: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(30,30,30,0.8)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#FFF', textAlign: 'center' },
  langItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  langText: { fontSize: 17, color: '#CCC' },
  closeBtn: { marginTop: 10, alignItems: 'center', padding: 10 },
  genderSection: { marginTop: 10, gap: 10 },
  genderContainer: { flexDirection: 'row', gap: 12 },
  genderBtn: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  genderBtnText: { color: '#888', fontWeight: 'bold' },
  maleActive: { backgroundColor: '#00BFFF', borderColor: '#00BFFF' },
  femaleActive: { backgroundColor: '#FFB6C1', borderColor: '#FFB6C1' },
  otherActive: { backgroundColor: '#444', borderColor: '#666' },
  blockedItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,255,255,0.05)', gap: 15 },
  blockedName: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  blockedUser: { color: '#666', fontSize: 12 },
  unblockBtn: { backgroundColor: 'rgba(255,182,193,0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(255,182,193,0.2)' },
  unblockText: { color: '#FFB6C1', fontSize: 11, fontWeight: '900' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 50 },
});
