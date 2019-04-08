import React from 'react';
import {handleActions} from 'redux-actions';

import nextIndexCalculator from 'utils/nextIndexCalculator';

import {CHANGE_MAIN_SLIDE, STOP_MAIN_SLIDER_ANIMATION} from '../constants/home';

const initialState = {
	currentSlideIndex: 0,
	isMainSliderAnimated: false,
	mainSlidesOrder: [0, 1, 2],
	mainSlides: [
		{
			order: 0,
			name: 'emulator',
			title: 'Emulator',
			smallText: (
				<>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec quam felis, ultricies nec
					</p>
					<p>
						Tulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
						a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
						pretium. Integer tincidunt. Cras dapibus.
					</p>
				</>
			),
		},
		{
			order: 1,
			name: 'overTheAir',
			title: 'Over the air',
			smallText: (
				<>
					<p>
						Mender is an open source remote software updater for
						embedded Linux devices. It enables management of software
						updates to conected devices remotely over any TCP/IP network.
					</p>
					<p>
						You can simply turn any image into a Mender compatable one,
						selecting “Mender Compatable Image” option, while making your image.
					</p>
				</>
			),
		},
		{
			order: 2,
			name: 'emulator',
			title: 'Emulator2',
			smallText: (
				<>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec quam felis, ultricies nec
					</p>
					<p>
						Tulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
						a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
						pretium. Integer tincidunt. Cras dapibus.
					</p>
				</>
			),
		},
	],
};

export default handleActions({
	[CHANGE_MAIN_SLIDE]: (state: any, {payload}) => {
		const steps = state.currentSlideIndex < payload
			? payload - state.currentSlideIndex
			: state.mainSlides.length - state.currentSlideIndex + parseInt(payload, 10);

		return ({
			...state,
			currentSlideIndex: payload,
			isMainSliderAnimated: true,
			mainSlides: state.mainSlides.map((slide: any) => ({
				...slide,
				order: nextIndexCalculator(
					slide.order,
					steps,
					state.mainSlides.length,
				),
			})),
		});
	},
	[STOP_MAIN_SLIDER_ANIMATION]: (state: any) => ({
		...state,
		isMainSliderAnimated: false,
	}),
}, initialState);
