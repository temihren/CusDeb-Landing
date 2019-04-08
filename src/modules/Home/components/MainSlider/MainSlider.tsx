import cn from 'classnames';
import React, {PureComponent} from 'react';

import Arrow from 'assets/images/ImageArrowDown';

import Flex from 'common/components/Flex/Flex';
import MainSlide from '../../containers/MainSlideContainer';
import ProgressCircle from './components/ProgressCircle/ProgressCircle';

import styles from './mainSlider.scss';

interface ISlide {
	order: number;
	content: any;
	name: string;
	title: string;
	smallText: any;
	className: string;
}

interface IProps {
	currentSlideIndex: number;
	onSlide: any;
	slideTiming: number;
	mainSlides: ISlide[];
	resetMainSlider: any;
}

interface IState {
	prevSlideTimer: number;
	nextSlideTimer: number;
	slidesTimer: any;
}

class MainSlider extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			prevSlideTimer: 0,
			nextSlideTimer: 0,
			slidesTimer: undefined,
		};
	}

	public componentDidMount() {
		this.props.resetMainSlider();
		this.startAutoSlide('right');
	}

	public componentWillUnmount() {
		clearInterval(this.state.slidesTimer);
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
		}, this.props.slideTiming));

		this.setState(state => ({
			slidesTimer: slideInterval(),
			nextSlideTimer: direction === 'right' ? state.nextSlideTimer + 1 : 0,
			prevSlideTimer: direction === 'left' ? state.prevSlideTimer + 1 : 0,
		}));
	}

	public navLeft = () => {
		this.props.onSlide(
			this.props.currentSlideIndex === 0 ? this.props.mainSlides.length - 1 : this.props.currentSlideIndex - 1,
		);
	}

	public navRight = () => {
		this.props.onSlide(
			this.props.currentSlideIndex === this.props.mainSlides.length - 1 ? 0 : this.props.currentSlideIndex + 1,
		);
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
		const {prevSlideTimer, nextSlideTimer} = this.state;
		const {slideLeftClick, slideRightClick} = this;
		const {slideTiming, mainSlides} = this.props;

		return (
			<Flex justifyContent='center' className={styles.sliderWrapper}>
				<Flex justifyContent='center' className={styles.mainContainer}>
					{
						mainSlides.map((slide: any, index: number) => (
							<MainSlide
								order={slide.order}
								key={index}
								title={slide.title}
								className={slide.name}
								smallText={slide.smallText}
							/>
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
							size={53}
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
