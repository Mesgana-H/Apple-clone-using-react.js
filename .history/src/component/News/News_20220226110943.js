import React from 'react';
import NewsAPI from './NewsAPI';
import YouTube from './Youtube';

function News() {
	return (
		<div className="News-Sec ">
			<h1 className="text-center">Latest News</h1>
			<YouTube />
			<NewsAPI />
		</div>
	);
}

export default News;
