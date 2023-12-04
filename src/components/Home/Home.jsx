import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import DerVentes from './DerVentes/DerVentes';
import TopCategories from './TopCategories/TopCategories';

// Mise en page générale de la page d'accueil/Home

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;
