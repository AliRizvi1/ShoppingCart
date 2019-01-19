import React, { Component } from 'react';

class Counter extends Component {
	//State is an object that includes any data that the component needs
	state = {
		count: 0,
	};

	styles = {
		fontSize: 5,
		fontWeight: "bold"
	};
	render() {
		return (
			<React.Fragment>
				<span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</React.Fragment>
			);
	}

	formatCount() {

		const { count } = this.state;
		//Counter that outputs Zero spelled out when the count is zero, otherwise it will output the number
		//Javascript uses === for boolean expressions
		return count === 0 ? <h1>Zero</h1> : count;
	} 
}

export default Counter;