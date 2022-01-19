import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface ParagraphProps {
    text: string,
    style?: object,
    type: 'primary' | 'secondary' | 'tertiary',
    align?: 'left' | 'center' | 'right',
    color?: string
}

const Paragraph = (props: ParagraphProps) => {
    return (
        <Text style={[styles(props).paragraph, props.style && props.style]}>{props.text}</Text>
    );
}

export default Paragraph;

const styles = (props: ParagraphProps) => StyleSheet.create({
    paragraph: {
        fontFamily: GlobalStyle.fontPrimaryRegular,
        color: props.color ? props.color : Colors.textSecondary,
        fontSize: props.type === 'primary' 
            ? GlobalStyle.P1 
            : props.type === 'secondary' 
                ? GlobalStyle.P2 
                : props.type === 'tertiary'
                    ? GlobalStyle.P3
                    : GlobalStyle.P1,
        lineHeight: props.type === 'primary' 
                ? GlobalStyle.LP1 
                : props.type === 'secondary' 
                    ? GlobalStyle.LP2 
                    : props.type === 'tertiary' 
                        ? GlobalStyle.LP3
                        : GlobalStyle.LP1,
        textAlign: props.align === 'left' 
                ? 'left'
                : props.align === 'center' 
                    ? 'center'
                    : props.align === 'right' 
                        ? 'right'
                        : 'left'
    }
});