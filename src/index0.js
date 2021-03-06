// Notes through Sec. 2, Lec. 21

// core React library => create and manage React components
import React from 'react';

// functionality to render components to the DOM
import ReactDOM from 'react-dom';

// for files we create, we must provide a relative file path reference
// ./ => current directory of index.js file
import SearchBar from './components/search_bar';

// library that provides YouTube searches
import YTSearch from 'youtube-api-search';

// YouTube API Key
const API_KEY = 'AIzaSyCzlbS_5vStroDmcda8Rhk9Ok0WRCKi8nQ';

// Successful YouTube API search
YTSearch({key:API_KEY, term:'surfboards'}, function(data){
	console.log('data =', data);
})

// 1. Create a new component.  
// This component should produce some HTML.

// const => ES6 syntax that declares a constant;
// a constant will never change or reassign App down the line.

// Using ES6 syntax for arrow function
// The value of 'this' is different inside an arrow function
// ** Arrow functions do not have their own 'this' value.
// The value of 'this' is always inherited from the enclosing scope.

const App = () => {
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
	return (
		<div>
			Hello, World!
			<SearchBar />
		</div>
	);
}


// 2. Take this component's generated HTML and put it
// on the page (in the DOM).

// Pass an instance of App into ReactDOM.render()
// querySelector() returns the first matching element node in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));






