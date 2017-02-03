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


###Introducing State###

State - plain JavaScript object that records and react to user events.

Each class-based component has its own 'state' **object**.  Functional components do not have state.

When a component's state changes, the component immediately re-renders.  A state change also forces the component's children to re-render.

Before we can use the state object within a component, we must initialize it in the class' constructor function:

    ``` 
        constructor(props) {
            super(props)
            this.state = {
                term: '',
            }
        }

All JavaScript classes contain a special function called 'constructor'.  This constructor function is the first and only function automatically called when a new instance of a class is created.

Constructor function reserved for specific tasks:

        Initialize variables
        Initialize state

***What does super(props) mean?***

We defined a constructor() method for our SearchBar class.  But the Component also has its own constructor function.

So, when we define a method (constructor) that is already defined on the parent class, we can call the method on the parent class (Component) by using super().

We are simply calling the parent method using super();

***Setting State***

Use setState() to change the value of a property.

This is the primary method to trigger UI updates from event handlers and server request callbacks.

Syntax:

        setState(nextState, callback)

Example: set the state of the property 'term' to the current value in the Search Bar

        this.setState({term:event.target.value})

When setState() is called, the component automatically re-renders and pushes all the updated information from the render() method into the DOM.

RULE OF THUMB:  when update a component in some fashion, think 'state'

***Controlled Field***
A form element, like an <input>, whose value is set by the state.

        <input 
            value = {this.state.term}   
            onChange = { event => 
                this.setState({term:event.target.value})} 
        />

When we tell <input> that its value is provided by this.state.term, <input> becomes a controlled component (controlled form element).

When the onChange method is called, the value of the <input> has not changed.

When a user types in the Search Bar, they only trigger an event; the input value doesn't change at that instant.

Helpful for handling data flow . . . the value of the <input> is equal to the state.


***YouTube Search Response***
Question:   All of the components will need access to the data provided from YouTube after a user searches for videos.  So which component is best-suited for making the API call?

Answer:     Downward Data Flow
Want the most parent component to be responsible for fetching data.


***Props***
Sec. 2, Lec. 23
Build VideoList Component

No need for state:
1.  Doesn't record any user interaction
2.  Doesn't re-render itself

VideoList needs access to the videos returned in the App component.  React makes it easy to pass data from the parent component (App) to the child component (VideoList).
    
    In the parent's render() method, pass the prop 'videos' to the child:

        <VideoList videos = { this.state.videos } />

    Any time App re-renders, VideoList will get the new list of videos as well.

In VideoList (a functional component), the 'props' object will arrive as an argument to the function:

        const VideoList = (props) => {
            const videos = props.videos;
        }

NOTE: But in a class-based component, 'props' are available anywhere, for any method we define, by writing 'this.props'  So when changing a functional component to a class-based component, you must refactor props to this.props.


***Building Lists with Map***




















