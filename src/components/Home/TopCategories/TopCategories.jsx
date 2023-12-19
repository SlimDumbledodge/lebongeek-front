/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

import './TopCategories.scss';

const TopCategories = () => {
  const categoriesList = useSelector((state) => state.category.listCategories);

  if (!categoriesList) {
    return <div>Chargement...</div>;
  }

  return (
    <section className="top__categories__container">
      <h2 className="top__categories__title">TOP CATEGORIES</h2>
      <div className="top__categories__grid__wrapper">
        {categoriesList.slice(0, 5).map((category) => (
          <Link
            to={`/annonces/${category.slug}`}
            key={category.id}
            type="button"
          >
            <img
              src={category.image}
              alt=""
              className="top__categories__item"
            />
          </Link>
        ))}
        <Link to="/categories">
          Voir les catégories
          <FontAwesomeIcon className="wrapper__icons" icon={faAnglesRight} />
        </Link>
      </div>
    </section>
  );
};

export default TopCategories;
