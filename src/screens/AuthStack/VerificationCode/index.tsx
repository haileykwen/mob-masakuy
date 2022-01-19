import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CustomContainer, Gap, Heading, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { Colors, GlobalStyle } from '../../../styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface VerificationCodeState {
    timer: number
}

interface VerificationCodeProps {
    navigation: any
}

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
        
        if (time > 0) {
            let floor = Math.floor(time / 60);
            let minute = `${floor}`;
            
            if (minute.length < 2) {
                return '0' + minute;
            } else {
                return minute;
            }
        } else {
            return '00';
        }
    }

    getSecond(): any {
        let time = this.state.timer;
        
        if (time > 0) {
            let mod = time % 60;
            let second = `${mod}`;
            
            if (second.length < 2) {
                return '0' + second;
            } else {
                return second;
            }
        } else {
            return '00';
        }
    }

    componentDidMount(): any {
        this.countDown();
    }

    render() {
        return (
            <CustomContainer center>
                <Heading 
                    type='primary' 
                    text={Lang.EN.checkYourEmail}
                    align='center'
                />
                <Gap height={8} />

                <Paragraph 
                    text={Lang.EN.weSendOTP} 
                    type='secondary' 
                    align='center'
                />
                <Gap height={64} />

                <OTPInputView
                    autoFocusOnLoad
                    style={styles.otp}
                    pinCount={4}
                    codeInputFieldStyle={styles.codeInputFieldStyle}
                    codeInputHighlightStyle={styles.codeInputHighlightStyle}
                    onCodeFilled = {(code) => {
                        console.log(code);
                        this.props.navigation.replace('BottomTabs');
                    }}
                />

                <View style={styles.codeExpireWrapper}>
                    <Paragraph 
                        text={Lang.EN.codeExpire} 
                        type='secondary'
                        color={Colors.textMain}
                    />
                    <Gap width={5} />
                    <Paragraph 
                        text={`${this.getMinute()}:${this.getSecond()}`} 
                        type='secondary'
                        color={Colors.secondary}
                    />
                </View>

                <Button text={Lang.EN.verify} />
                <Gap height={GlobalStyle.paddingTertiary} />
                <Button text={Lang.EN.resend} type='outline' />
            </CustomContainer>
        );
    }
}

export default VerificationCode;

const styles = StyleSheet.create({
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
    codeExpireWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: GlobalStyle.paddingPrimary
    }
});