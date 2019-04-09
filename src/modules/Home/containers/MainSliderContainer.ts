import {connect} from 'react-redux';
import MainSlider from '../components/MainSlider/MainSlider';

import {changeCurrentMainSlide, stopMainSliderAnimation} from '../actions/home';
import {getCurrentMainSlideIndex, getMainSlidesOrder} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentSlideIndex: getCurrentMainSlideIndex(state),
	mainSlidesOrder: getMainSlidesOrder(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onSlide: (index: number) => dispatch(
		changeCurrentMainSlide(index),
	),
	resetMainSlider: () => dispatch(stopMainSliderAnimation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider);
