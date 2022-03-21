import React from 'react';
import NewsAPI from './NewsAPI';
import YouTube from './Youtube';

function News() {
	return (
		<div className="News-Sec ">
			<h1 className="text-center pt-5">Latest News</h1>
			<YouTube <h3 className="text-center">Apple on Youtube</h3>/>
			<NewsAPI />
		</div>
	);
}

export default News;
