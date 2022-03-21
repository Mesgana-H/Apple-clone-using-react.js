import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';

import Footer from './component/footer/Footer';
import Iphones from './component/iPhones/Iphones';
import Main from './component/Main/Main';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/#" exact element={Main} />
				<Route path="/iphone" exact element={Iphones} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
