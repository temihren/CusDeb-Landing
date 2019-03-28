import cn from 'classnames';
import React from 'react';

import LogoIcon from 'assets/images/LogoIcon';
import Flex from 'common/components/Flex/Flex';
import MainSlider from 'modules/Home/containers/MainSliderContainer';

import styles from './home.scss';

interface IProps {
	slideName: string;
}

const Home: React.FC<IProps> = props => (
	<div className={cn(styles.home, styles[props.slideName])}>
		<Flex justifyContent='center' className={styles.intro}>

			<Flex alignItems='center' direction='column' className={styles.mainTitles}>
				<LogoIcon fill='#FFFFFF' className={styles.introLogo} />
				<p className={styles.mainTitles_top}>Introducing CusDeb</p>
				<p>CusDeb is a powerful service for building customized operating system images for single-board computers</p>
			</Flex>

		</Flex>

		<MainSlider />
	</div>
);

export default Home;
