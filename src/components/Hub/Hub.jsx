/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Description from './Description/Description';
import Inventory from './Inventory/Inventory';
import './Hub.scss';

import baseUrl from '../../assets/baseUrl';
import Loader from '../Loader/Loader';

const Hub = () => {
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;
  const isUserDataLoaded = useSelector((state) => state.hub.isUserDataLoaded);
  const isUserLogged = useSelector((state) => state.login.isCookieFilled);

  return (
    <>
      <Banner banner={`${baseUrl}/images/user/banner/${parsedUser.banner}`} />
      <Description
        username={parsedUser.username}
        avatar={`${baseUrl}/images/user/avatar/${parsedUser.avatar}`}
        description={parsedUser.description}
      />
      <div className="hub__wrapper__buttons">
        <Link to="/modifier-mon-profil">
          <Button className="hub__buttons" id="hub__edit__hub">
            Modifier mon profil
          </Button>
        </Link>
        <Link to="/ajouter-un-produit">
          <Button className="hub__buttons" id="hub__add__product">
            Ajouter un produit à l'inventaire
          </Button>
        </Link>
      </div>

      <Inventory product={parsedUser.product} />
      <div id="hub__delete__account__container">
        <Button id="hub__delete__account">Supprimer mon profil</Button>
      </div>
    </>
  );
};

export default Hub;
