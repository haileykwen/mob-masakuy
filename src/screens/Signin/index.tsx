import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Gap, Heading, Input, Paragraph } from '../../components';
import { Lang } from '../../configs';
import { Colors, GlobalStyle } from '../../styles';

class Signin extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Heading type='primary' style={styles.heading} text={Lang.EN.wellcomeBack} />
                    <Paragraph text={Lang.EN.enterAccount} type='secondary' style={styles.paragraph} />
                    <Input placeholder={Lang.EN.email} type='email' />
                    <Gap height={GlobalStyle.paddingTertiary} />
                    <Input placeholder={Lang.EN.password} type='password' />
                    <TouchableOpacity style={styles.forgotPasswordWrapper}>
                        <Paragraph text={Lang.EN.forgotPassword} type='secondary' style={styles.forgotPassword} />
                    </TouchableOpacity>
                    <Button text={Lang.EN.login} />
                    <Paragraph text={Lang.EN.orContinueWith} type='secondary' style={styles.orContinueWith} />
                    <Button text='Google' type='google' />
                    <Gap height={GlobalStyle.paddingPrimary} />
                    <View style={styles.dontHaveAccountWrapper}>
                        <Paragraph text={Lang.EN.dontHaveAccount} type='secondary' style={styles.dontHaveAccount} />
                        <TouchableOpacity>
                            <Heading text={Lang.EN.signup} type='tertiary' style={styles.linkSignUp} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Signin;

const styles = StyleSheet.create({
    container: {
        padding: GlobalStyle.paddingPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        textAlign: 'center',
        // marginTop: 83,
        marginBottom: 8
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 32
    },
    forgotPassword: {
        textAlign: 'right',
        color: Colors.textMain,
    },
    forgotPasswordWrapper: {
        marginTop: GlobalStyle.paddingPrimary,
        marginRight: 0,
        marginLeft: 'auto',
        marginBottom: 72
    },
    orContinueWith: {
        textAlign: 'center',
        marginVertical: GlobalStyle.paddingPrimary
    },
    dontHaveAccount: {
        textAlign: 'center',
        color: Colors.textMain,
    },
    dontHaveAccountWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkSignUp: {
        marginLeft: 8,
        color: Colors.primary
    }
});