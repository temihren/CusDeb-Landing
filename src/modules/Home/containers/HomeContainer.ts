import {connect} from 'react-redux';
import Home from '../components/Home/Home';

import {getCurrentMainSlideName} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentMainSlide: getCurrentMainSlideName(state),
});

export default connect(mapStateToProps)(Home);
