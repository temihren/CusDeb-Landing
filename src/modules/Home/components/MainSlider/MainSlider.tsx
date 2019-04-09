import cn from 'classnames';
import React, {PureComponent} from 'react';

import Arrow from 'assets/images/ImageArrowDown';

import Flex from 'common/components/Flex/Flex';
import MainSlide from '../../containers/MainSlideContainer';
import ProgressCircle from './components/ProgressCircle/ProgressCircle';

import styles from './mainSlider.scss';

interface ISlide {
	name: string;
	title: string;
	smallText: any;
}

interface IProps {
	currentSlideIndex: number;
	onSlide: any;
	slideTiming: number;
	mainSlidesOrder: number[];
	resetMainSlider: any;
	onSlideChange: any;
}

interface IState {
	prevSlideTimer: number;
	nextSlideTimer: number;
	mainSlidesContent: ISlide[];
	slidesTimer: any;
}

class MainSlider extends PureComponent<IProps, IState> {
	public state = {
		prevSlideTimer: 0,
		nextSlideTimer: 0,
		slidesTimer: undefined,
		mainSlidesContent: [
			{
				name: 'emulator',
				title: 'Emulator',
				smallText: (
					<>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
							Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec quam felis, ultricies nec
						</p>
						<p>
							Tulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
							a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
							pretium. Integer tincidunt. Cras dapibus.
						</p>
					</>
				),
			},
			{
				name: 'overTheAir',
				title: 'Over the air',
				smallText: (
					<>
						<p>
							Mender is an open source remote software updater for
							embedded Linux devices. It enables management of software
							updates to conected devices remotely over any TCP/IP network.
						</p>
						<p>
							You can simply turn any image into a Mender compatable one,
							selecting “Mender Compatable Image” option, while making your image.
						</p>
					</>
				),
			},
			{
				name: 'emulator',
				title: 'Emulator2',
				smallText: (
					<>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
							Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec quam felis, ultricies nec
						</p>
						<p>
							Tulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
							a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
							pretium. Integer tincidunt. Cras dapibus.
						</p>
					</>
				),
			},
		],
	};

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
		this.onSlide(
			this.props.currentSlideIndex === 0 ? this.props.mainSlidesOrder.length - 1 : this.props.currentSlideIndex - 1,
		);
	}

	public navRight = () => {
		this.onSlide(
			this.props.currentSlideIndex === this.props.mainSlidesOrder.length - 1 ? 0 : this.props.currentSlideIndex + 1,
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

	public onSlideSelect = (index: number) => {
		this.startAutoSlide('right');
		this.onSlide(index);
	}

	public onSlide = (index: number) => {
		this.props.onSlideChange(this.state.mainSlidesContent[index].name);
		this.props.onSlide(index);
	}

	public render() {
		const {prevSlideTimer, nextSlideTimer, mainSlidesContent} = this.state;
		const {slideLeftClick, slideRightClick} = this;
		const {slideTiming, mainSlidesOrder} = this.props;

		return (
			<Flex justifyContent='center' className={styles.sliderWrapper}>
				<Flex justifyContent='center' className={styles.mainContainer}>
					{
						mainSlidesContent.map((slide: any, index: number) => (
							<MainSlide
								slide={slide}
								order={mainSlidesOrder[index]}
								key={index}
								changeSlide={this.onSlideSelect}
								mainSlidesContent={mainSlidesContent}
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
