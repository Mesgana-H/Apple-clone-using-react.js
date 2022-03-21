import React from 'react';
import NewsAPI from './NewsAPI';
import YouTube from './Youtube';

function News() {
	return (
		<div className="News-Sec ">
			<h1 className="">Latest News</h1>
			<YouTube />
			<NewsAPI />
		</div>
	);
}

export default News;
