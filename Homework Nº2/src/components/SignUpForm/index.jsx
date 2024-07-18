import { useState } from "react";
import classNames from "classnames";
import styles from "./SignUpForm.module.css";

const SIGNUP_FORM_REGEX = {
    userName: /^([A-Z]?[a-z](\s[A-Z]?[a-z])?){2,26}$/,
    email: /^.+@.+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-_|]).{8,33}$/,
};

function SignUpForm() {
    const [userName, setUserName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@gmail.com");
    const [password, setPassword] = useState("loremlpsum-O0");
    const [isVisible, setIsVisible] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isConfirmVisible, setIsConfirmVisibile] = useState(false);

    const calcClassName = (name, value) => {
        const isValid =
            name !== "passwordConfirm"
                ? SIGNUP_FORM_REGEX[name].test(value)
                : SIGNUP_FORM_REGEX.password.test(value);

        if (name !== "passwordConfirm") {
            return classNames(styles.formInput, {
                [styles.inputValid]: isValid,
                [styles.inputInvalid]: !isValid,
            });
        } else {
            return classNames(styles.formInput, {
                [styles.inputValid]: isValid && value === password,
                [styles.inputInvalid]: !isValid || value !== password,
            });
        }
    };

    const isUnSubmittable = () => {
        return !(
            SIGNUP_FORM_REGEX.userName.test(userName) &&
            SIGNUP_FORM_REGEX.email.test(email) &&
            SIGNUP_FORM_REGEX.password.test(password) &&
            passwordConfirm === password
        );
    };

    const clearFields = () => {
        setUserName("");
        setEmail("");
        setPassword("");
        setIsVisible(false);
        setPasswordConfirm("");
        setIsConfirmVisibile(false);
    };
    const submitHandler = e => {
        e.preventDefault();

        clearFields();
    };

    return (
        <section className={styles.formBox}>
            <header className={styles.formBoxHeader}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-file-pen"></i>
                </div>
                <h1 className={styles.formHeading}>Create your account</h1>
            </header>
            <main className={styles.formBoxMain}>
                <form className={styles.form}>
                    <label className={styles.formLabel}>
                        <span className={styles.labelCaption}>Username</span>
                        <input
                            className={calcClassName("userName", userName)}
                            autoFocus
                            required
                            type="text"
                            name="userName"
                            value={userName}
                            placeholder="Jane Doe"
                            onChange={({ target: { value } }) => {
                                setUserName(value);
                            }}
                        />
                    </label>
                    <label className={styles.formLabel}>
                        <span className={styles.labelCaption}>
                            Email address
                        </span>
                        <input
                            className={calcClassName("email", email)}
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="janedoe@gmail.com"
                            onChange={({ target: { value } }) => {
                                setEmail(value);
                            }}
                        />
                    </label>
                    <label className={styles.formLabel}>
                        <span className={styles.labelCaption}>Password</span>
                        <div className={styles.passwordBox}>
                            <input
                                className={calcClassName("password", password)}
                                required
                                type={isVisible ? "text" : "password"}
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={({ target: { value } }) => {
                                    setPassword(value);
                                }}
                            />
                            <input
                                className={styles.hideCheck}
                                type="checkbox"
                                value={isVisible}
                                onChange={() => setIsVisible(v => !v)}
                            />
                        </div>
                    </label>
                    <label className={styles.formLabel}>
                        <span className={styles.labelCaption}>
                            Password confirmation
                        </span>
                        <div className={styles.passwordBox}>
                            <input
                                className={calcClassName(
                                    "passwordConfirm",
                                    passwordConfirm,
                                )}
                                required
                                type={isConfirmVisible ? "text" : "password"}
                                name="passwordConfirm"
                                value={passwordConfirm}
                                placeholder="Confirm your password"
                                onChange={({ target: { value } }) => {
                                    setPasswordConfirm(value);
                                }}
                            />
                            <input
                                className={styles.hideCheck}
                                type="checkbox"
                                value={isConfirmVisible}
                                onChange={() => setIsConfirmVisibile(v => !v)}
                            />
                        </div>
                    </label>
                    <button
                        className={styles.submitBtn}
                        type="submit"
                        disabled={isUnSubmittable()}
                        onSubmit={submitHandler}
                    >
                        Sign up
                    </button>
                    <span className={styles.signInOption}>
                        I'm already a member! <a href="#">Sign in</a>
                    </span>
                </form>
            </main>
        </section>
    );
}

export default SignUpForm;
