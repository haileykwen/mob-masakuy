import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { IcGoogle, IcPlus } from '../assets/images';
import { Colors, GlobalStyle } from '../styles';

interface ButtonProps {
    text: string,
    type?: string,
    onPress?: any
}

const Button = ({text, type, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles({type, text}).container}>
            {type && type === 'google' && <Image style={styles({type, text}).icon} source={IcGoogle} />}
            {type && type === 'ingredients' && <Image style={styles({type, text}).icon} source={IcPlus} />}
            
            <Text style={styles({type, text}).text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = ({type}: ButtonProps) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: GlobalStyle.paddingSecondary,
        alignItems: 'center',
        backgroundColor: type && type === 'google' ? Colors.secondary : type === 'outline' || type === 'ingredients' ? 'none' : Colors.primary,
        borderRadius: GlobalStyle.radiusPrimary,
        width: '100%',
        borderColor: type && type === 'outline' || type === 'ingredients' ? Colors.outline : 'none',
        borderWidth: type && type === 'outline' || type === 'ingredients' ? 1 : 0
    },
    text: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: GlobalStyle.P2,
        color: type && type === 'outline' ? Colors.outline : type === 'ingredients' ? Colors.tertiary : Colors.white
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    }
});