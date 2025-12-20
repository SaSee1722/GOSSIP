import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertProvider, AuthProvider, AuthRouter } from '@/template';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ChatProvider } from '@/contexts/ChatContext';
import { StatusProvider } from '@/contexts/StatusContext';
import { CallProvider } from '@/contexts/CallContext';
import { ToastProvider } from '@/contexts/ToastContext';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View, Platform, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AlertProvider>
      <AuthProvider>
        <ThemeProvider>
          <ToastProvider>
            <ChatProvider>
              <StatusProvider>
                <CallProvider>
                  <SafeAreaProvider>
                    <View style={Platform.OS === 'web' ? styles.webContainer : styles.container}>
                      <AuthRouter
                        loginRoute="/welcome"
                        excludeRoutes={['/login', '/signup', '/welcome']}
                      >
                        <Stack screenOptions={{ headerShown: false }}>
                          <Stack.Screen name="index" options={{ headerShown: false }} />
                          <Stack.Screen name="welcome" options={{ headerShown: false }} />
                          <Stack.Screen name="login" options={{ headerShown: false }} />
                          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                          <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
                          <Stack.Screen name="call/audio" options={{ headerShown: false }} />
                          <Stack.Screen name="call/video" options={{ headerShown: false }} />
                          <Stack.Screen name="call/incoming" options={{ headerShown: false, presentation: 'modal' }} />
                        </Stack>
                      </AuthRouter>
                    </View>
                  </SafeAreaProvider>
                </CallProvider>
              </StatusProvider>
            </ChatProvider>
          </ToastProvider>
        </ThemeProvider>
      </AuthProvider>
    </AlertProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    backgroundColor: '#000',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
