import './DerVentes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const DerVentes = () => {
  return (
    <section className="dernieres_ventes">
      <h2 className="dernieres_ventes__title">DERNIERES VENTES</h2>
      <div className="grid__wrapper">
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="dernieres_ventes__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="dernieres_ventes__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="dernieres_ventes__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="dernieres_ventes__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="dernieres_ventes__item"
        />
        <div className="dernieres_ventes__next">
          Afficher dernières ventes
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </div>
      </div>
    </section>
  );
};

export default DerVentes;
