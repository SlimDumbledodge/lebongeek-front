/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import TopCategories from './TopCategories/TopCategories';
import LastSells from './LastSells/LastSells';

import './Home.scss';
import { closeLoginSuccessFullyPopup } from '../../actions/login';

const Home = () => {
  const isSuccessfullyLoginPopupOpen = useSelector(
    (state) => state.login.isSuccessfullyLoginPopupOpen
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Banner />
      <h1 className="home__title">Bienvenue sur LeBonGeek</h1>

      <div className="home__description__container">
        <p>
          Achetez et vendez vos cartes, jeux-vidéo, figurines facilement ! Tous
          vos articles favoris sont sur leBonGeek ! Accédez à des milliers
          d'annonces et gérez vos collections dans votre inventaire. Avec
          LeBonGeek, trouver la perle rare n'a jamais été aussi simple !
        </p>
      </div>
      <Inventory />
      <TopCategories />
      <LastSells />
    </div>
  );
};

export default Home;
