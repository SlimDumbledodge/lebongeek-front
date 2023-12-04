<<<<<<< HEAD
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Inventory.scss';

const Inventory = () => {
  return (
    <section className="home__inventory">
      <h2 className="home__inventory__title">INVENTAIRE</h2>
      <div className="home__grid__wrapper">
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="home__inventory__item"
=======
import './Inventory.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Inventory = () => {
  return (
    <section className="inventory">
      <h2 className="inventory__title">INVENTAIRE</h2>
      <div className="grid__wrapper">
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="inventory__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="home__inventory__item"
=======
          className="inventory__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="home__inventory__item"
=======
          className="inventory__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="home__inventory__item"
=======
          className="inventory__item"
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
        />

        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
<<<<<<< HEAD
          className="home__inventory__item"
        />
        <Link to="/hub">
          Voir l'inventaire
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </Link>
=======
          className="inventory__item"
        />
        <div className="inventory__next">
          Afficher l'inventaire
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </div>
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
      </div>
    </section>
  );
};

export default Inventory;
