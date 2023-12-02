import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import Hub from '../Hub/Hub';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/hub" element={<Hub />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
