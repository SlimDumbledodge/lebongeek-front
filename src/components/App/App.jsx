/* eslint-disable react/no-unescaped-entities */
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from '../../actions/category';
import { getUser } from '../../actions/hub';

import HeaderNav from '../HeaderNav/HeaderNav';
import Home from '../Home/Home';
import Hub from '../Hub/Hub';
import AddAdFromHome from '../AddAdFromHome/AddAdFromHome';
import AdDetails from '../AdDetails/AdDetails';
import Footer from '../Footer/Footer';
import Ads from '../Ads/Ads';
import Connexion from '../Connexion/Connexion';
import Transaction from '../Transaction/Transaction';

import './App.scss';
import Register from '../Register/Register';
import EditHub from '../EditHub/EditHub';
import ForeignHub from '../ForeignHub/ForeignHub';
import Categories from '../Categories/Categories';
import ErrorPage from '../ErrorPage/ErrorPage';
import AddProduct from '../AddProduct/AddProduct';
import ProductPage from '../ProductPage/ProductPage';
import TransformProductInAd from '../TransformProductInAd/TransformProductInAd';
import SearchResult from '../SearchResult/SearchResult';
import EditProduct from '../EditProduct/EditProduct';
import Faq from '../Faq/Faq';
import Legals from '../Legals/Legals';
import Contact from '../Contact/Contact';
import Loader from '../Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isCategoriesLoaded = useSelector(
    (state) => state.category.isCategoriesLoaded
  );
  const isUserLogged = useSelector((state) => state.login.isCookieFilled);

  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isUserLogged) {
      dispatch(getUser());
    }
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  if (!isCategoriesLoaded) {
    return <Loader />;
  }

  return (
    <div className="App" ref={scrollRef}>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />

        {isUserLogged ? (
          <>
            <Route path="/hub" element={<Hub />} />
            <Route path="/depot_annonce" element={<AddAdFromHome />} />
            <Route path="/transaction/:id" element={<Transaction />} />
            <Route path="/modifier-mon-profil" element={<EditHub />} />
            <Route path="/ajouter-un-produit" element={<AddProduct />} />
            <Route path="/produits/:id" element={<ProductPage />} />
            <Route
              path="/vendre-mon-produit/:id"
              element={<TransformProductInAd />}
            />
            <Route path="/modifier-mon-produit/:id" element={<EditProduct />} />
            <Route path="/cree_un_compte" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/hub" element={<Navigate to="/connexion" />} />
            <Route
              path="/depot_annonce"
              element={<Navigate to="/connexion" />}
            />
            <Route
              path="/transaction/:id"
              element={<Navigate to="/connexion" />}
            />
            <Route
              path="/modifier-mon-profil"
              element={<Navigate to="/connexion" />}
            />
            <Route
              path="/ajouter-un-produit"
              element={<Navigate to="/connexion" />}
            />
            <Route
              path="/produits/:id"
              element={<Navigate to="/connexion" />}
            />
            <Route
              path="/vendre-mon-produit/:id"
              element={<Navigate to="/connexion" />}
            />
            <Route
              path="/modifier-mon-produit/:id"
              element={<Navigate to="/connexion" />}
            />
          </>
        )}

        <Route path="/faq" element={<Faq />} />
        <Route path="/mentions-legales" element={<Legals />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="cree_un_compte" element={<Register />} />
        <Route path="/annonces/:slug" element={<Ads />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/recherche/:input/:page" element={<SearchResult />} />

        <Route path="/:slug/:id" element={<AdDetails />} />

        <Route path="/hub/:id" element={<ForeignHub />} />

        <Route path="/categories" element={<Categories />} />
        <Route
          path="/derniere-ventes"
          element={<div>Ici doivent s'afficher les dernières ventes</div>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
