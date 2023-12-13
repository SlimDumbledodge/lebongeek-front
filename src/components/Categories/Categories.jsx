import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './Categories.scss';

const Categories = () => {
  const categoriesList = useSelector((state) => state.category.listCategories);

  return (
    <section className="categories__container">
      <h1 className="categories__title">Les catégories</h1>
      <div className="categories__grid__wrapper">
        {categoriesList.map((category) => (
          <Link
            to={`/annonces/${category.slug}`}
            key={category.id}
            type="button"
          >
            <img src={category.image} alt="" className="categories__item" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
