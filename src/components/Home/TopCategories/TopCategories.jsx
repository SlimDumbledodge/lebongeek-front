<<<<<<< HEAD
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
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top__categories__item"
=======
import './TopCategories.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const TopCategories = () => {
  return (
    <section className="top_categories">
      <h2 className="top_categories__title">TOP CATEGORIES</h2>
      <div className="grid__wrapper">
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top_categories__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="top__categories__item"
=======
          className="top_categories__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="top__categories__item"
=======
          className="top_categories__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="top__categories__item"
=======
          className="top_categories__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="top__categories__item"
        />
        <Link to="/categories">
          Voir les catégories
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </Link>
=======
          className="top_categories__item"
        />
        <div className="top_categories__next">
          Afficher les catégories
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </div>
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
      </div>
    </section>
  );
};

export default TopCategories;
