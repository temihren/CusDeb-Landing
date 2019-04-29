import cn from 'classnames';
import Flex from 'common/components/Flex/Flex';
import React from 'react';
import {Trans} from 'react-i18next';

import boxSVG from 'assets/images/box.svg';
import userSVG from 'assets/images/user.svg';

import styles from './indicators.scss';

const Indicators = () => (
	<div className={styles.indicators}>
		<Flex className={styles.homeContainer}>
			<Flex className={styles.indicator} alignItems='center'>
				<Flex
					justifyContent='center'
					alignItems='center'
					className={styles.indicatorCircle}
				>
					<img className={styles.indicatorCircleImg} src={boxSVG} alt='' />
				</Flex>
				<div className={styles.indicatorParameter}>
					<p className={cn(styles.indicatorParameterTop, styles.text)}>5211</p>
					<p className={cn(styles.indicatorParameterBottom, styles.text)}>
						<Trans i18nKey={'Home.BuiltImages'}/>
					</p>
				</div>
			</Flex>
			<Flex className={styles.indicator} alignItems='center'>
				<Flex
					justifyContent='center'
					alignItems='center'
					className={styles.indicatorCircle}
				>
					<img src={userSVG} className={styles.indicatorCircleImg} alt='' />
				</Flex>
				<div className={styles.indicatorParameter}>
					<p className={cn(styles.indicatorParameterTop, styles.text)}>2448</p>
					<p className={cn(styles.indicatorParameterBottom, styles.text)}>
						<Trans i18nKey={'Home.ActiveUsers'}/>
					</p>
				</div>
			</Flex>
		</Flex>
	</div>
);

export default Indicators;
