/* eslint-disable react/no-unescaped-entities */
import { Route, Routes } from 'react-router-dom';

import HeaderNav from '../HeaderNav/HeaderNav';
import Home from '../Home/Home';
import Hub from '../Hub/Hub';
import AddAd from '../AddAd/AddAd';
import AdDetails from '../AdDetails/AdDetails';
import Footer from '../Footer/Footer';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderNav />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/depot_annonce" element={<AddAd />} />
        <Route path="/figurine/1" element={<AdDetails />} />
        <Route
          path="categories"
          element={<div>Ici doit s'afficher toutes les catégories</div>}
        />
        <Route
          path="derniere_ventes"
          element={<div>Ici doivent s'afficher les dernières ventes</div>}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>

=======
      <Home />
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
      <Footer />
    </div>
  );
}

export default App;
