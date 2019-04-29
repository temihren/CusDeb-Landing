import React, {PureComponent} from 'react';

interface IProps {
	fill?: string;
	className?: string;
	style?: object;
	size: number;
	progress: number;
	trackFill?: string;
	timing: number;
	width: number;
}

interface IState {
	circumference: number;
}

class ProgressCircle extends PureComponent<IProps, IState> {
	private readonly circleRef: any;

	constructor(props: IProps) {
		super(props);
		this.state = {
			circumference: 2 * Math.PI * ((props.size / 2) - props.width),
		};
		this.circleRef = React.createRef();
	}

	public componentDidUpdate() {
		const animation = this.circleRef.current.animate([
			{strokeDashoffset: this.state.circumference},
			{strokeDashoffset: '0'},
		], {duration: this.props.timing});

		if (this.props.progress === 0) animation.pause();
	}

	public render() {
		const {size, className, width, trackFill, fill} = this.props;

		return (
			<div className={className}>
				<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
					<circle cx={size / 2} cy={size / 2} r={(size / 2) - width} fill='none' stroke={trackFill} strokeWidth={width} />
					<circle
						cx={size / 2}
						cy={size / 2}
						r={(size / 2) - width}
						fill='none'
						stroke={fill}
						ref={this.circleRef}
						strokeWidth={width}
						strokeDasharray={this.state.circumference}
						strokeDashoffset={this.state.circumference}
					/>
				</svg>
			</div>
		);
	}
}

export default ProgressCircle;
