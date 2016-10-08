import React from 'react';

const MainVideo = (props) => {
	console.log(props);
	const videoList = props.videos.map((video)=>{
		return <p key={video.etag}>{video.snippet.title}</p>
	})
	return (
		<div>{videoList}</div>
	);
};



export default MainVideo;