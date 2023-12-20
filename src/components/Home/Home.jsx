/* eslint-disable react/no-unescaped-entities */
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import TopCategories from './TopCategories/TopCategories';
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
    </div>
  );
};

export default Home;
