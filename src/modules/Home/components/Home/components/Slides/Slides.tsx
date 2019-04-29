import React from 'react';
import {Trans} from 'react-i18next';

import Slide from '../Slide/Slide';

import styles from './slides.scss';

const slides = [
	{
		title: 'Emulator',
		name: 'emulator',
		content: (
			<Slide
				className={styles.emulatorSlide}
				title={<Trans i18nKey={'Home.Slides.emulator.title'}/>}
				smallText={<Trans i18nKey={'Home.Slides.emulator.description'}/>}
			/>
		),
	},
	{
		title: 'OverTheAir',
		name: 'overTheAir',
		content: (
			<Slide
				className={styles.overTheAirSlide}
				title={<Trans i18nKey={'Home.Slides.overTheAir.title'}/>}
				smallText={<Trans i18nKey={'Home.Slides.overTheAir.description'}/>}
			/>
		),
	},
];

export default slides;
