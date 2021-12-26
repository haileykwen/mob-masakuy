import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcArrowBack, IcFilter } from '../../../../assets/images';
import { Gap, SearchBar } from '../../../../components';
import { Lang } from '../../../../configs';
import { GlobalStyle } from '../../../../styles';

interface SearchControlProps {
    value: string,
    onBack: any,
    onReset: any,
    onChangetext: any
}

const SearchControl = ({value, onBack, onReset,onChangetext}: SearchControlProps) => {
    return (
        <View style={styles.searchControl}>
            <TouchableOpacity onPress={onBack}>
                <Image source={IcArrowBack} style={styles.icon} />
            </TouchableOpacity>
            <Gap width={24} />
            <SearchBar 
                placeholder={Lang.EN.search} 
                type='functional' 
                value={value}
                onReset={onReset}
                onChangetext={onChangetext}
            />
            <Gap width={24} />
            <TouchableOpacity>
                <Image source={IcFilter} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

export default SearchControl;

const styles = StyleSheet.create({
    searchControl: {
        flexDirection: 'row',
        padding: GlobalStyle.paddingPrimary,
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24
    }
});
