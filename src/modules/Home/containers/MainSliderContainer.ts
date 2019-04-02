import {connect} from 'react-redux';
import MainSlider from '../components/MainSlider/MainSlider';

import {changeCurrentStep} from '../actions/home';
import {getCurrentSlide, getMainSlides} from '../selectors/home';

const mapStateToProps = (state: any) => ({
	currentSlide: getCurrentSlide(state),
	mainSlides: getMainSlides(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onSlide: (index: number) => dispatch(changeCurrentStep(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider);
