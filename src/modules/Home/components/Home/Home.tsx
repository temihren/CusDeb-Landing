import cn from 'classnames';
import React from 'react';

import boxSVG from 'assets/images/box.svg';
import ChipIcon from 'assets/images/ChipIcon';
import worldSVG from 'assets/images/continents.svg';
import devicesSVG from 'assets/images/devices.svg';
import discountSVG from 'assets/images/discount.svg';
import githubSVG from 'assets/images/github.svg';
import LogoIcon from 'assets/images/LogoIcon';
import octocatSVG from 'assets/images/octocat.svg';
import openedBookSVG from 'assets/images/openedBook.svg';
import shieldSVG from 'assets/images/shield.svg';
import userSVG from 'assets/images/user.svg';

import Flex from 'common/components/Flex/Flex';
import MainSlider from 'modules/Home/containers/MainSliderContainer';

import styles from './home.scss';

interface IProps {
	currentMainSlide: any;
}

interface IState {
	backgroundClass: string;
}

class Home extends React.PureComponent<IProps, IState> {
	public state = {
		backgroundClass: 'emulator',
	};

	public receiveSlideName = (name: string) => {
		this.setState({backgroundClass: name});
	}

	public render() {
		const {backgroundClass} = this.state;

		return (
			<div className={cn(styles.home, styles[backgroundClass])}>
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

				<MainSlider slideTiming={10000} onSlideChange={this.receiveSlideName}/>

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
								<p className={cn(styles.indicatorParameterBottom, styles.text)}>Built images</p>
							</div>
						</Flex>
						<Flex className={styles.indicator} alignItems='center'>
							<Flex
								justifyContent='center'
								alignItems='center'
								className={styles.indicatorCircle}
							>
								<img src={userSVG} className={styles.indicatorCircleImg} />
							</Flex>
							<div className={styles.indicatorParameter}>
								<p className={cn(styles.indicatorParameterTop, styles.text)}>2448</p>
								<p className={cn(styles.indicatorParameterBottom, styles.text)}>Active users</p>
							</div>
						</Flex>
					</Flex>
				</div>

				<div className={styles.smallSliderWrapper}>
					<Flex className={styles.homeContainer} />
				</div>

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
								<span>Sign Up Today</span>
							</Flex>
							<hr className={styles.signUpTodayHr} />
							<p className={styles.signUpTodayPhrase}>
								Ultricies nec, pellentesque eu, pretium quis, sem.
								Nulla consequat massa quis enim.
							</p>
							<button className={styles.signUpTodayButton}>
								Register
							</button>
						</Flex>
					</Flex>
				</div>

				<div className={cn(styles.openSource, styles.text)}>
					<Flex className={cn(styles.homeContainer, styles.openSourceContainer)} direction='column'>
						<p className={styles.openSourceTitle}>Open source</p>
						<p className={styles.openSourceText}>
							The key components of CusDeb are open source software,
							so CusDeb’s heart, Pieman, is available on GitHub along
							with such microservices as BlackMagic (also known as BM),
							Dominion and Orion.
						</p>
						<div className={styles.openSourceList}>
							<Flex alignItems='center' className={styles.openSourceListItem}>
								<div className={styles.openSourceListDot} />
								<p className={styles.openSourceListText}>
									Black Magic manages the whole process of customizing images.
								</p>
							</Flex>
							<Flex alignItems='center' className={styles.openSourceListItem}>
								<div className={styles.openSourceListDot} />
								<p className={styles.openSourceListText}>
									Dominion paired with Pieman are responsible
									for building images.
								</p>
							</Flex>
							<Flex alignItems='center' className={styles.openSourceListItem}>
								<div className={styles.openSourceListDot} />
								<p className={styles.openSourceListText}>
									Orion is intended for running images in
									emulator for testing pusposes.
								</p>
							</Flex>
						</div>
						<button className={styles.readMoreButton}>Read more</button>

						<div className={styles.openSourceMap}>
							<img className={styles.openSourceMapImage} src={worldSVG} alt='' />
						</div>
						<div className={styles.openSourceOctocat}>
							<div className={styles.openSourceOctocatCircle} />
							<img className={styles.openSourceOctocatIcon} src={octocatSVG} alt='' />
						</div>
					</Flex>
				</div>

				<div className={cn(styles.diagonal, styles.diagonalRight, styles.formFactors)}>
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
									SUPPORTED ALL FORM FACTORS
								</p>
								<p className={cn(styles.contentSectionText, styles.text)}>
									Use any device that you have, even mobile
									phone to create and test your images. CusDeb
									provides new, unique way to interact with
									linux in a cloud.
								</p>
								<button className={styles.readMoreButton}>Read More</button>
							</Flex>

						</Flex>
					</Flex>
				</div>

				<div className={cn(styles.diagonal, styles.bitOSImages)}>
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
									64 BIT OS IMAGES
								</p>
								<p className={cn(styles.contentSectionText, styles.text)}>
									Unleash the power of your device with 64 bit built OS
									images, that only CusDeb has for now.  This is going to
									be a great experience for your device in case of performance.
								</p>
								<button className={styles.readMoreButton}>Read More</button>
							</Flex>

						</Flex>
					</Flex>
				</div>

				<div className={cn(styles.diagonal, styles.diagonalRight, styles.formFactors)}>
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
									DETAILED DOCUMENTATION
								</p>
								<p className={cn(styles.contentSectionText, styles.text)}>
									We have a great documentation which will help you to
									learn more about how to build and use images on your
									devices, and even more, we can learn you how to use
									Linux and test it in our cloud terminal, this is gonna
									be a lot of fun for you using CusDeb.
								</p>
								<button className={styles.readMoreButton}>Read More</button>
							</Flex>

						</Flex>
					</Flex>
				</div>

				<Flex
					className={cn(styles.prefooter, styles.diagonal)}
					justifyContent='center'
				>
					<Flex
						className={styles.prefooterContainer}
						direction='column'
						alignItems='center'
					>
						<p className={styles.prefooterTitle}>
							Start using CusDeb today
						</p>
						<p className={cn(styles.text, styles.prefooterText)}>
							CusDeb is free to use, but there are some
							amazing features, available only for users
							with “pro” plan.
						</p>
						<hr />
						<Flex justifyContent='center' alignItems='center' style={{width: '100%'}}>
							<p className={cn(styles.prefooterDiscount, styles.text)}>
								upgrade to "pro" plan and get <span>10%</span>
								discount
							</p>
							<img className={styles.prefooterDiscountIcon} src={discountSVG} alt='' />
						</Flex>
						<hr />
						<div className={cn(styles.prefooterButton, styles.text)}>
							Subscription plans
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
						CusDeb is a powerful service for
						building customized operating system images
						for single-board computers
					</p>
					<hr />
					<Flex
						className={styles.footerSocials}
						alignItems='center'
						justifyContent='center'
					>
						<img src={githubSVG} alt='' />
						<img src={githubSVG} alt='' />
					</Flex>
					<hr />
					<p className={cn(styles.footerCopyright, styles.text)}>
						Copyright 2019 - CusDeb. All righes reserved
					</p>
				</Flex>
			</div>
		);
	}
}

export default Home;
