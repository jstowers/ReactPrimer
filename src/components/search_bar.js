
// clean up reference with ES6
import React, { Component } from 'react';

class SearchBar extends Component {

	// Naming Convention for Methods:
	// on = when the event happens
	// Input = on what DOM element
	// Change = the type of event
	/*
	onInputChange(event) {
		// the event object describes the context of the event that occurred
		// very detailed properties => can access the value of the input
		console.log(event.target.value);
	}
	*/

	render() {
		// the HTML input element emits a 'change' event
		// JSX requires us to wrap curly braces around JavaScript variables
		
		// return <input onChange = { this.onInputChange } />;

		// alternative return using ES6 arrow function:
		return <input onChange = {event => console.log(event.target.value)} />
	}
}


/*
// SearchBar component
// Functional component => a function that returns JSX
const SearchBar = () => {
	return <input />
};
*/

// To render SearchBar in index.js, we need to provide a reference (export)
// Export statement used to export functions, objects, or primitives from a given 
// file (or module)
// Default => only allows a single default export per file
export default SearchBar


/*
import React from 'react';

// define a new class SearchBar and 
// give it all the functionality found in the React.Component class

// React.Component is an abstract base class.
// An abstract base class contains 1+ abstract methods.

// An abstract method is a method that is declared, but contains
// no implementation.

class SearchBar extends React.Component {

	// every class-based React component must contain a render method:
	render() {
		return <input />;
	}
}
*/