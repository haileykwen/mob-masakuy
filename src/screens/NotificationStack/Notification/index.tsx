import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors, GlobalStyle } from '../../../styles';
import NotificationItem from './common/notificationList';

class Notification extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <NotificationItem read={false} type='follow' time='20 min' />
                    <NotificationItem read={true} type='like' time='1 hour' />
                </View>
            </ScrollView>
        );
    }
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        backgroundColor: Colors.white
    }
});