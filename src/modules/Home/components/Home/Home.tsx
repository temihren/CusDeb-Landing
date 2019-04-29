import cn from 'classnames';
import React, {PureComponent} from 'react';

import MainSlider from 'modules/Home/components/MainSlider/MainSlider';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Indicators from './components/Indicators/Indicators';
import Intro from './components/Intro/Intro';
import OpenSource from './components/OpenSource/OpenSource';
import SignUpToday from './components/SignUpToday/SignUpToday';
import Slides from './components/Slides/Slides';

import styles from './home.scss';

interface IState {
	backgroundClass: string;
}

class Home extends PureComponent<{}, IState> {
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
				<Intro />
				<MainSlider
					slides={Slides}
					nextSlideDelay={10000}
					style={{height: '480px', width: '1000px'}}
					onSlideChange={this.receiveSlideName}
				/>
				<Indicators />
				<SignUpToday />
				<OpenSource />
				<Features />
				<Footer />
			</div>
		);
	}
}

export default Home;
