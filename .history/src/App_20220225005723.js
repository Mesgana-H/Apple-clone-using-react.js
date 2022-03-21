import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';

import Footer from './component/footer/Footer';
import Iphones from './component/iPhones/Iphones';
import Main from './component/Main/Main';
import Mac from './component/mac/Mac';
import Page404 from './component/404Page/Page404';

import News from './component/News/News';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/" exact element={<Main />} />
					<Route path="/iphone" exact element={<Iphones />} />
					<Route path="/Mac" exact element={<Mac />} />
					<Route path="/news" exact element={<News />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
