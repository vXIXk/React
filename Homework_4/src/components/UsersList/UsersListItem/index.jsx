import classNames from "classnames";
import PropTypes from "prop-types";
import { COUNTRY_FLAGS } from "./../../../assets/constants";
import { COUNTRY_NAMES } from "./../../../assets/constants";
import styles from "./UsersListItem.module.sass";

export default function UsersListItem({
    u: {
        login,
        name: { first, last },
        gender,
        dob: { age },
        nat,
        picture: { large: pfpSrc },
    },
}) {
    const pfpClassName = classNames(styles.pfp, {
        [styles.pfpM]: gender === "male",
        [styles.pfpF]: gender === "female",
    });

    return (
        <li className={styles.usersListItem} key={login.salt}>
            <section className={styles.userBox}>
                <header className={styles.userHeader}>
                    <img
                        className={pfpClassName}
                        src={pfpSrc}
                        alt="Profile picture"
                    />
                    <h2 className={styles.userName}>
                        {first} {last}
                    </h2>
                </header>
                <main className={styles.userMain}>
                    <p className={styles.userGender}>{gender}</p>
                    <p className={styles.userAge}>{age} years old</p>
                    <p className={styles.flagIcon}>{COUNTRY_FLAGS.get(nat)}</p>
                    <p className={styles.userCountry}>
                        {COUNTRY_NAMES.get(nat)}
                    </p>
                </main>
            </section>
        </li>
    );
}

UsersListItem.propTypes = {
    u: PropTypes.object.isRequired,
};
