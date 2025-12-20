import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

type ToastType = 'success' | 'error' | 'info';

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<ToastType>('info');

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const timeoutRef = useRef<any>(undefined);

    const showToast = useCallback((msg: string, t: ToastType = 'info') => {
        setMessage(msg);
        setType(t);
        setVisible(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Animate In
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        // Auto Hide
        timeoutRef.current = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setVisible(false));
        }, 3000);
    }, [fadeAnim]);

    const getIconName = () => {
        switch (type) {
            case 'success': return 'checkmark-circle';
            case 'error': return 'alert-circle';
            default: return 'information-circle';
        }
    };

    const getColor = () => {
        switch (type) {
            case 'success': return '#00B894';
            case 'error': return '#FF4757';
            default: return '#0984e3';
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {visible && (
                <Animated.View
                    style={[
                        styles.toastContainer,
                        {
                            top: insets.top + (Platform.OS === 'ios' ? 10 : 20),
                            opacity: fadeAnim,
                            transform: [{
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-20, 0]
                                })
                            }]
                        }
                    ]}
                >
                    <BlurView intensity={90} tint="dark" style={[styles.toastContent, { borderLeftColor: getColor() }]}>
                        <Ionicons name={getIconName()} size={24} color={getColor()} />
                        <Text style={styles.toastText}>{message}</Text>
                    </BlurView>
                </Animated.View>
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        left: 20,
        right: 20,
        alignItems: 'center',
        zIndex: 9999,
    },
    toastContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 12,
        borderLeftWidth: 4,
        gap: 12,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        overflow: 'hidden'
    },
    toastText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        flex: 1,
    }
});
