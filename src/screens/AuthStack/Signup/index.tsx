import { Formik } from 'formik';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, CustomChecker, CustomContainer, Gap, Heading, Input, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { formLoginInitialValues, formLoginValidation } from '../../../formik';
import { Colors, GlobalStyle } from '../../../styles';

interface SignupProps {
    navigation: any
}

class Signup extends Component<SignupProps, {}> {
    render() {
        return (
            <CustomContainer center>
                <Heading 
                    type='primary'
                    text={Lang.EN.wellcome}
                    align='center'
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
                        this.props.navigation.replace('VerificationCode');
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
                            
                            <Gap height={GlobalStyle.paddingPrimary} />
                            {touched.password && <View>
                                <Gap height={8} />
                                <Paragraph 
                                    color='#3E5481'
                                    text={Lang.EN.passwordMustContain} 
                                    type='primary'
                                />

                                <CustomChecker
                                    text={Lang.EN.min8}
                                    complete={values.password.length >= 8}
                                />

                                <CustomChecker
                                    text={Lang.EN.includeUppercase}
                                    complete={(/[A-Z]/).test(values.password)}
                                />

                                <CustomChecker
                                    text={Lang.EN.includeLowercase}
                                    complete={(/[a-z]/).test(values.password)}
                                />

                                <CustomChecker
                                    text={Lang.EN.includeNumber}
                                    complete={(/[0-9]/).test(values.password)}
                                />

                                <CustomChecker
                                    text={Lang.EN.includeSymbol}
                                    complete={(/[!@#\$%\^&\*]/).test(values.password)}
                                />
                            </View>}

                            <Gap height={GlobalStyle.paddingPrimary} />
                            <Button text={Lang.EN.signup} onPress={handleSubmit} />

                            <Gap height={GlobalStyle.paddingPrimary} />
                            <View style={styles.haveAccountWrapper}>
                                <Paragraph 
                                    text={Lang.EN.haveAnAccount} 
                                    type='secondary' 
                                    align='center'
                                    color={Colors.textMain}
                                />
                                <Gap width={8} />
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                    <Heading 
                                        text={Lang.EN.login} 
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

export default Signup;

const styles = StyleSheet.create({
    haveAccountWrapper: {
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