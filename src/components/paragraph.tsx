import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface ParagraphProps {
    text: string,
    style?: object,
    type: string
}

const Paragraph = ({text, style, type}: ParagraphProps) => {
    return (
        <Text style={[styles({type, text}).paragraph, style && style]}>{text}</Text>
    );
}

export default Paragraph;

const styles = ({type}: ParagraphProps) => StyleSheet.create({
    paragraph: {
        fontFamily: GlobalStyle.fontPrimaryRegular,
        fontSize: type === 'primary' ? GlobalStyle.P1 : type === 'secondary' ? GlobalStyle.P2 : GlobalStyle.P3,
        lineHeight: type === 'primary' ? GlobalStyle.LP1 : type === 'secondary' ? GlobalStyle.LP2 : GlobalStyle.LP3,
        color: Colors.textSecondary,
    }
});