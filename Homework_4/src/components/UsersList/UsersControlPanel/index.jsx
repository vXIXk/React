import classNames from "classnames";
import styles from "./UsersControlPanel.module.sass";

export default function UsersControlPanel({
    gender,
    setGender,
    inputResults,
    setInputResults,
    setResults,
    page,
    handleState,
    goPrevPage,
    goNextPage,
}) {
    return (
        <section className={styles.controlPanel}>
            <div className={styles.optBox}>
                <label className={styles.label}>
                    <span className={styles.labelCaption}>
                        Showing profiles of:
                    </span>
                    <select
                        className={styles.controlledEl}
                        value={gender}
                        onChange={e => handleState(e.target.value, setGender)}
                    >
                        <option value="any">any users</option>
                        <option value="male">male users</option>
                        <option value="female">female users</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <span className={styles.labelCaption}>
                        Number of profiles:
                    </span>
                    <input
                        type="number"
                        className={classNames(
                            styles.controlledEl,
                            styles.numberInput,
                        )}
                        min="5"
                        max="50"
                        value={inputResults}
                        onChange={e =>
                            handleState(e.target.value, setInputResults)
                        }
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                handleState(inputResults, setResults);
                            }
                        }}
                    ></input>
                </label>
            </div>
            <div className={styles.arrowBox}>
                <button
                    className={styles.arrow}
                    onClick={goPrevPage}
                    disabled={page === 1}
                >
                    ◄
                </button>
                <span className={styles.pageNum}> {page} </span>
                <button
                    className={styles.arrow}
                    onClick={goNextPage}
                    disabled={page === 10}
                >
                    ►
                </button>
            </div>
        </section>
    );
}
