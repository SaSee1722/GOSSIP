import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { theme, ColorScheme } from '@/constants/theme';

interface ThemeContextType {
  colorScheme: ColorScheme;
  colors: typeof theme.colors.light;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(systemColorScheme || 'light');
  
  useEffect(() => {
    if (systemColorScheme) {
      setColorScheme(systemColorScheme);
    }
  }, [systemColorScheme]);
  
  const toggleTheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const colors = theme.colors[colorScheme];
  const isDark = colorScheme === 'dark';
  
  return (
    <ThemeContext.Provider value={{ colorScheme, colors, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
