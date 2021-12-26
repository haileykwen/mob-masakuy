import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { IcSearchActive, IcSearchClose, IcSearchInactive } from '../assets/images';
import { Colors, GlobalStyle } from '../styles';

interface SearchBarProps {
    type?: string,
    onSearchBarPress?: any,
    placeholder: string,
    value?: string,
    onReset?: any,
    onChangetext?: any
}

const SearchBar = ({type, onSearchBarPress, placeholder, value, onReset, onChangetext}: SearchBarProps) => {
    const [focus, setFocus] = React.useState(false);

    return (
        <TouchableWithoutFeedback onPress={onSearchBarPress && onSearchBarPress}>
            <View style={styles.container}>
                <Image 
                    style={styles.icon}  
                    source={type === 'functional' ? focus ? IcSearchActive : IcSearchInactive : IcSearchInactive} 
                />
                <TextInput 
                    placeholder={placeholder}
                    style={styles.input}
                    editable={type === 'functional' && true}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={value && value}
                    onChangeText={onChangetext && onChangetext}
                />
                {type === 'functional' &&
                    <TouchableOpacity onPress={onReset && onReset}>
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
        backgroundColor: Colors.form,
        flex: 1
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