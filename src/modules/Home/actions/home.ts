import {createAction} from 'redux-actions';
import {CHANGE_MAIN_SLIDE} from '../constants/home';

export const changeCurrentStep = createAction(
	CHANGE_MAIN_SLIDE,
	(slide: number) => slide,
);
