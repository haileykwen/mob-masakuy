import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcArrowUpward, IcHistory } from '../../../../assets/images';
import { Gap, Paragraph } from '../../../../components';
import { Colors, GlobalStyle } from '../../../../styles';

interface SearchHistoryProps {
    histories: any,
    onChoose: any
}

const SearchHistory = ({histories, onChoose}: SearchHistoryProps) => {
    return (
        <View style={styles.container}>
            {histories.map((history: any, index: any) => (
                <TouchableOpacity key={index} style={styles.touchable} onPress={() => onChoose(history)}>
                    <View style={styles.row}>
                        <Image source={IcHistory} style={styles.icon} />
                        <Gap width={17} />
                        <Paragraph 
                            text={history} 
                            type='primary' 
                            style={{color: Colors.textMain}}
                        />
                    </View>
                    <Image source={IcArrowUpward} style={styles.icon} />
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default SearchHistory;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: GlobalStyle.paddingPrimary,
        paddingTop: GlobalStyle.paddingPrimary,
        paddingBottom: 2
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22
    },
    icon: {
        width: 24,
        height: 24
    },
    row: {
        flexDirection: 'row'
    }
});
