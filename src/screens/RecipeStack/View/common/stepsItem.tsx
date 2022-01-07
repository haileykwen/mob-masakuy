import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Paragraph } from '../../../../components';
import { Colors, GlobalStyle } from '../../../../styles';

interface StepsItemProps {
    number: string,
    text: string
}

const StepsItem = (props: StepsItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.number}>
                <Paragraph type='tertiary' text={props.number} style={{color: Colors.white}} />
            </View>
            <Paragraph type='secondary' text={props.text} />
        </View>
    );
}

export default StepsItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16
    },
    number: {
        width: 24,
        height: 24,
        borderRadius: 50,
        alignItems: 'center',
        marginRight: 16,
        backgroundColor: Colors.textMain
    }
});
