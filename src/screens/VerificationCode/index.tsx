import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Heading, Paragraph } from '../../components';
import { Lang } from '../../configs';
import { Colors, GlobalStyle } from '../../styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface VerificationCodeState {
    timer: number
}

interface VerificationCodeProps {}

class VerificationCode extends Component<VerificationCodeProps, VerificationCodeState> {
    constructor(props: VerificationCodeProps){
        super(props);
        this.state = {
            timer: 180
        }
    }

    countDown(): any {
        setInterval(() => {
            this.setState({ timer: this.state.timer - 1});
        }, 1000);
    }

    getMinute(): any {
        let time = this.state.timer;
        let floor = Math.floor(time / 60);
        let minute = `${floor}`;
        
        if (minute.length < 2) {
            return `0` + minute;
        } else {
            return minute;
        }
    }

    getSecond(): any {
        let time = this.state.timer;
        let mod = time % 60;
        let second = `${mod}`;
        
        if (second.length < 2) {
            return `0` + second;
        } else {
            return second;
        }
    }

    componentDidMount(): any {
        this.countDown();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Heading type='primary' style={styles.heading} text={Lang.EN.checkYourEmail} />
                    <Paragraph text={Lang.EN.weSendOTP} type='secondary' style={styles.paragraph} />
                    <Gap height={32} />
                    <OTPInputView
                        autoFocusOnLoad
                        style={styles.otp}
                        pinCount={4}
                        codeInputFieldStyle={styles.codeInputFieldStyle}
                        codeInputHighlightStyle={styles.codeInputHighlightStyle}
                        onCodeFilled = {(code) => {
                            console.log(code);
                        }}
                    />

                    <View style={styles.codeExpireWrapper}>
                        <Paragraph text={Lang.EN.codeExpire} type='secondary' style={styles.codeExpire} />
                        <Paragraph text={`${this.getMinute()}:${this.getSecond()}`} type='secondary' style={styles.codeExpireTime} />
                    </View>

                    <Button text={Lang.EN.verify} />
                    <Gap height={GlobalStyle.paddingTertiary} />
                    <Button text={Lang.EN.resend} type='outline' />
                </View>
            </ScrollView>
        );
    }
}

export default VerificationCode;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        padding: GlobalStyle.paddingPrimary,
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    heading: {
        textAlign: 'center',
        marginBottom: 8
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 32
    },
    otp: {
        width: '100%', 
        height: 72,
        marginBottom: 48
    },
    codeInputFieldStyle: {
        height: 72,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.outline,
        borderRadius: 20,
        padding: GlobalStyle.paddingTertiary,
        fontSize: 34,
        fontFamily: GlobalStyle.fontPrimarySemiBold,
        color: Colors.textMain
    },
    codeInputHighlightStyle: {
        borderColor: Colors.primary,
        borderWidth: 2
    },
    codeExpire: {
        color: Colors.textMain,
        textAlign: 'center',
        marginRight: 5
    },
    codeExpireTime: {
        color: Colors.secondary
    },
    codeExpireWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: GlobalStyle.paddingPrimary
    }
});