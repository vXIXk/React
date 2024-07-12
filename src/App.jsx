import "./assets/index.css";
import styles from "./assets/App.module.css";
//
import Header from "./components/Header";
import Main from "./components/Main";

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
      return (
            <>
                  <article
                        className={
                              user.userCustom.gender === "female"
                                    ? styles.userCardF
                                    : user.userCustom.gender === "male"
                                    ? styles.userCardM
                                    : styles.userCardN
                        }
                  >
                        <Header
                              firstName={user.userCustom.firstName}
                              lastName={user.userCustom.lastName}
                              userName={user.userCustom.userName}
                              pfpSrc={user.userCustom.pfpSrc}
                        />
                        <Main
                              firstName={user.userCustom.firstName}
                              lastName={user.userCustom.lastName}
                              postsCount={user.userCounts.postsCount}
                              followingCount={user.userCounts.followingCount}
                              followersCount={user.userCounts.followersCount}
                        />
                  </article>
            </>
      );
}

export default App;
