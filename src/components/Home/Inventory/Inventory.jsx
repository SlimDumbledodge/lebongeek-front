/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Inventory.scss';

import baseUrl from '../../../assets/baseUrl';

const Inventory = () => {
  const isUserLogged = useSelector((state) => state.login.isCookieFilled);
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;
  const isDataLoaded = useSelector((state) => state.login.isDataLoaded);

  let inventory = [];
  if (isUserLogged && !isDataLoaded && !currentUser) {
    return <div>Chargement...</div>;
  }

  if (isUserLogged) {
    inventory = parsedUser.product.slice(0, 5);
  }

  return isUserLogged ? (
    <section className="home__inventory">
      <h2 className="home__inventory__title">INVENTAIRE</h2>
      <Link to="/hub" className="home__show__inventory">
        Voir l'inventaire
        <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
      </Link>
      <div className="home__grid__wrapper">
        {inventory.map((currentInventoryItem) => (
          <div key={currentInventoryItem.id}>
            <img
              src={`${baseUrl}/images/product/${currentInventoryItem.picture}`}
              alt={currentInventoryItem.title}
              className="home__inventory__item"
            />
          </div>
        ))}
      </div>
    </section>
  ) : null;
};

export default Inventory;
