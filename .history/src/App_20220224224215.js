import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';

import Footer from './component/footer/Footer';
import Iphones from './component/iPhones/Iphones';
import Main from './component/Main/Main';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/Mac/" exact element={Main} />
					<Route path="/iphone" exact element={Iphones} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
