import { Formik, Form } from "formik";
import { LOGIN_SCHEMA } from "../../assets/utils/yupSchemas";
import Input from "./FormsAssets/Input";
import styles from "./FormsAssets/Forms.module.sass";

export const classes = {
    label: styles.formLabel,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
    error: styles.error,
};

export default function LoginForm() {
    const initValues = { email: "", password: "" };
    const handleSubmit = (value, formikBag) => {
        formikBag.resetForm();
    };

    return (
        <Formik
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={LOGIN_SCHEMA}
        >
            {({ dirty, isValid }) => (
                <article className={styles.formBox}>
                    <header className={styles.formBoxHeader}>
                        <h1
                            className={`${styles.formH1} ${styles.loginFormH1}`}
                        >
                            Login to your account
                        </h1>
                    </header>
                    <main className={styles.formBoxMain}>
                        <Form className={styles.form}>
                            <Input
                                classes={classes}
                                type="email"
                                name="email"
                                placeholder="qwerty@email.tld"
                            />
                            <Input
                                classes={classes}
                                type="password"
                                name="password"
                                placeholder="Your password"
                            />
                            <button
                                className={`${styles.submitBtn} ${styles.loginSubmitBtn}`}
                                type="submit"
                                disabled={!(dirty && isValid)}
                            >
                                Login
                            </button>
                        </Form>
                    </main>
                </article>
            )}
        </Formik>
    );
}
