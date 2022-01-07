import { Formik } from 'formik';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Gap, Heading, Input, Paragraph } from '../../../components';
import { initFormLogin, Lang, validationFormLogin } from '../../../configs';
import { Colors, GlobalStyle } from '../../../styles';

interface SigninProps {
    navigation: any
}

class Signin extends Component<SigninProps, {}> {
    render() {
        return (
            <ScrollView style={GlobalStyle.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Heading type='primary' style={styles.heading} text={Lang.EN.wellcomeBack} />
                    <Paragraph text={Lang.EN.enterAccount} type='secondary' style={styles.paragraph} />
                    
                    <Formik
                        initialValues={initFormLogin}
                        validationSchema={validationFormLogin}
                        onSubmit={values => {
                            console.log(values);
                            this.props.navigation.replace('HomeStack', { screen: 'Home' });
                        }}
                    >
                        {({ handleChange, values, handleSubmit, errors, touched }) => (
                            <View>
                                <Input 
                                    placeholder={Lang.EN.email} 
                                    type='email'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    error={errors.email && touched.email}
                                />
                                {errors.email && touched.email && <Paragraph style={styles.error} type='tertiary' text={errors.email} />}
                                <Gap height={GlobalStyle.paddingTertiary} />
                                <Input 
                                    placeholder={Lang.EN.password} 
                                    type='password' 
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    error={errors.password && touched.password}
                                />
                                {errors.password && touched.password && <Paragraph style={styles.error} type='tertiary' text={errors.password} />}

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PasswordRecovery')} style={styles.forgotPasswordWrapper}>
                                    <Paragraph text={Lang.EN.forgotPassword} type='secondary' style={styles.forgotPassword} />
                                </TouchableOpacity>
                                <Button text={Lang.EN.login}  onPress={handleSubmit} />
                                <Paragraph text={Lang.EN.orContinueWith} type='secondary' style={styles.orContinueWith} />
                                <Button text='Google' type='google' />
                                <Gap height={GlobalStyle.paddingPrimary} />
                                <View style={styles.dontHaveAccountWrapper}>
                                    <Paragraph text={Lang.EN.dontHaveAccount} type='secondary' style={styles.dontHaveAccount} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                        <Heading text={Lang.EN.signup} type='tertiary' style={styles.linkSignUp} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        );
    }
}

export default Signin;

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
    },
    error: {
        marginTop: 10,
        color: Colors.error,
        fontWeight: 'bold'
    }
});