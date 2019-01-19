import React, { Component } from 'react';

class Counter extends Component {
	//State is an object that includes any data that the component needs
	state = {
		count: 0 ,
		tags: []
	};

	renderTags() {
		if (this.state.tags.length === 0) return  <p>There are no tags!</p>;

		return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
	}

	render() {
		return (
			//Essentially created an if statement below
			//.jsx doesn't support if statements
			<div>
				{this.state.tags.length === 0 && "Please create a new tag!"}
				{this.renderTags()}
				
			</div>
			);
	}
}

export default Counter;