import cn from 'classnames';
import React, {PureComponent} from 'react';

import Terminal from 'assets/images/terminalWindow.svg';
import Flex from 'common/components/Flex/Flex';
import styles from './mainSlide.scss';

interface ISlide {
	name: string;
	title: string;
	smallText: any;
}

interface IProps {
	mainSlidesLength: number;
	slide: ISlide;
	currentSlideIndex: number;
	changeSlide: any;
	isAnimated: boolean;
	order: number;
	mainSlidesOrder: number[];
	mainSlidesContent: ISlide[];
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

	public render() {
		const {
			mainSlidesLength,
			currentSlideIndex,
			order,
			isAnimated,
			changeSlide,
			slide,
			mainSlidesContent,
		} = this.props;

		const {isMenuOpen} = this.state;

		const pagination = [];
		for (let i = 0; i < mainSlidesContent.length; i++) {
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
		for (let i = 0; i < mainSlidesContent.length; i++) {
			rightSideMenuList.push((
				<div
					key={i}
					className={cn(styles.slideRightBarListItem, {
						[styles.slideRightBarListItem_disabled]: i === currentSlideIndex,
					})}
					onClick={() => changeSlide(i)}
				>
					{mainSlidesContent[i].title}
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
					className={cn(styles.slideWrapper, styles[slide.name])}
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
							{slide.title}
						</p>
						<hr className={styles.slideContentLine} />
						<hr className={styles.slideContentLine} />
						<div className={styles.slideContentSmallText}>{slide.smallText}</div>
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
							<span /><span /><span />
						</Flex>
						<Flex
							direction='column'
							alignItems='flex-end'
							className={styles.slideRightBarList}
						>
							{rightSideMenuList}
						</Flex>
						<div className={styles.slideRightBarText}>
							{slide.title}
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
