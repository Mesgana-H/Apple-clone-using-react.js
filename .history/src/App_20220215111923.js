
import Header from './component/header/Header'
import Topsection from './component/topSections/Topsection';
import Midsection from './component/midSection/MidSection'
import DiffStyle from './component/header/diffStyle';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <DiffStyle />
      <Topsection />
      <Midsection/>
    </div>
  );
}

export default App;
