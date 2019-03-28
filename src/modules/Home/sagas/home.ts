import {takeLatest} from 'redux-saga/effects';

import {REQUEST_HOME} from 'modules/Home/constants/home';

function* homeSaga() {
	yield console.log('home');
}

export default function* watchEntities() {
	yield takeLatest(REQUEST_HOME, homeSaga);
}
