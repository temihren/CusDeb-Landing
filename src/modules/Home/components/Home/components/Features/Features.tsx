import cn from 'classnames';
import Flex from 'common/components/Flex/Flex';
import React from 'react';
import {Trans} from 'react-i18next';

import ChipIcon from 'assets/images/ChipIcon';
import devicesSVG from 'assets/images/devices.svg';
import openedBookSVG from 'assets/images/openedBook.svg';

import styles from './features.scss';

const Features = () => (
	<>
		<div className={cn(styles.diagonal, styles.diagonalRight, styles.formFactors)}>
			<div className={styles.formFactorsBackground}/>
			<Flex alignItems='center' className={styles.homeContainer} justifyContent='flex-end'>
				<Flex
					className={cn(styles.contentSection, styles.contentSectionRight)}
					alignItems='center'
				>
					<Flex
						className={styles.contentSectionCircle}
						justifyContent='center'
						alignItems='center'
					>
						<img className={styles.contentSectionCircleImg} src={devicesSVG} alt='' />
					</Flex>

					<Flex
						className={styles.contentSectionInfo}
						direction='column'
						justifyContent='center'
					>
						<p className={styles.contentSectionTitle}>
							<Trans i18nKey={'Home.SuppertedAllFormFactors'}/>
						</p>
						<p className={cn(styles.contentSectionText, styles.text)}>
							<Trans i18nKey={'Home.SupportedAllFormFactorsText'}/>
						</p>
						<button className={styles.readMoreButton}>
							<Trans i18nKey={'Home.ReadMore'}/>
						</button>
					</Flex>
				</Flex>
			</Flex>
		</div>

		<div className={cn(styles.diagonal, styles.bitOSImages)}>
			<div className={styles.bitOSImagesBackground}/>
			<Flex alignItems='center' className={styles.homeContainer}>
				<Flex
					className={styles.contentSection}
					alignItems='center'
				>
					<Flex
						className={styles.contentSectionCircle}
						justifyContent='center'
						alignItems='center'
					>
						<ChipIcon fill='#B1CFE8' className={styles.contentSectionCircleImg} />
					</Flex>

					<Flex
						className={styles.contentSectionInfo}
						direction='column'
						justifyContent='center'
						alignItems='flex-start'
					>
						<p className={styles.contentSectionTitle}>
							<Trans i18nKey={'Home.64BitOSImages'}/>
						</p>
						<p className={cn(styles.contentSectionText, styles.text)}>
							<Trans i18nKey={'Home.64BitOSImagesText'}/>
						</p>
						<button className={styles.readMoreButton}>
							<Trans i18nKey={'Home.ReadMore'}/>
						</button>
					</Flex>

				</Flex>
			</Flex>
		</div>

		<div className={cn(styles.diagonal, styles.diagonalRight, styles.formFactors)}>
			<div className={styles.formFactorsBackground}/>
			<Flex alignItems='center' className={styles.homeContainer} justifyContent='flex-end'>
				<Flex
					className={cn(styles.contentSection, styles.contentSectionRight)}
					alignItems='center'
				>
					<Flex
						className={styles.contentSectionCircle}
						justifyContent='center'
						alignItems='center'
					>
						<img className={styles.contentSectionCircleImg} src={openedBookSVG} alt='' />
					</Flex>

					<Flex
						className={styles.contentSectionInfo}
						direction='column'
						justifyContent='center'
					>
						<p className={styles.contentSectionTitle}>
							<Trans i18nKey={'Home.DetailedDocumentation'}/>
						</p>
						<p className={cn(styles.contentSectionText, styles.text)}>
							<Trans i18nKey={'Home.DetailedDocumentationText'}/>
						</p>
						<button className={styles.readMoreButton}>
							<Trans i18nKey={'Home.ReadMore'}/>
						</button>
					</Flex>

				</Flex>
			</Flex>
		</div>
	</>
);

export default Features;
