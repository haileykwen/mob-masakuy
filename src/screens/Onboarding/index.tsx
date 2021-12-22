import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ImgOnboarding } from '../../assets/images';
import { Button, HeadingPrimary, ParagraphPrimary } from '../../components';
import { Lang } from '../../configs';
import { Colors, GlobalStyle } from '../../styles';

class Onboarding extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image style={styles.image} source={ImgOnboarding} />
                    <View style={styles.wrapper}>
                        <HeadingPrimary text={Lang.EN.startCooking} style={styles.heading} />
                        <ParagraphPrimary text={Lang.EN.joinCommunity} style={styles.paragraph} />
                        <Button text={Lang.EN.getStarted} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingTop: GlobalStyle.paddingTertiary
    },
    image: {
        width: GlobalStyle.fullWidth
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
        alignItems: 'center'
    }
});