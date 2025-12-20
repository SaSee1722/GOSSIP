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
import { RTCView } from '@/utils/webrtc';

export default function AudioCallScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const {
    currentCall,
    endCall,
    toggleMute,
    isMuted,
    remoteStream
  } = useCall();
  const router = useRouter();
  const [duration, setDuration] = useState(0);
  const [isSpeaker, setIsSpeaker] = useState(false);

  useEffect(() => {
    if (!currentCall) return;
    const interval = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentCall]);

  if (!currentCall) return null;

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.gradient}
      />

      <View style={[styles.content, { paddingTop: insets.top + 40 }]}>
        <TouchableOpacity style={styles.backButton} onPress={endCall}>
          <Ionicons name="chevron-down" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.callerInfo}>
          <Avatar uri={currentCall.profiles?.avatar_url} size={120} />
          <Text style={styles.callerName}>{currentCall.profiles?.full_name || 'Gossiper'}</Text>
          <Text style={styles.callStatus}>
            {remoteStream ? formatDuration(duration) : 'Connecting...'}
          </Text>
          {/* Audio playback for web */}
          {remoteStream && (
            <RTCView
              streamURL={(remoteStream as any).toURL()}
              style={{ width: 0, height: 0, opacity: 0 }}
            />
          )}
        </View>

        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.controlButton, isSpeaker && styles.controlButtonActive]}
            onPress={() => setIsSpeaker(!isSpeaker)}
          >
            <Ionicons name="volume-high" size={28} color="#FFFFFF" />
            <Text style={styles.controlLabel}>Speaker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.controlButton, isMuted && styles.controlButtonActive]}
            onPress={toggleMute}
          >
            <Ionicons name={isMuted ? 'mic-off' : 'mic'} size={28} color="#FFFFFF" />
            <Text style={styles.controlLabel}>Mute</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="keypad" size={28} color="#FFFFFF" />
            <Text style={styles.controlLabel}>Keypad</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.endButton, { backgroundColor: colors.error }]}
          onPress={endCall}
        >
          <Ionicons name="call" size={32} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: theme.spacing.xs,
  },
  callerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  callerName: {
    ...theme.typography.h1,
    color: '#FFFFFF',
  },
  callStatus: {
    ...theme.typography.body,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.xxl,
  },
  controlButton: {
    alignItems: 'center',
    gap: theme.spacing.xs,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  controlButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  controlLabel: {
    ...theme.typography.small,
    color: '#FFFFFF',
  },
  endButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: theme.spacing.xxl,
    transform: [{ rotate: '135deg' }],
  },
});
