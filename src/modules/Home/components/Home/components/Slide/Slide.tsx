import cn from 'classnames';
import React, {PureComponent} from 'react';
import {Trans} from 'react-i18next';

import Terminal from 'assets/images/terminalWindow.svg';
import Flex from 'common/components/Flex/Flex';
import styles from './slide.scss';

import {IProps} from './slide.d';

class Slide extends PureComponent<IProps> {
	public render() {
		const {
			name,
			title,
			className,
			smallText,
		} = this.props;

		return (
			<div
				className={cn(styles.slide, className)}
			>
				<Flex
					justifyContent='space-between'
					className={styles.slideWrapper}
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
						<div className={styles.slideContentSmallText}><p>{smallText}</p></div>
						<div className={styles.slideContentButton}>
							<Trans i18nKey={'Home.LearnMore'}/>
						</div>
					</Flex>
				</Flex>
			</div>
		);
	}
}

export default Slide;
