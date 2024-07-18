import styles from "./CardHeader.module.css";

function CardHeader({ userData: { firstName, lastName, userName, pfpSrc } }) {
    return (
        <header className={styles.cardHeader}>
            <img className={styles.pfp} src={pfpSrc} alt="Profile picture" />
            <div className={styles.namesBox}>
                <h2
                    className={styles.shownName}
                >{`${firstName} ${lastName}`}</h2>
                <h3 className={styles.userName}>{`@${userName}`}</h3>
            </div>
        </header>
    );
}

export default CardHeader;
