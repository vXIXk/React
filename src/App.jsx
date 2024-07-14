import "./assets/index.css";
import classNames from "classnames";
import styles from "./assets/App.module.css";
//
import CardHeader from "./components/CardHeader";
import CardMain from "./components/CardMain";

const user = {
    userCustom: {
        firstName: "Emma",
        lastName: "Watson",
        userName: "EmWatson",
        pfpSrc: "https://pbs.twimg.com/media/DSDtu--UEAAJ4-H.jpg:large",
        gender: "female",
    },
    userCounts: {
        postsCount: "1,337",
        followingCount: "561",
        followersCount: "718",
    },
};

function App() {
    const cardClassName = classNames(styles.userCard, {
        [styles.userCardF]: user.userCustom.gender === "female",
        [styles.userCardM]: user.userCustom.gender === "male",
        [styles.userCardN]: !user.userCustom.gender,
    });

    return (
        <>
            <article className={cardClassName}>
                <CardHeader userData={user.userCustom} />
                <CardMain userData={user} />
            </article>
        </>
    );
}

export default App;
