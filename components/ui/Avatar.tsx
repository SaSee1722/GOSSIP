import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@/hooks/useTheme';
import { theme } from '@/constants/theme';

interface AvatarProps {
  uri?: string;
  size?: number;
  online?: boolean;
  style?: ViewStyle;
}

const DEFAULT_AVATAR = 'https://i.pravatar.cc/150';

export function Avatar({ uri, size = 48, online, style }: AvatarProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Image
        source={{ uri: uri || DEFAULT_AVATAR }}
        style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
        contentFit="cover"
      />
      {online && (
        <View
          style={[
            styles.onlineIndicator,
            {
              backgroundColor: colors.online,
              borderColor: colors.surface,
              width: size * 0.25,
              height: size * 0.25,
              borderRadius: size * 0.125,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    backgroundColor: '#DDD',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
  },
});
