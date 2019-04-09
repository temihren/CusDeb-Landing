import {handleActions} from 'redux-actions';

import findNextIndex from 'utils/findNextIndex';

import {CHANGE_MAIN_SLIDE, STOP_MAIN_SLIDER_ANIMATION} from '../constants/home';

const initialState = {
	currentSlideIndex: 0,
	isMainSliderAnimated: false,
	currentMainSlideName: 'elevator',
	mainSlidesOrder: [0, 1, 2],
};

export default handleActions({
	[CHANGE_MAIN_SLIDE]: (state: any, {payload}) => {
		const steps = state.currentSlideIndex < payload
			? payload - state.currentSlideIndex
			: state.mainSlidesOrder.length - state.currentSlideIndex + parseInt(payload, 10);

		return ({
			...state,
			mainSlidesOrder: findNextIndex(
				state.mainSlidesOrder,
				steps,
			),
			currentSlideIndex: payload,
			isMainSliderAnimated: true,
		});
	},
	[STOP_MAIN_SLIDER_ANIMATION]: (state: any) => ({
		...state,
		isMainSliderAnimated: false,
	}),
}, initialState);
