import { Component } from "react";
import PropTypes from "prop-types";
import Slide from "./Slide";
import SliderControlPanel from "./SliderControlPanel";
import styles from "./Slider.module.sass";

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            delay: 5,
            isPaused: true,
        };
        this.timerId = null;
        /* const { currentSlide } = this.state;
           const { slides } = this.props; */ //* Не можу деструктуризувати тут, з якої причини ❓
    }

    get prevSlide() {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        return (currentSlide - 1 + slides.length) % slides.length;
    }
    get nextSlide() {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        return (currentSlide + 1) % slides.length;
    }
    goPrevSlide = () => {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        this.setState({
            currentSlide: (currentSlide - 1 + slides.length) % slides.length,
        });
    };
    goNextSlide = () => {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        this.setState({
            currentSlide: (currentSlide + 1) % slides.length,
        });
    };

    handleState = (state, value) => {
        this.setState({
            [state]: value,
        });
    };

    componentDidUpdate(prevState) {
        const { currentSlide, delay, isPaused } = this.state;

        if (
            currentSlide !== prevState.currentSlide ||
            delay !== prevState.delay ||
            isPaused !== prevState.isPaused
        ) {
            if (!isPaused && !this.timerId) {
                this.timerId = setInterval(() => {
                    this.goNextSlide();
                }, this.state.delay * 1000);
            }
            if (isPaused) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
        }
    }
    componentWillUnmount() {
        this.setState({ isPaused: true });
    }

    render() {
        const { currentSlide, delay, isPaused } = this.state;
        const { slides } = this.props;
        return (
            <article className={styles.sliderBox}>
                <section className={styles.slidesBox}>
                    <Slide {...slides[this.prevSlide]} isPrev />
                    <Slide {...slides[currentSlide]} isCurrent />
                    <Slide {...slides[this.nextSlide]} isNext />
                </section>
                <SliderControlPanel
                    delay={delay}
                    isPaused={isPaused}
                    handleState={this.handleState}
                    goPrevSlide={this.goPrevSlide}
                    goNextSlide={this.goNextSlide}
                />
            </article>
        );
    }
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            src: PropTypes.string,
        }),
    ).isRequired,
};
