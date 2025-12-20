import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export const TypingIndicator = () => {
    const { colors } = useTheme();
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = (dot: Animated.Value, delay: number) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.delay(delay),
                    Animated.timing(dot, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot, {
                        toValue: 0,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            );
        };

        const animation1 = animate(dot1, 0);
        const animation2 = animate(dot2, 200);
        const animation3 = animate(dot3, 400);

        animation1.start();
        animation2.start();
        animation3.start();

        return () => {
            animation1.stop();
            animation2.stop();
            animation3.stop();
        };
    }, []);

    const renderDot = (animatedValue: Animated.Value) => (
        <Animated.View
            style={[
                styles.dot,
                {
                    backgroundColor: colors.primary,
                    transform: [
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -6],
                            }),
                        },
                    ],
                },
            ]}
        />
    );

    return (
        <View style={styles.container}>
            {renderDot(dot1)}
            {renderDot(dot2)}
            {renderDot(dot3)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#1A1A1A',
        borderRadius: 18,
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
        gap: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
});
