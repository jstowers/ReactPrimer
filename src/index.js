import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCzlbS_5vStroDmcda8Rhk9Ok0WRCKi8nQ';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');


		// in ES6, when a property (videos) and value (videos) are the same name:
		//		this.setState({ videos:videos })
		// we can shorten the notation to:
		//		this.setState({ videos })
		
	}

	videoSearch(searchTerm) {

		// to allow user to see videos when page first loads, move YTSearch() into contructor function
		// remember, the constructor function is the first function called each time the class App is instantiated
		
		YTSearch({key:API_KEY, term:searchTerm}, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {

		// created an arrow function that we pass to _.debounce
		// _.debounce takes the inner function that was passed and returns a new
		// function that can only be called every 300 ms.
		// so videoSearch is a version of the inner function called only every 300 ms.
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<h2>React YouTube Video Player</h2>
				<SearchBar 
					onSearchTermChange = {videoSearch} />
				<VideoDetail 
					video = {this.state.selectedVideo} />
				<VideoList 
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));






