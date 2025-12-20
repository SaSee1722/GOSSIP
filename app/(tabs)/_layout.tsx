import React from 'react';
import { Tabs } from 'expo-router';
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { GradientIcon } from '@/components/ui/GradientIcon';
import { useTheme } from '@/hooks/useTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useChat } from '@/hooks/useChat';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Chat' }}
      />
      <Tabs.Screen
        name="groups"
        options={{ title: 'Groups' }}
      />
      <Tabs.Screen
        name="calls"
        options={{ title: 'Calls' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile' }}
      />
    </Tabs>
  );
}

function FloatingTabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { chats, pendingRequests } = useChat();

  return (
    <View style={[styles.tabBarContainer, { bottom: insets.bottom + 10 }]}>
      <BlurView intensity={80} tint="dark" style={styles.tabBar}>
        {state.routes.filter((r: any) => descriptors[r.key].options.href !== null).map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const iconName = () => {
            switch (route.name) {
              case 'index': return isFocused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
              case 'groups': return isFocused ? 'people' : 'people-outline';
              case 'calls': return isFocused ? 'call' : 'call-outline';
              case 'profile': return isFocused ? 'person' : 'person-outline';
              default: return 'chatbubble';
            }
          }

          const count = React.useMemo(() => {
            if (route.name === 'index') {
              return chats.reduce((acc, chat) => acc + (chat.unreadCount || 0), 0);
            }
            if (route.name === 'groups') {
              return 0; // Groups doesn't usually have a badge for pending requests unless specified
            }
            return 0;
          }, [route.name, chats, pendingRequests]);

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              <View>
                {isFocused ? (
                  <GradientIcon
                    name={iconName()}
                    size={26}
                    colors={['#00BFFF', '#FFB6C1']}
                  />
                ) : (
                  <Ionicons
                    name={iconName() as any}
                    size={26}
                    color={colors.textSecondary}
                  />
                )}
                {count > 0 && (
                  <View style={[styles.badge, { backgroundColor: '#FFB6C1' }]}>
                    <Text style={styles.badgeText}>{count}</Text>
                  </View>
                ) as any}
              </View>
              {isFocused && <View style={[styles.dot, { backgroundColor: colors.primary }]} />}
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 32,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
      web: {
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
      }
    }),
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(26, 26, 26, 0.7)',
  },
  tabItem: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 4,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: '#000',
  },
  badgeText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
