import React from 'react';
import {hot} from 'react-hot-loader';
import {withNamespaces} from 'react-i18next';
import {Route, Switch} from 'react-router-dom';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import HomeContainer from 'modules/Home/containers/HomeContainer';

const Routes = () => (
	<Switch>
		<Route
			path='/'
			render={() => (
				<CommonLayout>
					<Switch>
						<Route exact path='/' component={HomeContainer} />
						<Route path='/prising' render={() => <div>Prising</div>} />
					</Switch>
				</CommonLayout>
			)}
		/>
	</Switch>
);

export default hot(module)(withNamespaces('translation')(Routes));
