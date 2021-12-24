import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { IcSearchActive, IcSearchClose } from '../assets/images';
import { Colors, GlobalStyle } from '../styles';

interface SearchBarProps {
    type?: string,
    onSearchBarPress?: any,
    placeholder: string
}

const SearchBar = ({type, onSearchBarPress, placeholder}: SearchBarProps) => {
    return (
        <TouchableWithoutFeedback onPress={onSearchBarPress && onSearchBarPress}>
            <View style={styles.container}>
                <Image style={styles.icon} source={IcSearchActive} />
                <TextInput 
                    placeholder={placeholder}
                    style={styles.input}
                    editable={type === 'functional' && true}
                />
                {type === 'functional' &&
                    <TouchableOpacity>
                        <Image style={styles.icon} source={IcSearchClose} />
                    </TouchableOpacity>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: GlobalStyle.paddingTertiary,
        paddingHorizontal: GlobalStyle.paddingPrimary,
        borderRadius: GlobalStyle.radiusPrimary,
        alignItems: 'center',
        backgroundColor: Colors.form
    },
    icon: {
        width: 24,
        height: 24
    },
    input: {
        fontSize: GlobalStyle.P2,
        padding: 0,
        marginHorizontal: 10,
        color: Colors.textMain,
        fontFamily: GlobalStyle.fontPrimaryRegular,
        flex: 1
    }
});