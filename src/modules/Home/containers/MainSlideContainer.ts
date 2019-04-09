import {connect} from 'react-redux';
import MainSlide from '../components/MainSlider/components/MainSlide/MainSlide';

import {getCurrentMainSlideIndex, getIsMainSliderAnimated, getMainSlidesOrder} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentSlideIndex: getCurrentMainSlideIndex(state),
	mainSlidesOrder: getMainSlidesOrder(state),
	isAnimated: getIsMainSliderAnimated(state),
	mainSlidesLength: getMainSlidesOrder(state).length,
});

export default connect(mapStateToProps)(MainSlide);
