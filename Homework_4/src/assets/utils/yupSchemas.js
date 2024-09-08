import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object({
    email: yup.string().trim().email().required("This field is required."),
    password: yup
        .string()
        .trim()
        .min(8, "Include at least 8 characters")
        .max(32, "You can include at most 32 characters")
        .matches(/(?=.*[A-Z])/, "Include at least 1 uppercase letter")
        .matches(/(?=.*[a-z])/, "Include at least 1 lowercase letter")
        .matches(/(?=.*\d)/, "Include at least 1 digit")
        .matches(/(?=.*[!@#$%^&*-_|])/, "Include at least 1 special character")
        .required("This field is required."),
});

export const REGISTER_SCHEMA = yup.object({
    firstName: yup
        .string()
        .trim()
        .min(2, "Include at least 2+ letters")
        .max(32, "You can include at most 32 letters")
        .matches(/^[A-Z]/, "Start your first name with a capital letter")
        .required("This field is required."),
    lastName: yup
        .string()
        .trim()
        .min(2, "Include at least 2+ letters")
        .max(32, "You can include at most 32 letters")
        .matches(/^[A-Z]/, "Start your last name with a capital letter"),
    userName: yup
        .string()
        .trim()
        .min(1)
        .max(32, "You can include at most 32 characters")
        .matches(
            /[^!@#$%^&*]/,
            "You cannot include such characters in your username",
        )
        .required("This field is required."),
    email: yup.string().trim().email().required("This field is required."),
    password: yup
        .string()
        .trim()
        .min(8, "Include at least 8 characters")
        .max(32, "You can include at most 32 characters")
        .matches(/(?=.*[A-Z])/, "Include at least 1 uppercase letter")
        .matches(/(?=.*[a-z])/, "Include at least 1 lowercase letter")
        .matches(/(?=.*\d)/, "Include at least 1 digit")
        .matches(/(?=.*[!@#$%^&*-_|])/, "Include at least 1 special character")
        .required("This field is required."),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password")])
        .required("This field is required."),
    isAgreed: yup.boolean().oneOf([true], "").required(),
});
