import * as Yup from 'yup';
import { Lang } from '../configs';

export const formLoginValidation = Yup.object().shape({
    email: Yup
        .string()
        .required(Lang.EN.required),
    password: Yup
        .string()
        .required(Lang.EN.required)
});

export const formSignupValidation = Yup.object().shape({
    email: Yup
        .string()
        .email(Lang.EN.invalidEmail)
        .required(Lang.EN.required),
    password: Yup
        .string()
        .matches(
            /^(?=.{8,})/,
            Lang.EN.min8
        )
        .matches(
            /^(?=.*[A-Z])/,
            Lang.EN.includeUppercase
        )
        .matches(
            /^(?=.*[a-z])/,
            Lang.EN.includeLowercase
        )
        .matches(
            /^(?=.*[0-9])/,
            Lang.EN.includeNumber
        )
        .matches(
            /^(?=.*[!@#\$%\^&\*])/,
            Lang.EN.includeSymbol
        )
        .required(Lang.EN.required)
});

export const formRecoverPasswordValidation = Yup.object().shape({
    email: Yup
        .string()
        .email(Lang.EN.invalidEmail)
        .required(Lang.EN.required)
});

export const formNewPasswordValidation = Yup.object().shape({
    password: Yup
        .string()
        .matches(
            /^(?=.{8,})/,
            Lang.EN.min8
        )
        .matches(
            /^(?=.*[A-Z])/,
            Lang.EN.includeUppercase
        )
        .matches(
            /^(?=.*[a-z])/,
            Lang.EN.includeLowercase
        )
        .matches(
            /^(?=.*[0-9])/,
            Lang.EN.includeNumber
        )
        .matches(
            /^(?=.*[!@#\$%\^&\*])/,
            Lang.EN.includeSymbol
        )
        .required(Lang.EN.required)
});