import React, { Component } from 'react';

class Counter extends Component {
	//State is an object that includes any data that the component needs
	state = {
		count: 0,
	};
	render() {
		return (
			<React.Fragment>
				<span>className=""{this.formatCount()}</span>
				<button>Increment</button>
			</React.Fragment>
			);
	}

	formatCount() {
		const { count } = this.state;

		return count === 0 ? <h1>Zero</h1> : count;
	} 
}

export default Counter;