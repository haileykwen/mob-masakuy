import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '../../../../components';
import { Lang } from '../../../../configs';
import { Colors, GlobalStyle } from '../../../../styles';

interface SearchSuggestionsProps {
    suggestions: any,
    onChoose: any
}

const SearchSuggestions = ({suggestions, onChoose}: SearchSuggestionsProps) => {
    return (
        <View>
            <Heading 
                text={Lang.EN.searchSuggestions} 
                type='secondary' 
                style={styles.heading} 
            />
            
            <View style={styles.container}>
                {suggestions.map((suggestion: any, index: any) => (
                    <TouchableOpacity key={index} style={styles.touhcable} onPress={() => onChoose(suggestion)}>
                        <Text style={styles.text}>{suggestion}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default SearchSuggestions;

const styles = StyleSheet.create({
    heading: {
        marginTop: GlobalStyle.paddingPrimary,
        marginLeft: GlobalStyle.paddingPrimary
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 8,
        paddingBottom: 8,
        paddingRight: GlobalStyle.paddingPrimary,
        paddingTop: GlobalStyle.paddingPrimary
    },
    touhcable: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: GlobalStyle.paddingPrimary,
        paddingVertical: 11,
        backgroundColor: Colors.form,
        borderRadius: GlobalStyle.radiusPrimary,
        marginLeft: GlobalStyle.paddingTertiary,
        marginBottom: GlobalStyle.paddingTertiary
    },
    text: {
        fontFamily: GlobalStyle.fontPrimaryBold,
        fontSize: GlobalStyle.P2,
        color: Colors.textMain
    }
});