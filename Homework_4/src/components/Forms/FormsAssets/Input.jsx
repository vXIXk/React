import { Field } from "formik";
import classNames from "classnames";

export default function Input({ classes, name, ...restProps }) {
    return (
        <Field name={name}>
            {({ field, meta: { error, touched } }) => {
                const className = classNames(classes.input, {
                    [classes.valid]: !error && touched,
                    [classes.invalid]: error && touched,
                });

                return (
                    <label className={classes.label}>
                        <input
                            className={className}
                            {...restProps}
                            {...field}
                        />
                        {error && touched && (
                            <span className={classes.error}>{error}</span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
}
