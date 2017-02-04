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

Was able to map a list with 'Video' for each item but not the YouTube data for each video.

        Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`. See https://fb.me/react-warning-keys for more information.

So if we define a unique key from the data, React can efficiently update the array elements when new data is obtained from an HTTP request:

        return <VideoListItem key = {video.etag} video = { video } />


***Adding Video Details to List***

video_list_item receives a video as a property from video_list.

To access this prop, you can type either of the following:

    Traditional declaration:
        const VideoListItem = (props) => {
            const video = props.video;
            . . .
        }

    ES6 syntax:
        const VideoListItem = ({video}) {
            . . .
        }

The ES6 syntax declares a constant video equal to props.video.

###Friday, February 3, 2017###

***Add Video_Detail Component***

When designing a new component, you have to ask:

        Do I expect this component to need to maintain any type of state?

video_detail needs:

    1.  video title
    2.  video description

these are properties passed down from the App component and don't require any change in state.

'<iframe>' element:

        Specifies an inline frame.  An inline frame is used to embed another document within the current HTML document.

ES6 Template String Notation:

        const vidUrl = "https://www.youtube.com/embed/" + vidId; 
        
        const vidUrl = `https://www.youtube.com/embed/${vidId}`;


***Handling Null Props***
React works very fast to render components, sometimes before the HTTP request has been returned.  In this case, the properties will be 'null'.  If React attempts to render a 'null' property, the error will returned 'undefined'.

So we can add an 'if' statement at the start of a component, so the component will only run if necessary properties have been specified:

    const VideoDetail = ({ video }) => {
        if(!video){
            return (
                <div>Loading . . .</div>
            );
        }

        . . .
    }


### Saturday, February 4, 2017 ###

***Video Selection***
Want to be able to select a video in the video detail box and then have that video play in the player.

Steps:

1.  Define a selectedVideo property (a video object) in this.state for the App component.

2.  The selectedVideo will always be passed into the VideoDetail component to play.

3.  To update the selected video, we will pass a callback from App into VideoList, and then from VideoList into VideoListItem.

4.  Whenever VideoListItem is clicked, it will run the callback with the video that belongs to it.  

Process:

onVideoSelect() is a callback function that updates App's state with a new selected video.  The callback function is property passed down to component VideoList:

    <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />

VideoList then passes down the callback function to VideoListItem:

    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect = { props.onVideoSelect }
                key = {video.etag} 
                video = { video } />
        );
    });        

Inside VideoListItem, need to create an event handler for when the user clicks on a list item '<li>'


***Throttling the Search Term Input***
We can search for new content in search box, but the search is laggy and the playlist changes occur too often.  So we can throttle back how often the playlist updates.

We can throttle the search bar change using debounce from the lodash library:

        $ npm install --save lodash



?? QUESTION ??
When I change the search term, the video playing changes as well.  How do I modify the search without changing the video . . . add a Submit button that will only change the playing video when clicked?

***Recap***


1. Class-based vs. Functional Components

        Class => use if the component needs state

2.  State
        Whenever change state, component instantly re-renders (along with any children)

3.  Import and Export Statements

        Our files => relative file reference

        Library => just name

4.  Callbacks
    
        Great for parent-child communication with minimal overhead, as long as you keep the callback within two component levels.  Any deeper and they become unwieldy.

        In Redux-themed applications, use fewer callbacks

5.  Component Level State
    
        Components contain their own state.

        This will change in Redux.  More application level.






