import React, { ReactNode } from 'react';
import { View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { GlobalStyle } from '../styles';

interface CustomContainerProps {
    children: ReactNode,
    center?: true | false,
    direction?: 'row' | 'column',
    noPadding?: true | false
}

const CustomContainer = (props: CustomContainerProps) => {
    React.useEffect(() => {
        console.log({props})
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <StatusBar />
            <View style={styles(props).viewContainer}>
                {props.children}
            </View>
        </ScrollView>
    );
}

export default CustomContainer;

const styles = (props: CustomContainerProps) => StyleSheet.create({
    viewContainer: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        padding: props.noPadding ? 0 : GlobalStyle.paddingPrimary,
        justifyContent: props.center ? 'center' : 'flex-start'
    }
});