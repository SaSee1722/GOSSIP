import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { Avatar } from '@/components/ui/Avatar';
import { theme } from '@/constants/theme';

import { useCall } from '@/contexts/CallContext';

export default function VideoCallScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { currentCall, endCall } = useCall();
  const router = useRouter();
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(true);

  if (!currentCall) return null;

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A1C23', '#0B0C0F']}
        style={styles.gradient}
      />

      <View style={[styles.remoteVideo, { paddingTop: insets.top }]}>
        <Avatar uri="https://i.pravatar.cc/150?img=1" size={120} />
        <Text style={styles.remoteName}>Sarah Mitchell</Text>
      </View>

      <View style={styles.localVideo}>
        <Avatar uri="https://i.pravatar.cc/150?img=47" size={80} />
      </View>

      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <TouchableOpacity style={styles.headerButton} onPress={endCall}>
          <Ionicons name="chevron-down" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.duration}>{formatDuration(duration)}</Text>
        <View style={styles.headerButton} />
      </View>

      <View style={[styles.controls, { paddingBottom: insets.bottom + 32 }]}>
        <TouchableOpacity
          style={[styles.controlButton, isMuted && styles.controlButtonActive]}
          onPress={() => setIsMuted(!isMuted)}
        >
          <Ionicons name={isMuted ? 'mic-off' : 'mic'} size={28} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.endButton, { backgroundColor: colors.error }]}
          onPress={endCall}
        >
          <Ionicons name="call" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, isVideoOff && styles.controlButtonActive]}
          onPress={() => setIsVideoOff(!isVideoOff)}
        >
          <Ionicons name={isVideoOff ? 'videocam-off' : 'videocam'} size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.flipButton}
        onPress={() => setIsFrontCamera(!isFrontCamera)}
      >
        <Ionicons name="camera-reverse" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  remoteVideo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remoteName: {
    ...theme.typography.h2,
    color: '#FFFFFF',
    marginTop: theme.spacing.md,
  },
  localVideo: {
    position: 'absolute',
    top: 100,
    right: theme.spacing.lg,
    width: 120,
    height: 160,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  duration: {
    ...theme.typography.body,
    color: '#FFFFFF',
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
  controlButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  endButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '135deg' }],
  },
  flipButton: {
    position: 'absolute',
    top: 280,
    right: theme.spacing.lg + 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
