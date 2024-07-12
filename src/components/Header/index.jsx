import styles from "./Header.module.css";

function Header({ firstName, lastName, userName, pfpSrc }) {
      return (
            <header className={styles.cardHeader}>
                  <img
                        className={styles.pfp}
                        src={pfpSrc}
                        alt="Profile picture"
                  />
                  <div className={styles.namesBox}>
                        <h2
                              className={styles.shownName}
                        >{`${firstName} ${lastName}`}</h2>
                        <h3 className={styles.userName}>{`@${userName}`}</h3>
                  </div>
            </header>
      );
}

export default Header;
