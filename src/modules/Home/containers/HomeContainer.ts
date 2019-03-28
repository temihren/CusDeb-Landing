import {connect} from 'react-redux';
import Home from '../components/Home/Home';

import {getCurrentMainSlide} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	slideName: getCurrentMainSlide(state),
});

export default connect(mapStateToProps)(Home);
