// Create a new component.  
// This component should produce some HTML.

// const => ES6 syntax that declares a constant;
// a constant will never change or reassign App down the line.
const App = function() {
	// JSX => dialect of JavaScript that allows us to 
	// write what looks like HTML, but really is just
	// JavaScript behind the scenes (thanks to Webpack and Babel)
	return <div>Hi!</div>;
}



// Take this component's generated HTML and put it
// on the page (in the DOM).

