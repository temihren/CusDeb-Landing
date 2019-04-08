const nextIndexCalculator = (initialIndex: number, steps: number, totalLength: number) => (
	initialIndex - steps < 0 ?
		totalLength - Math.abs(initialIndex - steps)
	:
		initialIndex - steps
);

export default nextIndexCalculator;
