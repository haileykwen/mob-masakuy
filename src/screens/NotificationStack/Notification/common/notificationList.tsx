import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DummyFood1, DummyUser1 } from '../../../../assets/images';
import { Gap, Heading, Paragraph } from '../../../../components';
import { Colors, GlobalStyle } from '../../../../styles';

interface NotificationItemProps {
    read: true | false,
    type: 'like' | 'follow',
    time: string,
    // photo: string,
    // user: object
}

const NotificationItem = (props: NotificationItemProps) => {
    return (
        <TouchableOpacity style={styles(props).container}>
            <Image source={DummyUser1} style={styles(props).userPic} />
            <View>
                <Heading type='tertiary' text='Sam Winchester' />
                <Gap height={5} />
                <Paragraph type='tertiary' text={props.type === 'follow' ? 'now following you' : 'liked your recipe'} />
                <Gap height={5} />
                <Paragraph type='tertiary' text={props.time} />
            </View>
            {props.type === 'like' && <Image source={DummyFood1} style={styles(props).foodPic} />}
        </TouchableOpacity>
    );
}

export default NotificationItem;

const styles = (props: NotificationItemProps) => StyleSheet.create({
    container: {
        padding: GlobalStyle.paddingSecondary,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.read === true ? 'none' : Colors.outline,
    },
    userPic: {
        height: 48,
        width: 48,
        borderRadius: 50,
        marginRight: 16
    },
    foodPic: {
        height: 64,
        width: 64,
        borderRadius: 12,
        marginRight: 0,
        marginLeft: 'auto'
    }
});
