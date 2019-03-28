import {all, fork} from 'redux-saga/effects';

import homeSaga from 'modules/Home/sagas/home';

export default function* rootSaga() {
	yield all([
		fork(homeSaga),
	]);
}
