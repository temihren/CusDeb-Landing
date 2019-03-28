import cn from 'classnames';
import React, {PureComponent} from 'react';

import Flex from 'common/components/Flex/Flex';

import styles from './mainSlider.scss';

interface IProps {
	currentSlide: number;
	onSlide: any;
}

interface IState {
	fadeOut: boolean;
	navLeft: any;
	navRight: any;
}

class MainSlider extends PureComponent<IProps, IState> {
	public slide1 = {
		order: 0,
		content: (
			<Flex
				justifyContent='center'
				className={cn(styles.slideWrapper, styles.emulator)}
				alignItems='center'
			>
				<Flex alignItems='center' justifyContent='center'>
					a
				</Flex>
				<Flex direction='column'>
					b
				</Flex>
			</Flex>
		),
	};

	public isAnimated = false;

	public slide2 = {
		order: 1,
		content: (
			<Flex
				justifyContent='center'
				className={cn(styles.slideWrapper, styles.elevator)}
				alignItems='center'
			>
				<Flex alignItems='center' justifyContent='center'>
					c
				</Flex>
				<Flex direction='column'>
					d
				</Flex>
			</Flex>
		),
	};

	public slide3 = {
		order: 2,
		content: (
			<Flex
				justifyContent='center'
				className={cn(styles.slideWrapper, styles.perforator)}
				alignItems='center'
			>
				<Flex alignItems='center' justifyContent='center'>
					e
				</Flex>
				<Flex direction='column'>
					f
				</Flex>
			</Flex>
		),
	};

	public slides = [this.slide1, this.slide2, this.slide3];

	public navLeft = () => {
		for (const slide of this.slides) {
			if (slide.order === 0) {
				slide.order = this.slides.length - 1;
			} else {
				slide.order = slide.order + 1;
			}
		}
	}

	public navRight = () => {
		for (const slide of this.slides) {
			if (slide.order === this.slides.length - 1) {
				slide.order = 0;
			} else {
				slide.order = slide.order - 1;
			}
		}
	}

	public render() {
		const {navLeft, navRight} = this;

		return (
			<Flex justifyContent='center' className={styles.sliderWrapper}>
				<Flex justifyContent='center' className={styles.mainContainer}>
					{
						this.slides.map((slide: any, index: number) => (
							<div
								key={index}
								className={cn(styles.slide, {
									[styles.slide_current]: slide.order === 0,
									[styles.slide_middle]: slide.order === 1,
									[styles.slide_bottom]: slide.order === 2,
								})}
							>
								{slide.content}
							</div>
						))
					}
					<div onClick={navLeft} className={styles.navLeftArea}>
						<div
							className={styles.arrowLeft}
						/>
					</div>
					<div onClick={navRight} className={styles.navRightArea}>
						<div
							className={styles.arrowRight}
						/>
					</div>
				</Flex>
			</Flex>
		);
	}
}

export default MainSlider;
