import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorImg } from "../../assets/constants";
import styles from "./Error.module.sass";

export default function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        const id = setTimeout(() => navigate("/"), 3000);
        return () => clearTimeout(id);
    });

    return (
        <div className={styles.errorBox}>
            <img className={styles.errorImg} src={errorImg} alt="Error" />
            <p className={styles.error}>
                Error, unable to fetch data: does the requested source exist?
                Please, do try again later.
            </p>
        </div>
    );
}
