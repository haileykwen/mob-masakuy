import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface HeadingProps {
    text: string,
    style?: object,
    type?: 'primary' | 'secondary' | 'tertiary',
    align?: 'left' | 'center' | 'right',
    color?: string
}

const Heading = (props: HeadingProps) => {
    return (
        <Text style={[styles(props).heading, props.style && props.style]}>{props.text}</Text>
    );
}

export default Heading

const styles = (props: HeadingProps) => StyleSheet.create({
    heading: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        color: props.color ? props.color : Colors.textMain,
        fontSize: props.type === 'primary' 
            ? GlobalStyle.H1 
            : props.type === 'secondary' 
                ? GlobalStyle.H2 
                : props.type === 'tertiary'
                    ? GlobalStyle.H3
                    : GlobalStyle.H1,
        lineHeight: props.type === 'primary' 
            ? GlobalStyle.LH1 
            : props.type === 'secondary' 
                ? GlobalStyle.LH2 
                : props.type === 'tertiary' 
                    ? GlobalStyle.LH3
                    : GlobalStyle.LH1,
        textAlign: props.align === 'left' 
            ? 'left'
            : props.align === 'center' 
                ? 'center'
                : props.align === 'right' 
                    ? 'right'
                    : 'left'
    }
});
