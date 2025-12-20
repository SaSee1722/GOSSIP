import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, TextStyle, Platform } from 'react-native';
import { theme } from '@/constants/theme';

interface GradientTextProps {
    text: string;
    style?: TextStyle | TextStyle[];
    colors?: string[];
}

export function GradientText({ text, style, colors = ['#00E5FF', '#FF4081'] }: GradientTextProps) {
    // Flatten style to get fontSize, fontWeight, etc.
    const flatStyle = StyleSheet.flatten(style || {});

    if (Platform.OS === 'web') {
        // Web fallback using background-clip: text
        return (
            <Text style={[style, {
                // @ts-ignore: web specific styles
                backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
            }]}>
                {text}
            </Text>
        );
    }

    return (
        <MaskedView
            maskElement={
                <Text style={[style, { backgroundColor: 'transparent' }]}>
                    {text}
                </Text>
            }
        >
            <LinearGradient
                colors={colors as any}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // Horizontal gradient
            >
                <Text style={[style, { opacity: 0 }]}>
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    );
}
