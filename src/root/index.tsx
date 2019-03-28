import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import moment from 'moment';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Routes from './Routes';

import 'locales/i18nextConfig';
import 'styles/index.scss';

moment.defaultFormat = 'YYYY.MM.DD';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory({
	basename: `/${process.env.PREFIX}`,
});

const store = createStore(
	enableBatching(rootReducer(history)),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

sagaMiddleware.run(rootSaga);

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
), document.getElementById('app'));
