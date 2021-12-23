import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Heading, Input, Paragraph } from '../../components';
import { Lang } from '../../configs';
import { Colors, GlobalStyle } from '../../styles';
import { Formik } from 'formik';
import { initRecoverPassword } from '../../configs/initialValues';
import { validationRecoverPassword } from '../../configs/validations';

class PasswordRecovery extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Heading type='primary' style={styles.heading} text={Lang.EN.passwordRecovery} />
                    <Paragraph text={Lang.EN.enterEmailForRecovery} type='secondary' style={styles.paragraph} />
                    <Formik
                        initialValues={initRecoverPassword}
                        validationSchema={validationRecoverPassword}
                        onSubmit={values => console.log(values)}
                    >
                        {({ errors, touched, values, handleSubmit, handleChange }) => (
                            <View>
                                <Input 
                                    value={values.email} 
                                    onChangeText={handleChange('email')} 
                                    type='email' 
                                    placeholder='youremail@email.com' 
                                    error={errors.email && touched.email}
                                />
                                {errors.email && touched.email && <Paragraph style={styles.error} type='tertiary' text={errors.email} />}
                                <Gap height={32} />
                                <Button onPress={handleSubmit} text={Lang.EN.sendOtp} />
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        );
    }
}

export default PasswordRecovery;

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
    }
});