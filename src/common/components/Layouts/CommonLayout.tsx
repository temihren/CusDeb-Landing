import React from 'react';

import Header from 'common/components/Header/containers/HeaderContainer';

const CommonLayout = ({children}: any) => (
	<div>
		<Header />
		<div>
			{children}
		</div>
	</div>
);

export default CommonLayout;
