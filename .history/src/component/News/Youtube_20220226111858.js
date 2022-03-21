import React, { useEffect, useState } from 'react';
import './styles.css';

function YouTube() {
	const [ video, setVideo ] = useState([]);

	useEffect(() => {
		fetch(
			'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6'
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.items);
				setVideo(data.items);
				// setVideo(response.data.items);
			});
	}, []);

	return (
		<div className="main-wrapper-news">
			<h2>{props.head}</h2>
			{video.map((el) => {
				let vidId = el.id.videoId;
				let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

				return (
					<div className="video-wrapper">
						<div className="videoLink">
							<a href={vidLink} target="_blank">
								<img src={el.snippet.thumbnails.high.url} alt="" />
							</a>
						</div>
						<div className="tittle">
							<h1>{el.snippet.channelTitle}</h1>
						</div>
						<div className="description">
							<h6>{el.snippet.description}</h6>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default YouTube;
