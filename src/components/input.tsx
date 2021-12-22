import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { IcEyeActive, IcEyeInactive, IcLock, IcMesssage } from '../assets/images';
import { Colors, GlobalStyle } from '../styles';

interface InputProps {
    placeholder?: string,
    value?: string,
    onChangeText?: any,
    type: string
}

const Input = ({placeholder, value, onChangeText, type}: InputProps) => {
    const [showPassword, setShowPassword] = React.useState(true);

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={type === 'email' ? IcMesssage : IcLock} />
            <TextInput 
                secureTextEntry={type === 'password' && showPassword ? true : false}
                placeholder={placeholder} 
                style={styles.input} 
            />
            {type === 'password' &&
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image style={styles.icon} source={showPassword ? IcEyeInactive : IcEyeActive} />
                </TouchableOpacity>
            }
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: GlobalStyle.paddingTertiary,
        paddingHorizontal: GlobalStyle.paddingPrimary,
        borderColor: Colors.outline,
        borderWidth: 1,
        borderRadius: GlobalStyle.radiusPrimary,
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24
    },
    input: {
        fontSize: GlobalStyle.P2,
        padding: 0,
        marginHorizontal: 10,
        color: Colors.textSecondary,
        fontFamily: GlobalStyle.fontPrimaryRegular,
        flex: 1
    }
});