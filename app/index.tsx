import { Redirect } from 'expo-router';
import { useAuth } from '@/template';
import { View, ActivityIndicator } from 'react-native';

export default function RootScreen() {
  const { user, loading, initialized } = useAuth();

  if (!initialized || loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }

  if (user) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/welcome" />;
}
