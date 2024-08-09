import { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Slide.module.sass";

export default class Slide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, description, src, isPrev, isCurrent, isNext } =
            this.props;

        const slideClassName = classNames(styles.slide, {
            [styles.prevSlide]: isPrev,
            [styles.currentSlide]: isCurrent,
            [styles.nextSlide]: isNext,
        });

        return (
            <>
                <figure className={slideClassName}>
                    <img className={styles.slideImg} src={src} alt={title} />
                    <figcaption className={styles.slideCaption}>
                        <h2 className={styles.slideTitle}>{title}</h2>
                        <p className={styles.slideDesc}>{description}</p>
                    </figcaption>
                </figure>
            </>
        );
    }
}

Slide.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
    isCurrent: PropTypes.bool,
};
