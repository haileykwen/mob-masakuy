import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface ParagraphPrimaryProps {
    text: string,
    style?: object
}

const ParagraphPrimary = ({text, style}: ParagraphPrimaryProps) => {
    return (
        <Text style={[styles.paragraph, style && style]}>{text}</Text>
    );
}

export default ParagraphPrimary;

const styles = StyleSheet.create({
    paragraph: {
        fontFamily: GlobalStyle.fontPrimaryRegular,
        fontSize: GlobalStyle.P1,
        lineHeight: GlobalStyle.LP1,
        color: Colors.textSecondary,
    }
});