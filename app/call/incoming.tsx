import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { Avatar } from '@/components/ui/Avatar';
import { theme } from '@/constants/theme';

import { useCall } from '@/contexts/CallContext';

export default function IncomingCallScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { currentCall, acceptCall, rejectCall } = useCall();

  if (!currentCall) return null;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.gradient}
      />

      <View style={[styles.content, { paddingTop: insets.top + 60 }]}>
        <Text style={styles.callType}>Incoming {currentCall.type} Call</Text>

        <View style={styles.callerInfo}>
          <Avatar uri={`https://i.pravatar.cc/150?u=${currentCall.caller_id}`} size={120} />
          <Text style={styles.callerName}>User {currentCall.caller_id.substring(0, 5)}</Text>
          <Text style={styles.callerSubtitle}>GOSSIP {currentCall.type} Call</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: colors.error }]}
            onPress={rejectCall}
          >
            <Ionicons name="close" size={32} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: colors.success }]}
            onPress={acceptCall}
          >
            <Ionicons name="checkmark" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickAction}>
            <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />
            <Text style={styles.quickActionText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAction}>
            <Ionicons name="alarm-outline" size={24} color="#FFFFFF" />
            <Text style={styles.quickActionText}>Remind Me</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
  },
  callType: {
    ...theme.typography.caption,
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: 1,
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
  callerSubtitle: {
    ...theme.typography.body,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  actions: {
    flexDirection: 'row',
    gap: theme.spacing.xxl,
    marginBottom: theme.spacing.xxl,
  },
  actionButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.lg,
  },
  quickActions: {
    flexDirection: 'row',
    gap: theme.spacing.xxl,
    marginBottom: theme.spacing.xxl,
  },
  quickAction: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  quickActionText: {
    ...theme.typography.small,
    color: '#FFFFFF',
  },
});
