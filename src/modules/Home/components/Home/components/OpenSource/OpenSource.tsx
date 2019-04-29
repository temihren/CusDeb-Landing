import cn from 'classnames';
import Flex from 'common/components/Flex/Flex';
import React from 'react';
import {Trans} from 'react-i18next';

import worldSVG from 'assets/images/continents.svg';
import octocatSVG from 'assets/images/octocat.svg';

import styles from './openSource.scss';

const OpenSource = () => (
	<div className={cn(styles.openSource, styles.text)}>
		<Flex
			className={cn(styles.homeContainer, styles.openSourceContainer)}
			direction='column'
			alignItems='flex-start'
		>
			<p className={styles.openSourceTitle}>
				<Trans i18nKey={'Home.OpenSource'}/>
			</p>
			<p className={styles.openSourceText}>
				<Trans i18nKey={'Home.OpenSourceSectionText'}/>
			</p>
			<div className={styles.openSourceList}>
				<Flex alignItems='center' className={styles.openSourceListItem}>
					<div className={styles.openSourceListDot} />
					<p className={styles.openSourceListText}>
						<Trans i18nKey={'Home.OpenSourceSectionFirst'}/>
					</p>
				</Flex>
				<Flex alignItems='center' className={styles.openSourceListItem}>
					<div className={styles.openSourceListDot} />
					<p className={styles.openSourceListText}>
						<Trans i18nKey={'Home.OpenSourceSectionSecond'}/>
					</p>
				</Flex>
				<Flex alignItems='center' className={styles.openSourceListItem}>
					<div className={styles.openSourceListDot} />
					<p className={styles.openSourceListText}>
						<Trans i18nKey={'Home.OpenSourceSectionThird'}/>
					</p>
				</Flex>
			</div>
			<button className={styles.readMoreButton}>
				<Trans i18nKey={'Home.ReadMore'}/>
			</button>

			<div className={styles.openSourceMap}>
				<img className={styles.openSourceMapImage} src={worldSVG} alt='' />
			</div>
			<div className={styles.openSourceOctocat}>
				<div className={styles.openSourceOctocatCircle} />
				<img className={styles.openSourceOctocatIcon} src={octocatSVG} alt='' />
			</div>
		</Flex>
	</div>
);

export default OpenSource;
