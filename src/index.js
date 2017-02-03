// Sec. 2, Lec. 22
// Convert functional component to class-based component

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCzlbS_5vStroDmcda8Rhk9Ok0WRCKi8nQ';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],

		}

		// to allow user to see videos when page first loads, move YTSearch() into contructor function
		// remember, the constructor function is the first function called each time the class App is instantiated
		
		// in ES6, when a property (videos) and value (videos) are the same name:
		//		this.setState({ videos:videos })
		//		
		// we can shorten the notation to:
		//		this.setState({ videos })
		

		YTSearch({key:API_KEY, term:'tropical butterflies'}, videos => {
			console.log('videos =', videos);
			this.setState({ videos });
		});

	}

	render() {
		return (
			<div>
				Hello, World!
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));






