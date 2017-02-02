// core React library => create and manage React components
import React from 'react';

// functionality to render components to the DOM
import ReactDOM from 'react-dom'


// Create a new component.  
// This component should produce some HTML.

// const => ES6 syntax that declares a constant;
// a constant will never change or reassign App down the line.
const App = function() {
	// JSX => dialect of JavaScript that allows us to 
	// write what looks like HTML, but really is just
	// JavaScript behind the scenes (thanks to Webpack and Babel)
	
	// JSX can't be interpreted by the browser.
	// We use JSX because it becomes the HTML that is placed into the DOM.
	// JSX helps our code look more legible

	// JSX is syntactic sugar for calling React.createElement()
	/*
		React.createElement(
			type,
			[props],
			[...children]
		)

		type = either a tag name string ('div', 'span'), or
		a React component type (a class or a function)

	*/
	return <div>Hi!</div>;
}


// Take this component's generated HTML and put it
// on the page (in the DOM).

// Pass an instance of App  ito ReactDOM.render()
ReactDOM.render(<App />, document.querySelector('.container'));






