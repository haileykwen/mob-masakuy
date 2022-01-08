import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ImgOnboarding } from '../../../assets/images';
import { Button, Heading, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { Colors, GlobalStyle } from '../../../styles';

interface OnboardingProps {
    navigation: any
}
class Onboarding extends Component<OnboardingProps, {}> {
    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={GlobalStyle.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image resizeMode='cover' style={styles.image} source={ImgOnboarding} />
                    <View style={styles.wrapper}>
                        <Heading type='primary' text={Lang.EN.startCooking} style={styles.heading} />
                        <Paragraph type='primary' text={Lang.EN.joinCommunity} style={styles.paragraph} />
                        <Button onPress={() => this.props.navigation.replace('SignUp')} text={Lang.EN.getStarted} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    image: {
        width: GlobalStyle.fullWidth,
        height: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight - 326
    },
    heading: {
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 16
    },
    paragraph: {
        width: 209,
        textAlign: 'center',
        marginBottom: 72
    },
    wrapper: {
        width: GlobalStyle.fullWidth,
        padding: GlobalStyle.paddingPrimary,
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 'auto'
    }
});