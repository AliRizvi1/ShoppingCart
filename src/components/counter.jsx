import React, { Component } from 'react';

class Counter extends Component {
	//State is an object that includes any data that the component needs
	state = {
		count: 1
	};
	render() {
		return (
			<React.Fragment>
				<span>{this.state.count}</span>
				<button>Increment</button>
			</React.Fragment>
			);
	}
}

export default Counter;