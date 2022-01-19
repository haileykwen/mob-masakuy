import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Paragraph } from '.';
import { IcCheckCircleActive, IcCheckCircleInactive } from '../assets/images';
import { Colors } from '../styles';

interface CustomCheckProps {
    text: string,
    complete: true | false
}

const CustomChecker = (props: CustomCheckProps) => {
    return (
        <View style={styles.checkWrapper}>
            <Image 
                style={styles.checkIcon} 
                source={props.complete ? IcCheckCircleActive : IcCheckCircleInactive } 
            />
            <Paragraph 
                text={props.text} 
                type='secondary' 
                color={props.complete ? Colors.textMain : undefined}
            />
        </View>
    );
}

export default CustomChecker;

const styles = StyleSheet.create({
    checkWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    checkIcon: {
        width: 24,
        height: 24,
        marginRight: 8
    }
});