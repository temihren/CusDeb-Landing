export const getCurrentMainSlide = (state: any) => state.home.slides[state.home.currentSlide].name;

export const getCurrentSlide = (state: any) => state.home.currentSlide;
export const getMainSlides = (state: any) => state.home.slides;
