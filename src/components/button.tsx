import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface ButtonProps {
    text: string
}

const Button = ({text}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        paddingVertical: GlobalStyle.paddingSecondary,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: GlobalStyle.radiusPrimary,
        width: '100%'
    },
    text: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: GlobalStyle.P2,
        color: Colors.white
    }
});