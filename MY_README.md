###February 1, 2017###

index.html

        <script src="/bundle.js"></script>

        bundle.js is the compiled JavaScript for entire application.
        Webpack and Babel put all the JavaScript files together in a single file.



###What is React?###
##Sec. 1, Lec. 6##

React is a JavaScript library used to produce HTML that is shown to user in a web browser.

Writing individual components (views) => snippets of code that produce HTML.

Nest components inside of others to create complex applications.

###What is a Component?###

A component is a collection of JavaScript functions that produce HTML.

###Modules###
Sec. 1, Lec. 8

All code written in separate files is siloed or separated from other code and
libraries that we write in our project.

Can't make reference to other variables in other files unless we explicity state we want access to those files:

````
    import React from 'react';
````

###Instantiating a Component###
Sec. 1, Lec. 10

When we create a component, we are creating a Class of a component.

We could have many instances of App.  Think of the Class function as a factory that can produce many instances of the actual components that are rendered to the DOM.

To create an instance of the App class to render to the DOM:

````
    ReactDOM.render(<App></App>)   =>   ReactDOM.render(<App />)    
````

###Target Elements###
Take the component and place inside a target element;

````
    ReactDOM.render(<ComponentName />, targetElement)
````

###Making Components###
Always make one component per code

###YouTube API Key###
Two Steps

1.  Get a YouTube API key

        console.developers.google.com

        key = AIzaSyCzlbS_5vStroDmcda8Rhk9Ok0WRCKi8nQ


2.  Install a small node package for searching the YouTube API

        $ npm install --save youtube-api-search

        --save => saves the package in our package.json file

###Export Statements###

Main Topics
1.  Exporting modules
2.  Classes
3.  State

Search Bar => create input form for user to type a search request

###Class-Based Components###
Sec. 1, Lec. 15

React Component Types
1.  Functional component - a function that returns JSX
2.  Class component - a component that contains internal recordkeeping

For class components, the component needs to be aware of itself and changes over time.  It needs to know its state and be used by other components.

Use ES6 class (JavaScript object with properties and methods):

    ````
        class SearchBar extends React.Component {
            render() {
                NOTE: render() method required for 
            }
        }

When create a class component, you must provide a render() method and return JSX.  Otherwise, an error will result.  Why?

Rule of Thumb:
Start with a functional component and refactor to class-based component if needed.

###Handling User Events###

Two Steps

1.  Declare Event Handler

        Event handler is a function that runs whenever the event occurs

        Ex) onSubmit(), onChange()


2.  Pass the event handler to the element that we want to monitor for events


Ex) For the Search Bar, we want to know whenever the text has changed.








