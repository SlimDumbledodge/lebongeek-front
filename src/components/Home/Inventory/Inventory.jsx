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
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="inventory__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="inventory__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="inventory__item"
        />

        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="inventory__item"
        />
        <div className="inventory__next">
          Afficher l'inventaire
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </div>
      </div>
    </section>
  );
};

export default Inventory;
