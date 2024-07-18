import { useState } from "react";
import styles from "./CardMain.module.css";

function CardMain({
    userData: {
        userCustom: { firstName, lastName },
        userCounts: { postsCount, followingCount, followersCount },
    },
}) {
    const [isLiked, setIsLiked] = useState(false);
    function like() {
        setIsLiked(!isLiked);
    }

    const [countValue, setFollowersCount] = useState(followersCount);
    function follow() {
        setFollowersCount(+countValue + 1);
        alert(`You are now following ${firstName} ${lastName}!`);
    }

    return (
        <main className={styles.cardContent}>
            <section className={styles.countBox}>
                <h3 className={styles.countLabel}>Tweets</h3>
                <p className={styles.count}>{postsCount}</p>
            </section>
            <section className={styles.countBox}>
                <h3 className={styles.countLabel}>Following</h3>
                <p className={styles.count}>{followingCount}</p>
            </section>
            <section className={styles.countBox}>
                <h3 className={styles.countLabel}>Followers</h3>
                <p className={styles.count}>{countValue}</p>
            </section>
            <button
                className={isLiked ? styles.clickedLikeBtn : styles.likeBtn}
                onClick={like}
            >
                <i className="fa-solid fa-star"></i>
            </button>
            <button
                className={styles.followBtn}
                onClick={follow}
                disabled={followersCount < countValue}
            >
                +
            </button>
        </main>
    );
}

export default CardMain;
