import cn from 'classnames';
import React from 'react';

import Terminal from 'assets/images/terminalWindow.svg';
import Flex from 'common/components/Flex/Flex';
import styles from './mainSlider.scss';

const mainSlides = [
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
						Emulator
				</p>
					<hr className={styles.slideContentLine} />
					<hr className={styles.slideContentLine} />
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
						Over the air
				</p>
					<hr className={styles.slideContentLine} />
					<hr className={styles.slideContentLine} />
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
					<hr className={styles.slideContentLine} />
					<hr className={styles.slideContentLine} />
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
];

export default mainSlides;
