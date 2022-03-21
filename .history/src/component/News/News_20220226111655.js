import React from 'react';
import NewsAPI from './NewsAPI';
import YouTube from './Youtube';

function News() {
	return (
		<div className="News-Sec ">
			<h1 className="text-center pt-5">Latest News</h1>
			<YouTube head="Apple on Youtube" />
			<NewsAPI />
		</div>
	);
}

export default News;
