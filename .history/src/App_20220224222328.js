import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Topsection from './component/topSections/Topsection';
import Midsection from './component/midSection/MidSection';
import DiffStyle from './component/header/DiffStyle';
// import Newmidsection from './component/midSection/Newmidsection';
import Section6 from './component/midSection/Section6';
import Footer from './component/footer/Footer';
import Iphones from './component/iPhones/Iphones';
import Main from './component/Main/Main';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" exact component={Main} />
				<Route path="/iphone" exact component={Iphones} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
