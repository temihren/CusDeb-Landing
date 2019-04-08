import {createSelector} from 'reselect';

export const getMainSlides = (state: any) => state.home.mainSlides;
export const getCurrentMainSlideIndex = (state: any) => state.home.currentSlideIndex;
export const getIsMainSliderAnimated = (state: any) => state.home.isMainSliderAnimated;

export const getMainSlidesLength = createSelector(
	getMainSlides,
	slides => slides.length,
);

export const getCurrentMainSlide = (state: any) => state.home.mainSlides[state.home.currentSlideIndex];
