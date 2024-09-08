import { Formik, Form, Field, ErrorMessage } from "formik";
import { REGISTER_SCHEMA } from "./../../assets/utils/yupSchemas";
import Input from "./Input";
import styles from "./Form.module.sass";

const classes = {
    label: styles.formLabel,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
    error: styles.error,
};

export default function RegisterForm() {
    const initValues = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isAgreed: false,
    };
    const handleSubmit = (value, formikBag) => {
        formikBag.resetForm();
    };

    return (
        <Formik
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={REGISTER_SCHEMA}
        >
            {({ dirty, isValid }) => {
                return (
                    <article className={styles.formBox}>
                        <header className={styles.formBoxHeader}>
                            <h1 className={styles.formH1}>Create an account</h1>
                            <p className={styles.formIntro}>
                                We always keep your name and email address
                                private.
                            </p>
                        </header>
                        <main className={styles.formBoxMain}>
                            <Form className={styles.form}>
                                <div className={styles.labelPairWrapper}>
                                    <Input
                                        classes={classes}
                                        type="text"
                                        name="firstName"
                                        placeholder="Jane"
                                    />
                                    <Input
                                        classes={classes}
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                    />
                                </div>
                                <div className={styles.labelPairWrapper}>
                                    <Input
                                        classes={classes}
                                        type="text"
                                        name="userName"
                                        placeholder="janedaw"
                                    />
                                    <Input
                                        classes={classes}
                                        type="email"
                                        name="email"
                                        placeholder="qwerty@email.tld"
                                    />
                                </div>
                                <div className={styles.labelPairWrapper}>
                                    <Input
                                        classes={classes}
                                        type="password"
                                        name="password"
                                        placeholder="Your password"
                                    />
                                    <Input
                                        classes={classes}
                                        type="password"
                                        name="passwordConfirmation"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                                <label
                                    className={`${styles.formLabel} ${styles.radioLabel}`}
                                >
                                    <Field type="checkbox" name="isAgreed" />
                                    <span>
                                        By checking this, you agree to our
                                        <a className={styles.link} href="#">
                                            Terms Of Service.
                                        </a>
                                    </span>
                                </label>
                                <button
                                    className={styles.submitBtn}
                                    type="submit"
                                    disabled={!(dirty && isValid)}
                                >
                                    Create account
                                </button>
                            </Form>
                        </main>
                    </article>
                );
            }}
        </Formik>
    );
}
