import * as Yup from 'yup';
import { Lang } from '.';

export const validationFormLogin = Yup.object().shape({
    email: Yup
        .string()
        .required(Lang.EN.required),
    password: Yup
        .string()
        .required(Lang.EN.required)
});