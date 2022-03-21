import React, { useState, useEffect } from 'react';
import './styles.css';
// import './bootstrap.css';

const NewsAPI = () => {
	const [ news, setNews ] = useState([]);

	useEffect(() => {
		fetch(
			'https://newsapi.org/v2/everything?q=en&%22Apple%22&from=2022-02-23&to=2022-02-23&sortBy=publishedAt&maxResults=10&apiKey=178021481aed4bf9a6c04e84c70235f8'
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.articles);
				setNews(data.articles);
			});
	}, []);

	return (
		<div className="main-wrapper News-Sec">
			{/* <div className="container">
				<div className="row"> */}
			{news.map((el) => {
				return (
					<div className="video-wrapper ">
						<a className="imageL" href={el.url} target="_blank">
							<img src={el.urlToImage} width="450px" height="330px" />
							<div className="tittle ">{el.title}</div>
						</a>
						<h6 className="pt-1">{el.description}</h6>
						<p>By {el.author}</p>
					</div>
				);
			})}
		</div>
		// </div>
		// </div>
	);
};

export default NewsAPI;
