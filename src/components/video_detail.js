import React from 'react'

// no state needed, so define a functional component
const VideoDetail = ({ video }) => {

	// ensures that a video exists before running this component
	if(!video){
		return (
			<div>Loading . . .</div>
		);
	}

	const vidTitle = video.snippet.title;
	const vidDesc = video.snippet.description;
	const vidId = video.id.videoId;
	// use ES6 template string notation to combine string fragments:
	const vidUrl = `https://www.youtube.com/embed/${vidId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item"
					src={vidUrl}>
				</iframe>
			</div>

			<div className="details">
				<div>{ vidTitle }</div>
				<div>{ vidDesc }</div>
			</div>
		</div>
	);
}

export default VideoDetail