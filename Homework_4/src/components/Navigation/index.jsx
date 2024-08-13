import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navigation.module.sass";

export default function Navigation() {
    const linkClassName = ({ isActive }) =>
        classNames(styles.navLink, {
            [styles.activeNavLink]: isActive,
        });

    return (
        <nav>
            <ul className={styles.navBox}>
                {/* <li className={styles.linkWrapper}>
                    <NavLink to="/form">Login form</NavLink>
                </li> */}
                <li className={styles.linkWrapper}>
                    <NavLink to="/" className={linkClassName}>
                        List of users
                    </NavLink>
                </li>
                <li className={styles.linkWrapper}>
                    <NavLink to="/slider" className={linkClassName}>
                        Cosmos pictures
                    </NavLink>
                </li>
                <Outlet />
            </ul>
        </nav>
    );
}
