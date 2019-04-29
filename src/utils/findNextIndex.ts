const nextSlidesToShow = (nextSlideIndex: number, slidesLength: number) => {
	const nextIndexes = Array(slidesLength).fill('');
	const offset = slidesLength - nextSlideIndex;
	if (offset >= slidesLength) return nextIndexes.map((_: number, index: number) => nextSlideIndex + index);
	if (offset < slidesLength) {
		return nextIndexes.map((_: number, index: number) => {
			const nextIndexOffset = slidesLength - nextSlideIndex - index - 1;
			if (nextIndexOffset >= 0) return nextSlideIndex + index;
			if (nextIndexOffset < 0) return Math.abs(nextIndexOffset) - 1;
		});
	}
};

export default nextSlidesToShow;
