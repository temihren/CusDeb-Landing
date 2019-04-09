const findNextIndex = (initialArray: number[], steps: number) => (
	initialArray.map(item => (
		item - steps < 0 ?
			initialArray.length - Math.abs(item - steps)
		:
			item - steps
	))
);

export default findNextIndex;
