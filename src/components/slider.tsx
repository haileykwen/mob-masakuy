import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '.';
import { Lang } from '../configs';
import Slider from '@react-native-community/slider';
import { Colors } from '../styles';

interface SliderTimerProps {
    duration: string,
    onChangeDuration: any,
    label: string
}

const SliderTimer = (props: SliderTimerProps) => {
    return (
        <View>
            <View style={styles.headingCookingDurationWrapper}>
                <Heading type='secondary' text={props.label} />
                <Heading type='secondary' text={`(${Lang.EN.inMinutes})`} style={styles.headingCookingDurationInMinutes} />
            </View>
            <View style={styles.durationWrapper}>
                <Heading type='tertiary' text='<10' style={{color: Colors.textSecondary}} />
                <Heading type='tertiary' text={props.duration} style={{color: Colors.primary}} />
                <Heading type='tertiary' text='>60' style={{color: Colors.textSecondary}} />
            </View>
            <Slider
                style={{width: '100%'}}
                minimumValue={9}
                maximumValue={61}
                thumbTintColor={Colors.primary}
                minimumTrackTintColor={Colors.primary}
                onValueChange={(e) => props.onChangeDuration(e)}
            />
        </View>
    );
}

export default SliderTimer;

const styles = StyleSheet.create({
    headingCookingDurationWrapper: {
        flexDirection: 'row',
        marginBottom: 16
    },
    headingCookingDurationInMinutes: {
        color: Colors.textSecondary,
        fontWeight: '300',
        marginLeft: 5
    },
    durationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    }
});