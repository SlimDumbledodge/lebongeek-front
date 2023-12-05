/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import TopCategories from './TopCategories/TopCategories';
import LastSells from './LastSells/LastSells';
import './Home.scss';

const Home = () => {
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
      <Link to="figurine/1">Liens vers le détail d'une annonce</Link>
    </div>
  );
};

export default Home;
