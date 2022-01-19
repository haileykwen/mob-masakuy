import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ImgOnboarding } from '../../../assets/images';
import { Button, CustomContainer, Gap, Heading, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { GlobalStyle } from '../../../styles';

interface OnboardingProps {
    navigation: any
}
class Onboarding extends Component<OnboardingProps, {}> {
    render() {
        return (
            <CustomContainer center noPadding>
                <Image resizeMode='cover' style={styles.image} source={ImgOnboarding} />
                <View style={styles.wrapper}>
                    <Gap height={24} />
                    <Heading 
                        type='primary' 
                        text={Lang.EN.startCooking} 
                        align='center'
                    />
                    <Gap height={16} />
                    <Paragraph 
                        type='primary' 
                        text={Lang.EN.joinCommunity} 
                        style={styles.paragraph} 
                        align='center'
                    />
                    <Gap height={72} />
                    <Button onPress={() => this.props.navigation.replace('SignUp')} text={Lang.EN.getStarted} />
                </View>
            </CustomContainer>
        );
    }
}

export default Onboarding;

const styles = StyleSheet.create({
    image: {
        width: GlobalStyle.fullWidth,
        height: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight - 326
    },
    paragraph: {
        width: 209
    },
    wrapper: {
        width: GlobalStyle.fullWidth,
        padding: GlobalStyle.paddingPrimary,
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 'auto'
    }
});