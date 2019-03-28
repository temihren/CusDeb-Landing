import {handleActions} from 'redux-actions';

import {
	CHANGE_MAIN_SLIDE,
} from '../constants/home';

const initialState = {
	currentSlide: 0,
	slides: [
		{
			name: 'emulator',
		},
		{
			name: 'elevator',
		},
		{
			name: 'perforator',
		},
	],
};

export default handleActions({
	[CHANGE_MAIN_SLIDE]: (state: any, {payload}) => ({
		...state,
		currentSlide: payload,
	}),
}, initialState);
