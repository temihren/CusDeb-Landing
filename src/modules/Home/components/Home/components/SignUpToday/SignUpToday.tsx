import Flex from 'common/components/Flex/Flex';
import React from 'react';
import {Trans} from 'react-i18next';

import shieldSVG from 'assets/images/shield.svg';

import styles from './signUpToday.scss';

const SignUpToday = () => (
	<div className={styles.signUpToday}>
		<Flex className={styles.homeContainer} justifyContent='center'>
			<Flex
				className={styles.signUpTodayContainer}
				direction='column'
				alignItems='center'
			>
				<Flex
					className={styles.signUpTodayHeader}
					justifyContent='center'
					alignItems='center'
				>
					<img
						className={styles.signUpTodayIcon}
						src={shieldSVG}
						alt=''
					/>
					<span><Trans i18nKey={'Home.SignUpToday'}/></span>
				</Flex>
				<hr className={styles.signUpTodayHr} />
				<p className={styles.signUpTodayPhrase}>
					Ultricies nec, pellentesque eu, pretium quis, sem.
					Nulla consequat massa quis enim.
				</p>
				<button className={styles.signUpTodayButton}>
					<Trans i18nKey={'Home.Register'}/>
				</button>
			</Flex>
		</Flex>
	</div>
);

export default SignUpToday;
