import { Formik } from 'formik';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CustomChecker, CustomContainer, Gap, Heading, Input, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { formNewPasswordInitialValues, formNewPasswordValidation } from '../../../formik';
import { Colors, GlobalStyle } from '../../../styles';

interface NewPasswordProps {
    navigation?: any
}

interface NewPasswordState {}

class NewPassword extends Component<NewPasswordProps, NewPasswordState> {
    constructor(props: NewPasswordProps){
        super(props);
    }

    render() {
        return (
            <CustomContainer center>
                <Heading 
                    type='primary' 
                    align='center'
                    text={Lang.EN.resetYourPassword} 
                />
                <Gap height={8} />

                <Paragraph 
                    text={Lang.EN.enterYourPassword} 
                    type='secondary' 
                    align='center'
                />
                <Gap height={32} />
                
                <Formik
                    initialValues={formNewPasswordInitialValues}
                    validationSchema={formNewPasswordValidation}
                    onSubmit={() => this.props.navigation.replace('SignIn')}
                >
                    {({ handleChange, values, handleSubmit, errors, touched }) => (
                        <View>
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
                            <Button text={Lang.EN.reset} onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>
            </CustomContainer>
        );
    }
}

export default NewPassword;

const styles = StyleSheet.create({
    error: {
        marginTop: 10,
        color: Colors.error,
        fontWeight: 'bold'
    }
});