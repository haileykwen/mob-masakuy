import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface HeadingPrimaryProps {
    text: string,
    style?: object
}

const HeadingPrimary = ({text, style}: HeadingPrimaryProps) => {
    return (
        <Text style={[styles.heading, style && style]}>{text}</Text>
    );
}

export default HeadingPrimary

const styles = StyleSheet.create({
    heading: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: GlobalStyle.H1,
        lineHeight: GlobalStyle.LH1,
        color: Colors.textMain
    }
});
