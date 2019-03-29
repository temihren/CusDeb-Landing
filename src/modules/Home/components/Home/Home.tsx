import cn from 'classnames';
import React from 'react';

import boxSVG from 'assets/images/box.svg';
import LogoIcon from 'assets/images/LogoIcon';
import userSVG from 'assets/images/user.svg';
import Flex from 'common/components/Flex/Flex';
import MainSlider from 'modules/Home/containers/MainSliderContainer';

import styles from './home.scss';

interface IProps {
	currentMainSlide: any;
}

const Home: React.FC<IProps> = props => (
	<div className={cn(styles.home, styles[props.currentMainSlide.name])}>
		<Flex justifyContent='center' className={styles.intro}>

			<Flex alignItems='center' direction='column' className={styles.mainTitles}>
				<LogoIcon fill='#FFFFFF' className={styles.introLogo} />
				<p className={styles.mainTitles_top}>Introducing CusDeb</p>
				<p className={styles.mainTitles_bottom}>
					CusDeb is a powerful service for building customized operating system
					images for single-board computers
				</p>
			</Flex>

		</Flex>

		<MainSlider slideTiming={10000} />

		<div className={styles.indicators}>
			<Flex className={styles.homeContainer}>
				<Flex className={styles.indicator} alignItems='center'>
					<Flex
						justifyContent='center'
						alignItems='center'
						className={styles.indicatorCircle}
					>
						<img className={styles.indicatorCircleImg} src={boxSVG} alt=''/>
					</Flex>
					<div className={styles.indicatorParameter}>
						<p className={styles.indicatorParameterTop}>5211</p>
						<p className={styles.indicatorParameterBottom}>Built images</p>
					</div>
				</Flex>
				<Flex className={styles.indicator} alignItems='center'>
					<Flex
						justifyContent='center'
						alignItems='center'
						className={styles.indicatorCircle}
					>
						<img src={userSVG} className={styles.indicatorCircleImg}/>
					</Flex>
					<div className={styles.indicatorParameter}>
						<p className={styles.indicatorParameterTop}>2448</p>
						<p className={styles.indicatorParameterBottom}>Active users</p>
					</div>
				</Flex>
			</Flex>
		</div>
	</div>
);

export default Home;
