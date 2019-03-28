import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';

import homeReducer from 'modules/Home/reducers/home';

const rootReducer = (history: any) => combineReducers({
	home: homeReducer,
	router: connectRouter(history as any),
});

export default rootReducer;
