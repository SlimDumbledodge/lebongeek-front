/* eslint-disable react/no-unescaped-entities */
import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCategories } from '../../actions/category';

import HeaderNav from '../HeaderNav/HeaderNav';
import Home from '../Home/Home';
import Hub from '../Hub/Hub';
import AddAdFromHome from '../AddAdFromHome/AddAdFromHome';
import AdDetails from '../AdDetails/AdDetails';
import Footer from '../Footer/Footer';
import Ads from '../Ads/Ads';
import Connexion from '../Connexion/Connexion';

import './App.scss';
import Register from '../Register/Register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/depot_annonce" element={<AddAdFromHome />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="connexion/cree_un_compte" element={<Register />} />
        <Route path="/annonces/:id" element={<Ads />} />

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
