import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IcDrag, IcEyeActive, IcEyeInactive, IcLock, IcMesssage } from '../assets/images';
import { Colors, GlobalStyle } from '../styles';

interface InputProps {
    placeholder?: string,
    value?: string,
    onChangeText?: any,
    type?: string,
    error?: any,
    multiline?: any,
    index?: string
}

const Input = ({placeholder, value, onChangeText, type, error, multiline, index}: InputProps) => {
    const [showPassword, setShowPassword] = React.useState(true);
    const [focus, setFocus] = React.useState(false);

    return (
        <View style={styles({multiline}).container}>
            <View style={styles({multiline}).icons}>
                { type === 'steps' && <View style={styles({multiline}).step}><Text style={styles({multiline}).textStep}>{index}</Text></View> }
                { type === 'ingredients' || type === 'steps' && <Image source={IcDrag} style={[styles({multiline}).icon, {marginRight: 10}]} /> }
            </View>

            <View style={error ? styles({multiline}).error : focus ? styles({multiline}).active : styles({multiline}).blur}>
                { type === 'password' && <Image style={styles({multiline}).icon} source={IcLock} /> }
                { type === 'email' && <Image style={styles({multiline}).icon} source={IcMesssage} /> }
                
                <TextInput 
                    secureTextEntry={type === 'password' && showPassword ? true : false}
                    placeholder={placeholder} 
                    style={styles({multiline}).input} 
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    multiline={multiline}
                />

                {type === 'password' &&
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image style={styles({multiline}).icon} source={showPassword ? IcEyeInactive : IcEyeActive} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

export default Input;

const styles = ({multiline}: InputProps) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    blur: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: GlobalStyle.paddingTertiary,
        paddingHorizontal: GlobalStyle.paddingPrimary,
        borderColor: Colors.outline,
        borderWidth: 1,
        borderRadius: multiline ? 8 : GlobalStyle.radiusPrimary,
        alignItems: 'center'
    },
    active: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: GlobalStyle.paddingTertiary,
        paddingHorizontal: GlobalStyle.paddingPrimary,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: multiline ? 8 : GlobalStyle.radiusPrimary,
        alignItems: 'center'
    },
    error: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: GlobalStyle.paddingTertiary,
        paddingHorizontal: GlobalStyle.paddingPrimary,
        borderColor: Colors.error,
        borderWidth: 2,
        borderRadius: multiline ? 8 : GlobalStyle.radiusPrimary,
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
    },
    icons: {
        flexDirection: 'column'
    },
    step: {
        height: 24,
        width: 24,
        borderRadius: 50,
        backgroundColor: Colors.textMain,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    textStep: {
        color: Colors.white,
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: 10
    }
});