import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import HeaderNav from '../HeaderNav/HeaderNav';
<<<<<<< HEAD
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

import 'semantic-ui-css/semantic.min.css';

=======
import Hub from '../Hub/Hub';
import AddAd from '../AddAd/AddAd';
import Footer from '../Footer/Footer';
>>>>>>> fd29e453fc80d88c3ba57fcff6b2b0e0b3981e3d
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderNav />
<<<<<<< HEAD
      <Home />
=======
      <Routes>
        <Route path="/hub" element={<Hub />} />
        <Route path="/depot_annonce" element={<AddAd />} />
      </Routes>
>>>>>>> fd29e453fc80d88c3ba57fcff6b2b0e0b3981e3d
      <Footer />
    </div>
  );
}

export default App;
