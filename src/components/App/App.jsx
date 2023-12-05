/* eslint-disable react/no-unescaped-entities */
import { Route, Routes } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import HeaderNav from '../HeaderNav/HeaderNav';
import Home from '../Home/Home';
import Hub from '../Hub/Hub';
import AddAd from '../AddAd/AddAd';
import AdDetails from '../AdDetails/AdDetails';
import Footer from '../Footer/Footer';
import Ads from '../Ads/Ads';
import Connexion from '../Connexion/Connexion';
import Transaction from '../Transaction/Transaction';

import './App.scss';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Transaction />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/depot_annonce" element={<AddAd />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="connexion/cree_un_compte" element={<Register />} />
        <Route path="annonces" element={<Ads />} />

        <Route path="/figurine/1" element={<AdDetails />} />
        <Route path="/connexion" element={<Connexion />} />
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

      <Footer />
    </div>
  );
}

export default App;
