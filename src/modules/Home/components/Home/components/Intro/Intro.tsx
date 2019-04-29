import Flex from 'common/components/Flex/Flex';
import React from 'react';
import {Trans} from 'react-i18next';

import LogoIcon from 'assets/images/LogoIcon';

import {COLORS} from 'styles/colors';
import styles from './intro.scss';

const Intro = () => (
	<Flex justifyContent='center' className={styles.intro}>
		<Flex alignItems='center' direction='column' className={styles.mainTitles}>
			<LogoIcon fill={COLORS.white} className={styles.introLogo} />
			<p className={styles.mainTitles_top}>
				<Trans i18nKey={'Home.IntroducingCusDeb'} />
			</p>
			<p className={styles.mainTitles_bottom}>
				<Trans i18nKey={'Home.CusDebDescription'} />
			</p>
		</Flex>
	</Flex>
);

export default Intro;
