import cn from 'classnames';
import React, {PureComponent} from 'react';

import Arrow from 'assets/images/ImageArrowDown';

import Flex from 'common/components/Flex/Flex';
import ProgressCircle from './components/ProgressCircle/ProgressCircle';

import findNextIndex from 'utils/findNextIndex';
import styles from './mainSlider.scss';

interface ISlide {
	name: string;
	title: any;
	smallText: any;
}

interface IProps {
	slides: any[];
	nextSlideDelay: number;
	onSlideChange: any;
	style?: any;
}

interface IState {
	prevSlideTimer: number;
	nextSlideTimer: number;
	slidesTimer: any;
	isAnimated: boolean;
	slidesToShow: any;
	isMenuOpen: boolean;
}

class MainSlider extends PureComponent<IProps, IState> {
	public state = {
		prevSlideTimer: 0,
		nextSlideTimer: 0,
		slidesTimer: 0,
		isAnimated: false,
		isMenuOpen: false,
		slidesToShow: Array.from(Array(this.props.slides.length).keys()),
	};

	public componentDidMount() {
		this.setState({isAnimated: true});
		this.startAutoSlide('right');
	}

	public setCurrentSlide = (index: number) => {
		this.setState({
			slidesToShow: findNextIndex(index, this.state.slidesToShow.length),
			isAnimated: false,
		});

		this.props.onSlideChange(this.props.slides[index].name);

		setTimeout(() => {
			this.setState({isAnimated: true});
		}, 0);
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
		}, this.props.nextSlideDelay));

		this.setState(state => ({
			slidesTimer: slideInterval(),
			nextSlideTimer: direction === 'right' ? state.nextSlideTimer + 1 : 0,
			prevSlideTimer: direction === 'left' ? state.prevSlideTimer + 1 : 0,
		}));
	}

	public toggleRightSideBar = () => {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen,
		}));
	}

	public navLeft = () => {
		const {slidesToShow} = this.state;
		this.setCurrentSlide(
			slidesToShow[0] === 0
			? this.props.slides.length - 1
			: slidesToShow[0] - 1,
		);
		this.startAutoSlide('left');
	}

	public navRight = () => {
		const {slidesToShow} = this.state;
		this.setCurrentSlide(
			slidesToShow[0] === this.props.slides.length - 1
			? 0
			: slidesToShow[0] + 1,
		);
		this.startAutoSlide('right');
	}

	public selectSlide = (index: number) => {
		if (index !== this.state.slidesToShow[0]) {
			this.setCurrentSlide(index);
			this.startAutoSlide('right');
		}
	}

	public componentWillUnmount() {
		clearInterval(this.state.slidesTimer);
	}

	public render() {
		const {prevSlideTimer, nextSlideTimer, slidesToShow, isAnimated} = this.state;
		const {nextSlideDelay, slides, style} = this.props;

		return (
			<Flex justifyContent='center' className={styles.sliderWrapper}>
				<Flex justifyContent='center' className={styles.mainContainer} style={style}>
					{
						slidesToShow.map((slideIndex: number, index: number) => (
							<div
								className={cn(styles.slide, {
									[styles.slide_top]: index === 0,
									[styles.slide_middle]: index === 1,
									[styles.slide_bottom]: index === 2,
									[styles.animated]: isAnimated,
								})}
								key={`${slideIndex} ${index}`}
								style={{zIndex: -index + 20}}
							>
								{slides[slideIndex].content}
							</div>
						))
					}
					<Flex
						onClick={this.navLeft}
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
							timing={nextSlideDelay}
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
						onClick={this.navRight}
						className={styles.arrowRight}
						justifyContent='center'
						alignItems='center'
					>
						<ProgressCircle
							trackFill={'transparent'}
							fill={'rgba(255, 255, 255, 0.5)'}
							progress={nextSlideTimer}
							size={53}
							timing={nextSlideDelay}
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
					<div
						onClick={this.toggleRightSideBar}
						className={cn(styles.rightBar, {
							[styles.rightBar_open]: this.state.isMenuOpen,
							[styles.animated]: isAnimated,
						})}
					>
						<Flex
							direction='column'
							alignItems='center'
							justifyContent='space-between'
							className={styles.rightBarMenu}
						>
							<span /><span /><span />
						</Flex>
						<Flex
							direction='column'
							alignItems='flex-end'
							className={styles.rightBarList}
						>
							{
								slides.map((slide, index: number) => (
									<div
										key={index}
										className={cn(styles.rightBarListItem, {
											[styles.rightBarListItem_disabled]: index === slidesToShow[0],
										})}
										onClick={() => this.selectSlide(index)}
									>
										{slide.title}
									</div>
								))
							}
						</Flex>
						<div className={styles.rightBarText}>
							{slides[slidesToShow[0]].title}
						</div>
					</div>
					<Flex
						direction='column'
						alignItems='center'
						justifyContent='center'
						className={styles.pagination}
					>
						{
							slides.map((slide, index: number) => (
								<div
									key={index}
									className={cn(
										styles.paginationPoint, {
										[styles.paginationPoint_active]: index === slidesToShow[0],
									})}
								/>
							))
						}
					</Flex>
				</Flex>
			</Flex>
		);
	}
}

export default MainSlider;
