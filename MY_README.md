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

        


2.  Install a small package for searching


