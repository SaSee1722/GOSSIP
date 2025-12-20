import { Platform } from 'react-native';

// Design tokens for GOSSIP app
export const theme = {
  colors: {
    light: {
      // Primary palette (Sky Blue)
      primary: '#00BFFF',
      primaryLight: '#87CEEB',
      primaryDark: '#009ACD',
      secondary: '#FFB6C1', // Baby Pink

      // Backgrounds (Black themed)
      background: '#000000',
      backgroundSecondary: '#050505',
      surface: '#121212',
      surfaceGlass: 'rgba(18, 18, 18, 0.9)',

      // Text
      text: '#FFFFFF',
      textSecondary: '#B2BEC3',
      textTertiary: '#636E72',
      textInverse: '#000000',

      // Messaging
      messageSent: '#00BFFF',
      messageReceived: '#1A1A1A',
      messageText: '#FFFFFF',
      messageTextReceived: '#FFFFFF',

      // Status
      success: '#00B894',
      warning: '#FDCB6E',
      error: '#FF7675',
      accent: '#FFB6C1', // Baby Pink
      info: '#FFB6C1',   // Baby Pink
      online: '#00B894',

      // UI Elements
      border: 'rgba(255, 255, 255, 0.1)',
      divider: 'rgba(255, 255, 255, 0.08)',

      // Gradients
      gradientStart: '#00BFFF', // Sky Blue
      gradientEnd: '#FFB6C1',   // Baby Pink
    },
    dark: {
      // Primary palette (Sky Blue)
      primary: '#00BFFF',
      primaryLight: '#87CEEB',
      primaryDark: '#009ACD',
      secondary: '#FFB6C1', // Baby Pink

      // Backgrounds
      background: '#000000',
      backgroundSecondary: '#050505',
      surface: '#121212',
      surfaceGlass: 'rgba(18, 18, 18, 0.9)',

      // Text
      text: '#FFFFFF',
      textSecondary: '#A0A0A0',
      textTertiary: '#606060',
      textInverse: '#121212',

      // Messaging
      messageSent: '#00BFFF',
      messageReceived: '#1A1A1A',
      messageText: '#FFFFFF',
      messageTextReceived: '#FFFFFF',

      // Status
      success: '#00B894',
      warning: '#FDCB6E',
      error: '#FFB6C1', // Baby Pink for soft errors
      accent: '#FFB6C1', // Baby Pink
      info: '#FFB6C1',   // Baby Pink
      online: '#00B894',

      // UI Elements
      border: 'rgba(255, 255, 255, 0.15)',
      divider: 'rgba(255, 255, 255, 0.1)',

      // Gradients
      gradientStart: '#00BFFF', // Sky Blue
      gradientEnd: '#FFB6C1',   // Baby Pink
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },

  typography: {
    h1: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    bodyBold: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 24,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    small: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
    },
  },

  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },

  animations: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
};

export type Theme = typeof theme;
export type ColorScheme = 'light' | 'dark';
