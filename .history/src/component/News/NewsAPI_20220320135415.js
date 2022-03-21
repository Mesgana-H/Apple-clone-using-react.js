import React, { useState, useEffect } from 'react';
import './styles.css';
// import './bootstrap.css';

const NewsAPI = (props) => {
	const [ news, setNews ] = useState([]);

	useEffect(() => {
		fetch(
			'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&relevanceLanguage=en&part=snippet,id&order=date&maxResults=6'
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.articles);
				setNews(data.articles);
			});
	}, []);

	return (
		<div>
			<h2 className="ml-5 mt-5 blue">{props.head}</h2>
			<div className="main-wrapper-news News-Sec">
				{/* <div className="container">
				<div className="row"> */}
				{news.map((el) => {
					return (
						<div className="video-wrapper ">
							<a className="imageL" href={el.url} target="_blank">
								<img src={el.urlToImage} width="450px" height="330px" />
								<div className="tittle ">{el.title}</div>
							</a>
							<div className="pt-1 description">
								<h6>{el.description}</h6>
							</div>
							<p>By {el.author}</p>
						</div>
					);
				})}
			</div>
		</div>
		// </div>
	);
};

export default NewsAPI;
