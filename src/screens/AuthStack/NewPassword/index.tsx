import { Formik } from 'formik';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { IcCheckCircleActive, IcCheckCircleInactive } from '../../../assets/images';
import { Button, Gap, Heading, Input, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { initNewPassword } from '../../../configs/initialValues';
import { validationNewPassword } from '../../../configs/validations';
import { Colors, GlobalStyle } from '../../../styles';

class NewPassword extends Component {
    render() {
        return (
            <ScrollView style={GlobalStyle.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Heading type='primary' style={styles.heading} text={Lang.EN.resetYourPassword} />
                    <Paragraph text={Lang.EN.enterYourPassword} type='secondary' style={styles.paragraph} />
                    
                    <Formik
                        initialValues={initNewPassword}
                        validationSchema={validationNewPassword}
                        onSubmit={values => console.log(values)}
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
                                    <Paragraph style={styles.passwordMustContain} text={Lang.EN.passwordMustContain} type='primary' />
                                    <View style={styles.checkWrapper}>
                                        <Image 
                                            style={styles.checkIcon} 
                                            source={values.password.length < 8 ? IcCheckCircleInactive : IcCheckCircleActive } 
                                        />
                                        <Paragraph 
                                            text={Lang.EN.min8} 
                                            type='secondary' 
                                            style={values.password.length >= 8 ? styles.passCheck : {}} 
                                        />
                                    </View>
                                    <View style={styles.checkWrapper}>
                                        <Image 
                                            style={styles.checkIcon} 
                                            source={(/[A-Z]/).test(values.password) ? IcCheckCircleActive : IcCheckCircleInactive} 
                                        />
                                        <Paragraph 
                                            text={Lang.EN.includeUppercase} 
                                            type='secondary' 
                                            style={(/[A-Z]/).test(values.password) ? styles.passCheck : {}}
                                        />
                                    </View>
                                    <View style={styles.checkWrapper}>
                                        <Image 
                                            style={styles.checkIcon} 
                                            source={(/[a-z]/).test(values.password) ? IcCheckCircleActive : IcCheckCircleInactive} 
                                        />
                                        <Paragraph 
                                            text={Lang.EN.includeLowercase} 
                                            type='secondary' 
                                            style={(/[a-z]/).test(values.password) ? styles.passCheck : {}}
                                        />
                                    </View>
                                    <View style={styles.checkWrapper}>
                                        <Image 
                                            style={styles.checkIcon} 
                                            source={(/[0-9]/).test(values.password) ? IcCheckCircleActive : IcCheckCircleInactive} 
                                        />
                                        <Paragraph 
                                            text={Lang.EN.includeNumber} 
                                            type='secondary' 
                                            style={(/[0-9]/).test(values.password) ? styles.passCheck : {}}
                                        />
                                    </View>
                                    <View style={styles.checkWrapper}>
                                        <Image 
                                            style={styles.checkIcon} 
                                            source={(/[!@#\$%\^&\*]/).test(values.password) ? IcCheckCircleActive : IcCheckCircleInactive} 
                                        />
                                        <Paragraph 
                                            text={Lang.EN.includeSymbol} 
                                            type='secondary' 
                                            style={(/[!@#\$%\^&\*]/).test(values.password) ? styles.passCheck : {}}
                                        />
                                    </View>
                                </View>}

                                <Gap height={GlobalStyle.paddingPrimary} />
                                <Button text={Lang.EN.reset} onPress={handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        );
    }
}

export default NewPassword;

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
    error: {
        marginTop: 10,
        color: Colors.error,
        fontWeight: 'bold'
    },
    passwordMustContain: {
        color: '#3E5481',
        marginBottom: 8
    },
    checkWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    checkIcon: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    passCheck: {
        color: Colors.textMain
    }
});