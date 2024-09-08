import { connect } from "react-redux";
import classNames from "classnames";
import { toggleFav } from "../../assets/store/slices/productSlice";
import styles from "./ProductCard.module.sass";

function ProductCard({ title, src, description, isFav, toggleFav }) {
    const starClassName = classNames(styles.faStar, {
        [styles.isFav]: isFav,
    });

    return (
        <article className={styles.productCard}>
            <header className={styles.productHeader}>
                <h2 className={styles.title}>{title}</h2>
                <img className={styles.picture} src={src} alt={title} />
            </header>
            <main className={styles.productMain}>
                <p className={styles.description}>{description}</p>
                <button className={starClassName} onClick={toggleFav}>
                    <i className="fa-solid fa-star"></i>
                </button>
            </main>
        </article>
    );
}

const mapStateToProps = ({ product }) => product;
const mapDispatchToProps = { toggleFav };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
