import {connect} from 'react-redux';

import Home from '../components/Home/Home';

import {getCurrentSlideName} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	slideName: getCurrentSlideName(state),
});

export default connect(mapStateToProps)(Home);
