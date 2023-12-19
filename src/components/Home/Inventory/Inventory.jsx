/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Inventory.scss';

const Inventory = () => {
  const isUserLogged = useSelector((state) => state.login.isCookieFilled);
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  if (isUserLogged && !parsedUser) {
    return <div>Chargement...</div>;
  }

  return isUserLogged ? (
    <section className="home__inventory">
      <h2 className="home__inventory__title">INVENTAIRE</h2>
      <div className="home__grid__wrapper">
        {parsedUser.product.map((currentInventoryItem) => (
          <div key={currentInventoryItem.id}>
            <img
              src={currentInventoryItem.picture}
              alt={currentInventoryItem.title}
              className="home__inventory__item"
            />
          </div>
        ))}

        <Link to="/hub">
          Voir l'inventaire
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </Link>
      </div>
    </section>
  ) : null;
};

export default Inventory;
