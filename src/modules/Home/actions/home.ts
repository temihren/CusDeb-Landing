import {createAction} from 'redux-actions';
import {CHANGE_MAIN_SLIDE, SET_MAIN_SLIDE, STOP_MAIN_SLIDER_ANIMATION} from '../constants/home';

export const changeCurrentMainSlide = createAction(
	CHANGE_MAIN_SLIDE,
	(index: number) => index,
);

export const stopMainSliderAnimation = createAction(STOP_MAIN_SLIDER_ANIMATION);

export const setCurrentMainSlide = createAction(
	SET_MAIN_SLIDE,
	(index: number) => index,
);
