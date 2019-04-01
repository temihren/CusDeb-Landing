import cn from 'classnames';
import React, {PureComponent} from 'react';

import Arrow from 'assets/images/ImageArrowDown';
import Flex from 'common/components/Flex/Flex';
import ProgressCircle from './components/ProgressCircle/ProgressCircle';
import mainSlides from './slides';

import styles from './mainSlider.scss';

interface IProps {
	currentSlide: number;
	onSlide: any;
	slideTiming: number;
}

interface ISlide {
	order: number;
	content: any;
}

interface IState {
	slides: ISlide[];
	prevSlideTimer: number;
	nextSlideTimer: number;
	slidesTimer: any;
	isAnimated: boolean;
}

class MainSlider extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isAnimated: false,
			prevSlideTimer: 0,
			nextSlideTimer: 0,
			slides: mainSlides,
			slidesTimer: undefined,
		};
	}

	public componentDidMount() {
		this.startAutoSlide('right');
	}

	public startAutoSlide = (direction: string) => {
		clearInterval(this.state.slidesTimer);

		const slideInterval = () => (setInterval(() => {
			if (direction === 'right') {
				this.navRight();
				this.setState(state => ({nextSlideTimer: state.nextSlideTimer + 1}));
			} else {
				this.navLeft();
				this.setState(state => ({prevSlideTimer: state.prevSlideTimer + 1}));
			}
		}, this.props.slideTiming * 1000));

		this.setState(state => ({
			slidesTimer: slideInterval(),
			nextSlideTimer: direction === 'right' ? state.nextSlideTimer + 1 : 0,
			prevSlideTimer: direction === 'left' ? state.prevSlideTimer + 1 : 0,
		}));
	}

	public navLeft = () => {
		this.props.onSlide(this.props.currentSlide === 0 ? this.state.slides.length - 1 : this.props.currentSlide - 1);
		this.setState(state => ({
			...state,
			slides: state.slides.map(slide => ({
				...slide,
				order: (slide.order === state.slides.length - 1) ? 0 : slide.order + 1,
			})),
			isAnimated: true,
		}));
	}

	public navRight = () => {
		this.props.onSlide(this.props.currentSlide === this.state.slides.length - 1 ? 0 : this.props.currentSlide + 1);
		this.setState(state => ({
			...state,
			slides: state.slides.map(slide => ({
				...slide,
				order: (slide.order === 0) ? state.slides.length - 1 : slide.order - 1,
			})),
			isAnimated: true,
		}));
	}

	public slideRightClick = () => {
		this.navRight();
		this.startAutoSlide('right');
	}

	public slideLeftClick = () => {
		this.navLeft();
		this.startAutoSlide('left');
	}

	public render() {
		const {slides, isAnimated, prevSlideTimer, nextSlideTimer} = this.state;
		const {slideLeftClick, slideRightClick} = this;
		const {slideTiming} = this.props;

		return (
			<Flex justifyContent='center' className={styles.sliderWrapper}>
				<Flex justifyContent='center' className={styles.mainContainer}>
					{
						slides.map((slide: any, index: number) => (
							<div
								key={index}
								className={cn(styles.slide, {
									[styles.slide_top]: slide.order === 0,
									[styles.slide_middle]: slides.length > 2 ? slide.order === 1 : false,
									[styles.slide_bottom]: slide.order === slides.length - 1,
									[styles.animated]: isAnimated,
								})}
								style={{zIndex: -slide.order + 50}}
							>
								{slide.content}
							</div>
						))
					}
					<Flex
						onClick={slideLeftClick}
						className={styles.arrowLeft}
						justifyContent='center'
						alignItems='center'
					>
						<ProgressCircle
							trackFill={'transparent'}
							fill={'rgba(255, 255, 255, 0.5)'}
							progress={prevSlideTimer}
							size={54}
							width={3}
							timing={slideTiming}
							className={styles.progressCircle}
						/>
						<Arrow
							fill='rgba(255, 255, 255, 0.5)'
							className={cn(
								styles.mainSliderNavigationArrow,
								styles.arrowLeftIcon,
							)}
						/>
					</Flex>
					<Flex
						onClick={slideRightClick}
						className={styles.arrowRight}
						justifyContent='center'
						alignItems='center'
					>
						<ProgressCircle
							trackFill={'transparent'}
							fill={'rgba(255, 255, 255, 0.5)'}
							progress={nextSlideTimer}
							size={54}
							timing={slideTiming}
							width={3}
							className={styles.progressCircle}
						/>
						<Arrow
							fill='rgba(255, 255, 255, 0.5)'
							className={cn(
								styles.mainSliderNavigationArrow,
								styles.arrowRightIcon,
							)}
						/>
					</Flex>
				</Flex>
			</Flex>
		);
	}
}

export default MainSlider;
