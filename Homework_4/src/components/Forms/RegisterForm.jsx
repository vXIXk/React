import { Formik, Form, Field, ErrorMessage } from "formik";
import { REGISTER_SCHEMA } from "../../assets/utils/yupSchemas";
import { classes } from "./LoginForm";
import Input from "./FormsAssets/Input";
import styles from "./FormsAssets/Forms.module.sass";

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
                            <h1
                                className={`${styles.formH1} ${styles.registerFormH1}`}
                            >
                                Create an account
                            </h1>
                            <p className={styles.registerFormIntro}>
                                We always keep your name and email address
                                private.
                            </p>
                        </header>
                        <main className={styles.formBoxMain}>
                            <Form className={styles.form}>
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
                                <label
                                    className={`${styles.formLabel} ${styles.radioLabel}`}
                                >
                                    <input
                                        type="checkbox"
                                        name="isAgreed"
                                        required
                                    />
                                    <span className={styles.isAgreed}>
                                        By checking this, you agree to our
                                        <a className={styles.link} href="#">
                                            Terms Of Service.
                                        </a>
                                    </span>
                                </label>
                                <button
                                    className={`${styles.submitBtn} ${styles.registerSubmitBtn}`}
                                    type="submit"
                                    disabled={!(dirty && isValid)}
                                >
                                    Login
                                </button>
                            </Form>
                        </main>
                    </article>
                );
            }}
        </Formik>
    );
}
