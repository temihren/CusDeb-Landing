import {createAction} from 'redux-actions';
import {CHANGE_MAIN_SLIDE, DISANIMATE_MAIN_SLIDER, SET_MAIN_SLIDE} from '../constants/home';

export const changeCurrentMainSlide = createAction(
	CHANGE_MAIN_SLIDE,
	(index: number) => index,
);

export const disanimateMainSlider = createAction(DISANIMATE_MAIN_SLIDER);

export const setCurrentMainSlide = createAction(
	SET_MAIN_SLIDE,
	(index: number) => index,
);
