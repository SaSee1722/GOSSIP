import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, TextStyle, Platform } from 'react-native';

interface GradientTextProps {
    text: string;
    style?: TextStyle | TextStyle[];
    colors?: string[];
}

export function GradientText({ text, style, colors = ['#00E5FF', '#FF4081'] }: GradientTextProps) {
    const flatStyle = StyleSheet.flatten(style || {});

    if (Platform.OS === 'web') {
        return (
            <Text style={[style, {
                // @ts-ignore
                backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
            } as any]}>
                {text}
            </Text>
        );
    }

    const height = flatStyle.lineHeight || (flatStyle.fontSize ? Number(flatStyle.fontSize) * 1.5 : 30);

    return (
        <View style={{ height }}>
            <MaskedView
                style={{ flex: 1 }}
                maskElement={
                    <Text style={[style, { backgroundColor: 'transparent' }]}>
                        {text}
                    </Text>
                }
            >
                <LinearGradient
                    colors={colors as any}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
                >
                    <Text style={[style, { opacity: 0 }]}>
                        {text}
                    </Text>
                </LinearGradient>
            </MaskedView>
        </View>
    );
}
