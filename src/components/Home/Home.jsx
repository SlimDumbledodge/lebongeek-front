/* eslint-disable react/no-unescaped-entities */
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import TopCategories from './TopCategories/TopCategories';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="home__container">
        <div className="home__description__container">
          {/* <h1 className="home__description__title">LE BON GEEK</h1> */}
          <p>
            Achetez et vendez vos cartes, jeux-vidéo, figurines facilement !
            Tous vos articles favoris sont sur LE BON GEEK ! Accédez à des
            milliers d'annonces et gérez vos collections dans votre inventaire.
            Avec LeBonGeek, trouver la perle rare n'a jamais été aussi simple !
          </p>
        </div>
        <Inventory />
        <TopCategories />
      </div>
    </div>
  );
};

export default Home;
