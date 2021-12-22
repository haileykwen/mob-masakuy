import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface HeadingProps {
    text: string,
    style?: object,
    type?: string
}

const Heading = ({text, style, type}: HeadingProps) => {
    return (
        <Text style={[styles({type, text}).heading, style && style]}>{text}</Text>
    );
}

export default Heading

const styles = ({type}: HeadingProps) => StyleSheet.create({
    heading: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: type === 'primary' ? GlobalStyle.H1 : type === 'secondary' ? GlobalStyle.H2 : GlobalStyle.H3,
        lineHeight: type === 'primary' ? GlobalStyle.LH1 : type === 'secondary' ? GlobalStyle.LH2 : GlobalStyle.LH3,
        color: Colors.textMain
    }
});
