import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, GlobalStyle } from '../styles';

interface ButtonSelectProps {
    active: boolean,
    text: string,
    onPress: any
}

const ButtonSelect = ({active, text, onPress}: ButtonSelectProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles({active, text, onPress}).container}>
            <Text style={styles({active, text, onPress}).text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonSelect;

const styles = ({active}: ButtonSelectProps) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: GlobalStyle.paddingPrimary,
        paddingVertical: 11,
        backgroundColor: active && active === true ? Colors.primary : Colors.form,
        borderRadius: GlobalStyle.radiusPrimary
    },
    text: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: GlobalStyle.P2,
        color: active && active === true ? Colors.white : Colors.outline
    }
});