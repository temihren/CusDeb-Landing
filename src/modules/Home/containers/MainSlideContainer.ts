import {connect} from 'react-redux';
import MainSlide from '../components/MainSlider/components/MainSlide/MainSlide';

import {changeCurrentMainSlide} from '../actions/home';
import {getCurrentMainSlideIndex, getIsMainSliderAnimated, getMainSlides, getMainSlidesLength} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentSlideIndex: getCurrentMainSlideIndex(state),
	mainSlidesLength: getMainSlidesLength(state),
	isAnimated: getIsMainSliderAnimated(state),
	mainSlides: getMainSlides(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSlide: (index: number) => dispatch(changeCurrentMainSlide(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSlide);
