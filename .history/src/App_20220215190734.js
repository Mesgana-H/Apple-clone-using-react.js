
import Header from './component/header/Header'
import Topsection from './component/topSections/Topsection';
import Midsection from './component/midSection/MidSection'
import DiffStyle from './component/header/DiffStyle';
import Newmidsection from './component/midSection/Newmidsection';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <DiffStyle />
      {/* <Newmidsection/> */}
      <Topsection />
      <Midsection/>
    </div>
  );
}

export default App;
