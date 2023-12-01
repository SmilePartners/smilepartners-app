import React from 'react';
import { StyleSheet, Text, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Link } from 'expo-router';

interface GenericButtonProps {
    to: string;
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const GenericButton: React.FC<GenericButtonProps> = ({ to, title, style, textStyle }) => {
    return (
        <Link href={to} asChild>
            <Pressable style={[styles.button, style]}>
                <Text style={textStyle ? textStyle : styles.text}>{title}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        width: '60%',
        paddingVertical: 20,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default GenericButton;
