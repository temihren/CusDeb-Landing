import cn from 'classnames';
import React, {PureComponent} from 'react';

import Arrow from 'assets/images/ImageArrowDown';
import Terminal from 'assets/images/terminalWindow.svg';

import Flex from 'common/components/Flex/Flex';

import styles from './mainSlider.scss';

interface IProps {
	currentSlide: number;
	onSlide: any;
}

interface ISlide {
	order: number;
	content: any;
}

interface IState {
	slides: ISlide[];
	isAnimated: boolean;
}

class MainSlider extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isAnimated: false,
			slides: [
				{
					order: 0,
					content: (
						<Flex
							justifyContent='space-between'
							className={cn(styles.slideWrapper, styles.emulator)}
							alignItems='center'
						>
							<Flex
								alignItems='center'
								justifyContent='center'
								className={styles.slidePicture}
							>
								<Flex
									alignItems='center'
									justifyContent='center'
									className={styles.slidePictureEmulatorWrapper}
								>
									<div
										className={cn(
											styles.slidePictureCircle,
											styles.slidePictureEmulatorCircle,
										)}
									/>
									<div className={styles.slidePictureImage}>
										<img src={Terminal} alt=''/>
									</div>
								</Flex>
							</Flex>
							<Flex
								direction='column'
								justifyContent='center'
								alignItems='flex-start'
								className={styles.slideContent}
							>
								<p className={styles.slideContentTitle}>
									Emulator
								</p>
								<hr className={styles.slideContentLine}/>
								<hr className={styles.slideContentLine}/>
								<p className={styles.slideContentSmallText}>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
									ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
									parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec
								</p>
								<p className={styles.slideContentSmallText}>
									Tulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
									justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
								</p>
								<div className={styles.slideContentButton}>
									Learn more
								</div>
							</Flex>
							<div className={styles.slideRightBar}>
								<Flex
									direction='column'
									alignItems='center'
									justifyContent='space-between'
									className={styles.slideRightBarMenu}
								>
									<span />
									<span />
									<span />
								</Flex>
								<div className={styles.slideRightBarText}>
									Updates over the air
								</div>
							</div>
						</Flex>
					),
				},
				{
					order: 1,
					content: (
						<Flex
							justifyContent='space-between'
							className={cn(styles.slideWrapper, styles.overTheAir)}
							alignItems='center'
						>
							<Flex
								alignItems='center'
								justifyContent='center'
								className={styles.slidePicture}
							>
								<Flex
									alignItems='center'
									justifyContent='center'
									className={styles.slidePictureEmulatorWrapper}
								>
									<div
										className={cn(
											styles.slidePictureCircle,
											styles.slidePictureEmulatorCircle,
										)}
									/>
									<div className={styles.slidePictureImage}>
										<img src={Terminal} alt=''/>
									</div>
								</Flex>
							</Flex>
							<Flex
								direction='column'
								justifyContent='center'
								alignItems='flex-start'
								className={styles.slideContent}
							>
								<p className={styles.slideContentTitle}>
									Over the air
								</p>
								<hr className={styles.slideContentLine}/>
								<hr className={styles.slideContentLine}/>
								<p className={styles.slideContentSmallText}>
									Mender is an open source remote software updater for embedded
									Linux devices. It enables management of software updates to conected
									devices remotely over any TCP/IP network.
								</p>
								<p className={styles.slideContentSmallText}>
									You can simply turn any image into a Mender compatable one,
									selecting “Mender Compatable Image” option, while making your image.
								</p>
								<div className={styles.slideContentButton}>
									Learn more
								</div>
							</Flex>
							<div className={styles.slideRightBar}>
								<Flex
									direction='column'
									alignItems='center'
									justifyContent='space-between'
									className={styles.slideRightBarMenu}
								>
									<span />
									<span />
									<span />
								</Flex>
								<div className={styles.slideRightBarText}>
									Updates over the air
								</div>
							</div>
						</Flex>
					),
				},
				{
					order: 2,
					content: (
						<Flex
							justifyContent='space-between'
							className={cn(styles.slideWrapper, styles.emulator)}
							alignItems='center'
						>
							<Flex
								alignItems='center'
								justifyContent='center'
								className={styles.slidePicture}
							>
								<Flex
									alignItems='center'
									justifyContent='center'
									className={styles.slidePictureEmulatorWrapper}
								>
									<div className={styles.slidePictureEmulatorCircle} />
									text
								</Flex>
							</Flex>
							<Flex
								direction='column'
								justifyContent='center'
								alignItems='flex-start'
								className={styles.slideContent}
							>
								<p className={styles.slideContentTitle}>
									Emulator2
								</p>
								<hr className={styles.slideContentLine}/>
								<hr className={styles.slideContentLine}/>
								<p className={styles.slideContentSmallText}>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
									ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
									parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec
								</p>
								<p className={styles.slideContentSmallText}>
									Tulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
									justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
								</p>
								<div className={styles.slideContentButton}>
									Learn more
								</div>
							</Flex>
							<div className={styles.slideRightBar}>
								<Flex
									direction='column'
									alignItems='center'
									justifyContent='space-between'
									className={styles.slideRightBarMenu}
								>
									<span />
									<span />
									<span />
								</Flex>
								<div className={styles.slideRightBarText}>
									Updates over the air
								</div>
							</div>
						</Flex>
					),
				},
			],
		};
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

	public render() {
		const {slides, isAnimated} = this.state;
		const {navLeft, navRight} = this;

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
						onClick={navLeft}
						className={styles.arrowLeft}
						justifyContent='center'
						alignItems='center'
					>
						<Arrow
							fill='rgba(255, 255, 255, 0.4)'
							className={cn(
								styles.mainSliderNavigationArrow,
								styles.arrowLeftIcon,
							)}
						/>
					</Flex>
					<Flex
						onClick={navRight}
						className={styles.arrowRight}
						justifyContent='center'
						alignItems='center'
					>
						<Arrow
							fill='rgba(255, 255, 255, 0.4)'
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
