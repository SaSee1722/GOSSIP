import React, { useEffect } from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
    withRepeat,
    withSequence,
    Easing,
    interpolateColor
} from 'react-native-reanimated';
import { theme } from '@/constants/theme';

interface AnimatedHeadingProps {
    text: string;
    style?: TextStyle | TextStyle[];
    delay?: number;
    type?: 'brand' | 'section' | 'title';
    gender?: 'male' | 'female' | 'other' | string;
}

const SKY_BLUE = '#00E5FF';
const BABY_PINK = '#FF4081';
const GOLDEN = '#FFD700';
const BLACK = '#000000';

export function AnimatedHeading({ text, style, delay = 0, type = 'title', gender }: AnimatedHeadingProps) {
    const colorProgress = useSharedValue(0);

    useEffect(() => {
        // No time-based color looping (static gradient requested)
    }, []);

    // We don't need the shared animated style anymore since color is per-character
    const animatedStyle = {};

    const characters = text.split('');

    return (
        <View style={styles.container}>
            {characters.map((char, index) => (
                <Character
                    key={index}
                    char={char}
                    index={index}
                    totalLength={characters.length}
                    delay={delay + (index * 50)}
                    type={type}
                    gender={gender}
                />
            ))}
        </View>
    );
}

function Character({ char, index, totalLength, delay, type, gender }: { char: string, index: number, totalLength: number, delay: number, type: string, gender?: string }) {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(15);
    const scale = useSharedValue(0.8);

    useEffect(() => {
        // Restore entry animations (respecting system Reduce Motion settings)
        opacity.value = withDelay(delay, withTiming(1, { duration: 600 }));
        translateY.value = withDelay(delay, withTiming(0, {
            duration: 800,
            easing: Easing.out(Easing.back(1.5))
        }));
        scale.value = withDelay(delay, withTiming(1, { duration: 600 }));
    }, [delay]);


    const charStyle = useAnimatedStyle(() => {
        const progress = totalLength > 1 ? index / (totalLength - 1) : 0;
        let colors = ['#00E5FF', '#FF4081'];
        if (gender === 'male') colors = ['#00E5FF', '#00B8D4'];
        else if (gender === 'female') colors = ['#FF4081', '#F50057'];
        else if (gender === 'other') colors = ['#FFD700', '#FFED00'];

        const staticColor = interpolateColor(progress, [0, 1], colors);

        return {
            opacity: opacity.value,
            transform: [
                { translateY: translateY.value },
                { scale: scale.value }
            ],
            color: staticColor
        };
    });

    return (
        <Animated.Text style={[styles.text, styles[type as keyof typeof styles], charStyle]}>
            {char === ' ' ? '\u00A0' : char}
        </Animated.Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        color: '#FFFFFF',
    },
    brand: {
        fontSize: 36,
        fontWeight: '900',
        letterSpacing: -1,
        textShadowColor: 'rgba(0, 191, 255, 0.4)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    section: {
        fontSize: 16,
        fontWeight: '900',
        letterSpacing: 3,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
    }
});
