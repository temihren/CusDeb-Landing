import cn from 'classnames';
import Flex from 'common/components/Flex/Flex';
import React from 'react';
import {Trans} from 'react-i18next';

import discountSVG from 'assets/images/discount.svg';
import githubSVG from 'assets/images/github.svg';
import LogoIcon from 'assets/images/LogoIcon';
import youtubeSVG from 'assets/images/youtube.svg';

import styles from './footer.scss';

const Footer = () => (
	<>
		<Flex
			className={cn(styles.prefooter, styles.diagonal)}
			justifyContent='center'
		>
			<div className={styles.prefooterBackground}/>
			<Flex
				className={styles.prefooterContainer}
				direction='column'
				alignItems='center'
			>
				<p className={styles.prefooterTitle}>
					<Trans i18nKey={'Home.StartUsingCusDebToday'}/>
				</p>
				<p className={cn(styles.text, styles.prefooterText)}>
					<Trans i18nKey={'Home.StartUsingCusDebTodayText'}/>
				</p>
				<hr />
				<Flex justifyContent='center' alignItems='center' style={{width: '100%'}}>
					<p className={cn(styles.prefooterDiscount, styles.text)}>
						<Trans i18nKey={'Home.UpgradeToPro'}>
							<span>10%</span>
						</Trans>
					</p>
					<img className={styles.prefooterDiscountIcon} src={discountSVG} alt='' />
				</Flex>
				<hr />
				<div className={cn(styles.prefooterButton, styles.text)}>
					<Trans i18nKey={'Home.SubscriptionPlans'} />
				</div>
			</Flex>
		</Flex>

		<Flex
			direction='column'
			className={styles.footer}
			alignItems='center'
		>
			<Flex
				justifyContent='center'
				alignItems='center'
				className={styles.footerLogo}
			>
				<LogoIcon fill='#3F647F' className={styles.footerLogoIcon} />
				<p className={styles.footerLogoName}>CusDeb</p>
			</Flex>

			<p className={styles.footerText}>
				<Trans i18nKey={'Home.CusDebDescription'}/>
			</p>
			<hr />
			<Flex
				className={styles.footerSocials}
				alignItems='center'
				justifyContent='center'
			>
				<img src={youtubeSVG} className={styles.footerSocialsYouTube} alt='' />
				<img src={githubSVG} alt='' />
			</Flex>
			<hr />
			<p className={cn(styles.footerCopyright, styles.text)}>
				<Trans i18nKey={'Home.Copyright'}/>
			</p>
		</Flex>
	</>
);

export default Footer;
