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
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top_categories__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top_categories__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top_categories__item"
        />
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
          alt=""
          className="top_categories__item"
        />
        <div className="top_categories__next">
          Afficher les catégories
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
