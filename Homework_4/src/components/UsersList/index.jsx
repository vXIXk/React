import { useState, useEffect } from "react";
import classNames from "classnames";
import { PacmanLoader } from "react-spinners";
import { loadUsers } from "../../api";
import Error from "../Error";
import UsersControlPanel from "./UsersControlPanel";
import UsersListItem from "./UsersListItem";
import styles from "./UsersList.module.sass";

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState("");
    const [inputResults, setInputResults] = useState(10);
    const [results, setResults] = useState(inputResults);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsFetching(true);
        setError(null);
        loadUsers({
            results,
            gender,
            page,
        })
            .then(({ results }) => setUsers(results))
            .catch(e => setError(e))
            .finally(() => setIsFetching(false));
    }, [results, gender, page]);

    const goPrevPage = () => {
        if (page > 1) {
            setPage(page => page - 1);
        }
    };
    const goNextPage = () => {
        setPage(page => page + 1);
    };
    const handleState = (value, f) => {
        if (value) {
            f(value);
        }
    };

    useEffect(() => {
        const savedPage = +window.localStorage.getItem("page");
        const savedResults = +window.localStorage.getItem("results");
        const savedGender = window.localStorage.getItem("gender", gender);

        handleState(savedResults, setInputResults);
        handleState(savedResults, setResults);
        handleState(savedGender, setGender);
        handleState(savedPage, setPage);
    }, []);
    useEffect(() => {
        window.localStorage.setItem("results", results);
        window.localStorage.setItem("gender", gender);
        window.localStorage.setItem("page", page);
    }, [results, gender, page]);

    return (
        <article
            className={classNames({
                [styles.contentBox]: !error,
            })}
        >
            {isFetching && <PacmanLoader size={"1rem"} speedMultiplier={1} />}
            {error && <Error />}

            {!error && !isFetching && (
                <>
                    <UsersControlPanel
                        gender={gender}
                        setGender={setGender}
                        inputResults={inputResults}
                        setInputResults={setInputResults}
                        setResults={setResults}
                        page={page}
                        handleState={handleState}
                        goPrevPage={goPrevPage}
                        goNextPage={goNextPage}
                    />

                    <ul className={styles.usersList}>
                        {users.map(u => (
                            <UsersListItem key={u.login.uuid} u={u} />
                        ))}
                    </ul>
                </>
            )}
        </article>
    );
}
