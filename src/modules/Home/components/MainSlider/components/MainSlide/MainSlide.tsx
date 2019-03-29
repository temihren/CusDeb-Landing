import cn from 'classnames';
import React, {PureComponent} from 'react';

import Terminal from 'assets/images/terminalWindow.svg';
import Flex from 'common/components/Flex/Flex';
import styles from './mainSlide.scss';

interface IProps {
	currentSlideIndex: number;
	title: string;
	mainSlidesLength: number;
	smallText: any;
	order: number;
	isAnimated: boolean;
	className: 'string';
	mainSlides: any[];
	onSlideChange: any;
}

interface IState {
	isMenuOpen: boolean;
}

class MainSlide extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isMenuOpen: false,
		};
	}

	public componentDidUpdate(props: IProps) {
		if (props.order !== this.props.order) {
			this.setState({isMenuOpen: false});
		}
	}

	public toggleRightSideBar = () => {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen,
		}));
	}

	public changeSlide = (index: number) => {
		this.props.onSlideChange(index);
	}

	public render() {
		const {
			title,
			smallText,
			mainSlidesLength,
			currentSlideIndex,
			order,
			isAnimated,
			className,
			mainSlides,
		} = this.props;

		const {isMenuOpen} = this.state;

		const pagination = [];
		for (let i = 0; i < mainSlidesLength; i++) {
			pagination.push((
				<div
					key={i}
					className={cn(
						styles.slidePaginationPoint, {
						[styles.slidePaginationPoint_active]: i === currentSlideIndex,
					})}
				/>
			));
		}

		const rightSideMenuList: any = [];
		for (const slide of mainSlides) {
			rightSideMenuList.push((
				<div
					key={slide.title}
					className={cn(styles.slideRightBarListItem, {
						[styles.slideRightBarListItem_disabled]: mainSlides.indexOf(slide) === currentSlideIndex,
					})}
					onClick={() => this.changeSlide(mainSlides.indexOf(slide))}
				>
					{slide.title}
				</div>
			));
		}

		return (
			<div
				className={cn(styles.slide, {
					[styles.slide_top]: order === 0,
					[styles.slide_middle]: order > 0 && order < mainSlidesLength - 1,
					[styles.slide_bottom]: order === mainSlidesLength - 1,
					[styles.animated]: isAnimated,
				})}
				style={{zIndex: -order + 20}}
			>
				<Flex
					justifyContent='space-between'
					className={cn(styles.slideWrapper, styles[className])}
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
								<img src={Terminal} alt='' />
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
							{title}
						</p>
						<hr className={styles.slideContentLine} />
						<hr className={styles.slideContentLine} />
						<div className={styles.slideContentSmallText}>{smallText}</div>
						<div className={styles.slideContentButton}>
							Learn more
						</div>
					</Flex>
					<div
						onClick={this.toggleRightSideBar}
						className={cn(styles.slideRightBar, {
							[styles.slideRightBar_open]: isMenuOpen,
						})}
					>
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
						<Flex
							direction='column'
							alignItems='flex-end'
							className={styles.slideRightBarList}
						>
							{rightSideMenuList}
						</Flex>
						<div className={styles.slideRightBarText}>
							{title}
						</div>
					</div>
					<Flex
						direction='column'
						alignItems='center'
						justifyContent='center'
						className={styles.slidePagination}
					>
						{pagination}
					</Flex>
				</Flex>
			</div>
		);
	}
}

export default MainSlide;
