import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Decorative Gradients */}
            <View style={[styles.glowTop, { backgroundColor: colors.primary }]} />
            <View style={[styles.glowBottom, { backgroundColor: colors.info }]} />

            <View style={[styles.content, { paddingTop: insets.top, paddingBottom: insets.bottom + 40 }]}>
                <View style={styles.header}>
                    <View style={[styles.logoContainer, { borderColor: colors.primary }]}>
                        <Ionicons name="chatbubbles-sharp" size={60} color={colors.primary} />
                        <View style={[styles.logoDot, { backgroundColor: colors.info }]} />
                    </View>
                    <Text style={[styles.title, { color: colors.text }]}>GOSSIP</Text>
                    <Text style={[styles.tagline, { color: colors.textSecondary }]}>
                        Real-time conversations,{"\n"}refined for you.
                    </Text>
                </View>

                <View style={styles.features}>
                    <FeatureItem
                        icon="flash-outline"
                        title="Instant Delivery"
                        desc="Messages that move as fast as you do."
                        color={colors.primary}
                    />
                    <FeatureItem
                        icon="shield-checkmark-outline"
                        title="Privacy First"
                        desc="Your data, your control. Always secure."
                        color={colors.info}
                    />
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => router.push('/login')}
                    >
                        <LinearGradient
                            colors={[colors.primary, colors.info]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                            <Ionicons name="arrow-forward" size={20} color="#fff" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <Text style={[styles.terms, { color: colors.textTertiary }]}>
                        By continuing, you agree to our Terms of Service
                    </Text>
                </View>
            </View>
        </View>
    );
}

function FeatureItem({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    const { colors } = useTheme();
    return (
        <View style={styles.featureItem}>
            <View style={[styles.featureIcon, { backgroundColor: `${color}15` }]}>
                <Ionicons name={icon} size={24} color={color} />
            </View>
            <View>
                <Text style={[styles.featureTitle, { color: colors.text }]}>{title}</Text>
                <Text style={[styles.featureDesc, { color: colors.textSecondary }]}>{desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    glowTop: {
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        borderRadius: 150,
        opacity: 0.15,
    },
    glowBottom: {
        position: 'absolute',
        bottom: -150,
        left: -150,
        width: 400,
        height: 400,
        borderRadius: 200,
        opacity: 0.1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: 60,
        alignItems: 'center',
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 35,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
    },
    logoDot: {
        position: 'absolute',
        top: 30,
        right: 30,
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    title: {
        fontSize: 42,
        fontWeight: '900',
        letterSpacing: 2,
    },
    tagline: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 12,
        lineHeight: 26,
        fontWeight: '500',
    },
    features: {
        marginVertical: 40,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    featureIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 2,
    },
    featureDesc: {
        fontSize: 14,
        lineHeight: 20,
    },
    footer: {
        width: '100%',
    },
    button: {
        height: 64,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    terms: {
        fontSize: 12,
        textAlign: 'center',
    }
});
