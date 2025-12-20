import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useAuth, useAlert } from '@/template';
import { useTheme } from '@/hooks/useTheme';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors } = useTheme();
  const { user, signUpWithPassword, signInWithPassword, operationLoading } = useAuth();
  const { showAlert } = useAlert();

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user]);

  const [isLogin, setIsLogin] = useState(true);
  const [identifier, setIdentifier] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (!identifier || !password || !username) {
      showAlert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Error', 'Passwords do not match');
      return;
    }

    const { error, needsEmailConfirmation } = await signUpWithPassword(identifier, password, {
      username,
      full_name: username
    });

    if (error) {
      showAlert('Error', error);
      return;
    }

    if (needsEmailConfirmation) {
      showAlert('Success', 'Check your email to confirm your account');
    }
  };

  const handleLogin = async () => {
    if (!identifier || !password) {
      showAlert('Error', 'Enter your identifier and password');
      return;
    }

    const { error } = await signInWithPassword(identifier, password);
    if (error) {
      showAlert('Error', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#000' }]}>
      <StatusBar barStyle="light-content" />

      {/* Background blobs for depth */}
      <View style={[styles.blob, { top: -50, right: -50, backgroundColor: colors.primary, opacity: 0.15 }]} />
      <View style={[styles.blob, { bottom: height * 0.2, left: -100, backgroundColor: colors.info, opacity: 0.1 }]} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 20 }]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={styles.branding}>
              <Text style={[styles.brandTitle, { color: colors.text }]}>
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </Text>
              <Text style={[styles.brandSubtitle, { color: colors.textSecondary }]}>
                {isLogin ? 'Sign in to continue chatting' : 'Join the conversation today'}
              </Text>
            </View>
          </View>

          <BlurView intensity={80} style={styles.formCard} tint="dark">
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[styles.toggleBtn, isLogin && styles.toggleBtnActive]}
                onPress={() => setIsLogin(true)}
              >
                <Text style={[styles.toggleText, isLogin ? { color: '#000' } : { color: '#fff' }]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleBtn, !isLogin && styles.toggleBtnActive]}
                onPress={() => setIsLogin(false)}
              >
                <Text style={[styles.toggleText, !isLogin ? { color: '#000' } : { color: '#fff' }]}>Signup</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputStack}>
              <CustomInput
                icon="person-outline"
                placeholder="Email or Mobile"
                value={identifier}
                onChangeText={setIdentifier}
                focused={focusedInput === 'id'}
                onFocus={() => setFocusedInput('id')}
                onBlur={() => setFocusedInput(null)}
                keyboardType="email-address"
              />

              {!isLogin && (
                <CustomInput
                  icon="at-outline"
                  placeholder="Username"
                  value={username}
                  onChangeText={setUsername}
                  focused={focusedInput === 'user'}
                  onFocus={() => setFocusedInput('user')}
                  onBlur={() => setFocusedInput(null)}
                />
              )}

              <CustomInput
                icon="lock-closed-outline"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                focused={focusedInput === 'pass'}
                onFocus={() => setFocusedInput('pass')}
                onBlur={() => setFocusedInput(null)}
                rightIcon={
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color={colors.textSecondary} />
                  </TouchableOpacity>
                }
              />

              {!isLogin && (
                <CustomInput
                  icon="shield-outline"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showPassword}
                  focused={focusedInput === 'confirm'}
                  onFocus={() => setFocusedInput('confirm')}
                  onBlur={() => setFocusedInput(null)}
                />
              )}
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={isLogin ? handleLogin : handleSignUp}
              style={styles.submitWrapper}
            >
              <LinearGradient
                colors={[colors.primary, colors.info]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.submitBtn}
              >
                <Text style={styles.submitText}>
                  {operationLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {isLogin && (
              <TouchableOpacity style={styles.forgotPass}>
                <Text style={[styles.smallLink, { color: colors.primary }]}>Forgot Password?</Text>
              </TouchableOpacity>
            )}
          </BlurView>

          <Text style={[styles.footerText, { color: colors.textTertiary }]}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Text
              style={{ color: colors.primary, fontWeight: '700' }}
              onPress={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

function CustomInput({ icon, rightIcon, focused, ...props }: any) {
  const { colors } = useTheme();
  return (
    <View style={[
      styles.inputContainer,
      { borderColor: focused ? colors.primary : 'rgba(255,255,255,0.1)' }
    ]}>
      <Ionicons name={icon} size={20} color={focused ? colors.primary : colors.textSecondary} style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.4)"
        autoCapitalize="none"
        {...props}
      />
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    flexGrow: 1,
  },
  blob: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    filter: 'blur(100px)', // Note: standard RN doesn't support blur on View, but some platforms do via plugins. Using opacity as fallback.
  },
  header: {
    marginBottom: 32,
  },
  branding: {
    marginTop: 20,
  },
  brandTitle: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
  },
  formCard: {
    padding: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    padding: 5,
    marginBottom: 24,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  toggleBtnActive: {
    backgroundColor: '#fff',
  },
  toggleText: {
    fontWeight: '700',
    fontSize: 14,
  },
  inputStack: {
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
      default: {},
    }),
  } as any,
  rightIcon: {
    marginLeft: 8,
  },
  submitWrapper: {
    marginTop: 24,
  },
  submitBtn: {
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  forgotPass: {
    alignItems: 'center',
    marginTop: 16,
  },
  smallLink: {
    fontSize: 14,
    fontWeight: '600',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 14,
  }
});
