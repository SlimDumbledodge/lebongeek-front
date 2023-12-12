/* eslint-disable react/no-unescaped-entities */
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Description from './Description/Description';
import Inventory from './Inventory/Inventory';
import './Hub.scss';

const Hub = () => {
  return (
    <>
      <Banner />
      <Description />
      <div className="hub__wrapper__buttons">
        <Link to="/modifier-mon-profil">
          <Button className="hub__buttons">Modifier mon profil</Button>
        </Link>
        <Button className="hub__buttons">
          Ajouter un produit à l'inventaire
        </Button>
      </div>

      <Inventory />
    </>
  );
};

export default Hub;
