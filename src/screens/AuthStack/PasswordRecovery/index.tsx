import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CustomContainer, Gap, Heading, Input, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { Colors } from '../../../styles';
import { Formik } from 'formik';
import { formRecoverPasswordValidation, formRecoveryPasswordInitialValues } from '../../../formik';

interface PasswordRecoveryProps {
    navigation: any
}

class PasswordRecovery extends Component<PasswordRecoveryProps, {}> {
    render() {
        return (
            <CustomContainer center>
                <Heading 
                    type='primary' 
                    align='center'
                    text={Lang.EN.passwordRecovery} 
                />
                <Gap height={8} />

                <Paragraph 
                    text={Lang.EN.enterEmailForRecovery} 
                    type='secondary' 
                    align='center'
                />
                <Gap height={32} />

                <Formik
                    initialValues={formRecoveryPasswordInitialValues}
                    validationSchema={formRecoverPasswordValidation}
                    onSubmit={values => {
                        console.log(values);
                        this.props.navigation.replace('PasswordRecoveryCode');
                    }}
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
            </CustomContainer>
        );
    }
}

export default PasswordRecovery;

const styles = StyleSheet.create({
    error: {
        marginTop: 10,
        color: Colors.error,
        fontWeight: 'bold'
    }
});