<<<<<<< HEAD
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import TopCategories from './TopCategories/TopCategories';
import LastSells from './LastSells/LastSells';
import './Home.scss';
=======
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import DerVentes from './DerVentes/DerVentes';
import TopCategories from './TopCategories/TopCategories';
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7

// Mise en page générale de la page d'accueil/Home

const Home = () => {
  return (
<<<<<<< HEAD
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
      <Link to="figurine/1">Liens vers le détail d'une annonce</Link>
=======
    <div className="home_container">
      {/* Intégration du composant Banner */}
      <Banner />
      <div className="home__container__title">
        <h1>Bienvenue sur LeBonGeek</h1>
      </div>

      <div className="description_container">
        Achetez et vendez vos cartes, jeux-vidéo, figurines facilement ! Tous
        vos articles favoris sont sur leBonGeek ! Accédez à des milliers
        d'annonces et gérez vos collections dans votre inventaire. Avec
        LeBonGeek, trouver la perle rare n'a jamais été aussi simple !
      </div>
      {/* Intégration du composant Inventaire */}
      <Inventory />
      {/* Intégration du composant TopCategories */}
      <DerVentes />
      <TopCategories />
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
    </div>
  );
};

export default Home;
