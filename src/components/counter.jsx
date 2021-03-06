import React, { Component } from 'react';

class Counter extends Component {
	//State is an object that includes any data that the component needs

	// constructor() {
	// 	super();
	// 	//Using a javascript bind event handler
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	//Can set to arrow function, much more simple than the binding constructor above

	// renderTags() {
	// 	if (this.state.tags.length === 0) return  <p>There are no tags!</p>;

	// 	return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
	// }

	render() {
		return (
			//Essentially created an if statement below
			//.jsx doesn't support if statements
			//a non-empty string is considered "truthy" by JavaScript
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
				<button 
					onClick={ () => this.props.onIncrement(this.props.counter)} 
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} 
				className="btn btn-danger btn-sm m-2">
				Delete</button>			
			</div>
			);
	}


	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;

	}

	formatvalue() {
		//The size of the "Zero" vs. the value is rather large
		//Could be because of the <h1> sizing vs raw integer
		const { value } = this.props.counter;
		return value === 0 ? <h1>Zero</h1> : value;

	}
}

export default Counter;