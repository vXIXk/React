import classNames from "classnames";
import styles from "./NewsListItem.module.css";

function NewsListItem({
    item: { id, title, headerBgSrc, category, body: content, date, isSelected },
    itemIndex,
    selectItem,
}) {
    const itemClassName = classNames(styles.newsItem, {
        [styles.selected]: isSelected,
    });

    const selectHandler = () => selectItem(itemIndex);

    return (
        <li key={id} onClick={selectHandler} className={itemClassName}>
            <article className={styles.newsCard}>
                <header className={styles.newsHeader}>
                    <div
                        className={styles.bgImg}
                        style={{
                            backgroundImage: `url(${headerBgSrc})`,
                        }}
                    ></div>
                    <h2 className={styles.title}>{title}</h2>
                </header>
                <main className={styles.newsMain}>
                    <h3 className={styles.category}>{category}</h3>
                    <p className={styles.content}>{content}</p>
                </main>
                <footer className={styles.newsFooter}>
                    <p className={styles.date}>{date}</p>
                </footer>
            </article>
            <button className={styles.delBtn}>
                <i className="fa-solid fa-ban"></i>
            </button>
            <button className={styles.likeBtn}>
                <i className="fa-solid fa-heart"></i>
            </button>
        </li>
    );
}

export default NewsListItem;
