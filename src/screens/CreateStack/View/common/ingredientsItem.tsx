import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IcCheckCircleActive } from '../../../../assets/images';
import { Paragraph } from '../../../../components';

interface IngredientsItemProps {
    text: string
}

const IngredientsItem = (props: IngredientsItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={IcCheckCircleActive} style={styles.icon} />
            <Paragraph type='secondary' text={props.text} style={{color: 'black'}} />
        </View>
    );
}

export default IngredientsItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 8
    }
});