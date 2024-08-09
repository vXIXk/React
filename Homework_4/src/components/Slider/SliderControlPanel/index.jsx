import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SliderControlPanel.module.sass";

export default class SliderControlPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { delay, isPaused, handleState, goPrevSlide, goNextSlide } =
            this.props;

        return (
            <section className={styles.controlPanel}>
                <div className={styles.arrowBox}>
                    <button className={styles.arrow} onClick={goPrevSlide}>
                        ◄
                    </button>
                    <button className={styles.arrow} onClick={goNextSlide}>
                        ►
                    </button>
                </div>
                <label>
                    <span>Slide changing in:</span>
                    <input
                        className={styles.secsInput}
                        type="number"
                        min="1"
                        max="10"
                        value={delay}
                        onChange={e => handleState("delay", e.target.value)}
                    />
                </label>
                <button
                    className={styles.pauseBtn}
                    onClick={() => handleState("isPaused", !isPaused)}
                >
                    {isPaused ? "Play" : "Pause"}
                </button>
            </section>
        );
    }
}

SliderControlPanel.propTypes = {
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isPaused: PropTypes.bool.isRequired,
    goPrevSlide: PropTypes.func.isRequired,
    goNextSlide: PropTypes.func.isRequired,
    handleState: PropTypes.func.isRequired,
};
