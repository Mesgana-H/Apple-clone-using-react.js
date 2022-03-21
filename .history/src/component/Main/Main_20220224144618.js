

import Topsection from './component/topSections/Topsection';
import Midsection from './component/midSection/MidSection';
import DiffStyle from './component/header/DiffStyle';
import Newmidsection from './component/midSection/Newmidsection';
import Section6 from './component/midSection/Section6';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Topsection} />
				<Route 

				<Iphones />
				
				<Topsection />
				<Midsection />
				<Section6 />
				<Footer />
			</Switch>
		</Router>
	);
}

export default App;
