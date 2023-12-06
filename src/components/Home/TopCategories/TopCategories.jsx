/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import './TopCategories.scss';

const TopCategories = () => {
  return (
    <section className="top__categories__container">
      <h2 className="top__categories__title">TOP CATEGORIES</h2>
      <div className="top__categories__grid__wrapper">
        <img
          src="src/assets/images/Figurines.jpg"
          alt=""
          className="top__categories__item"
        />
        <img
          src="src/assets/images/Mario.jpg"
          alt=""
          className="top__categories__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top__categories__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top__categories__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top__categories__item"
        />
        <Link to="/categories">
          Voir les catégories
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </Link>
      </div>
    </section>
  );
};

export default TopCategories;
