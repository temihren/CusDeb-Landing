import {connect} from 'react-redux';
import MainSlider from '../components/MainSlider/MainSlider';

import {changeCurrentMainSlide, stopMainSliderAnimation} from '../actions/home';
import {getCurrentMainSlideIndex, getMainSlides} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentSlideIndex: getCurrentMainSlideIndex(state),
	mainSlides: getMainSlides(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onSlide: (index: number) => dispatch(
		changeCurrentMainSlide(index),
	),
	resetMainSlider: () => dispatch(stopMainSliderAnimation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider);
