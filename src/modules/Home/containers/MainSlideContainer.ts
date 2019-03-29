import {connect} from 'react-redux';
import MainSlide from '../components/MainSlider/components/MainSlide/MainSlide';

import {getCurrentMainSlideIndex, getIsMainSliderAnimated, getMainSlides, getMainSlidesLength} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentSlideIndex: getCurrentMainSlideIndex(state),
	mainSlidesLength: getMainSlidesLength(state),
	isAnimated: getIsMainSliderAnimated(state),
	mainSlides: getMainSlides(state),
});

export default connect(mapStateToProps, null)(MainSlide);
