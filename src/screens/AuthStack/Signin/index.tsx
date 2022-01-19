import { Formik } from 'formik';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, CustomContainer, Gap, Heading, Input, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { formLoginInitialValues, formLoginValidation } from '../../../formik';
import { Colors, GlobalStyle } from '../../../styles';

interface SigninProps {
    navigation: any
}

class Signin extends Component<SigninProps, {}> {
    render() {
        return (
            <CustomContainer center>
                <Heading 
                    type='primary' 
                    align='center'
                    text={Lang.EN.wellcomeBack} 
                />
                <Gap height={8} />

                <Paragraph 
                    text={Lang.EN.enterAccount} 
                    type='secondary' 
                    align='center'
                />
                <Gap height={32} />
                
                <Formik
                    initialValues={formLoginInitialValues}
                    validationSchema={formLoginValidation}
                    onSubmit={values => {
                        console.log(values);
                        this.props.navigation.replace('BottomTabs');
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
                                <Paragraph 
                                    text={Lang.EN.forgotPassword} 
                                    type='secondary' 
                                    align='right'
                                    color={Colors.textMain}
                                />
                            </TouchableOpacity>

                            <Button text={Lang.EN.login} onPress={handleSubmit} />
                            <Paragraph 
                                text={Lang.EN.orContinueWith} 
                                type='secondary' 
                                style={styles.orContinueWith} 
                                align='center'
                            />
                            <Button text='Google' type='google' />
                            <Gap height={GlobalStyle.paddingPrimary} />

                            <View style={styles.dontHaveAccountWrapper}>
                                <Paragraph 
                                    text={Lang.EN.dontHaveAccount} 
                                    type='secondary' 
                                    color={Colors.textMain}
                                    align='center'
                                />
                                <Gap width={8} />
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Heading 
                                        text={Lang.EN.signup} 
                                        type='tertiary' 
                                        color={Colors.primary}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </CustomContainer>
        );
    }
}

export default Signin;

const styles = StyleSheet.create({
    forgotPasswordWrapper: {
        marginTop: GlobalStyle.paddingPrimary,
        marginRight: 0,
        marginLeft: 'auto',
        marginBottom: 72
    },
    orContinueWith: {
        marginVertical: GlobalStyle.paddingPrimary
    },
    dontHaveAccountWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        marginTop: 10,
        color: Colors.error,
        fontWeight: 'bold'
    }
});