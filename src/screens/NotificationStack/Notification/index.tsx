import React, { Component } from 'react';
import { CustomContainer } from '../../../components';
import NotificationItem from './common/notificationList';

class Notification extends Component {
    render() {
        return (
            <CustomContainer noPadding>
                <NotificationItem read={false} type='follow' time='20 min' />
                <NotificationItem read={true} type='like' time='1 hour' />
            </CustomContainer>
        );
    }
}

export default Notification;