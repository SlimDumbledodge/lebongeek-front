/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import './LastSells.scss';

const LastSells = () => {
  return (
    <section className="last__sells__container">
      <h2 className="last__sells__title">DERNIERES VENTES</h2>
      <div className="last__sells__grid__wrapper">
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="last__sells__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="last__sells__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="last__sells__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="last__sells__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="last__sells__item"
        />
        <Link to="/derniere_ventes">
          Voir les dernières ventes
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </Link>
      </div>
    </section>
  );
};

export default LastSells;
