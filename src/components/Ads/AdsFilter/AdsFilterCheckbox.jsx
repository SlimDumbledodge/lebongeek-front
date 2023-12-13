/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

const AdsFilterCheckbox = ({ title, system }) => {
  const { slug } = useParams();

  const categoriesList = useSelector((state) => state.category.listCategories);

  const currentCategory = categoriesList.find(
    (category) => category.slug === slug
  );

  const handleChange = () => {
    // Rien
  };

  return (
    <div className={`ads__filter__checkbox__${system}`}>
      <input
        className={`ads__filter__checkbox__input__${system}`}
        type="radio"
        id={title}
        name="adsFilterCategoriesCheckbox"
        checked={currentCategory.name === title}
        onChange={handleChange}
      />
      <label
        className={`ads__filter__checkbox_label__${system}`}
        htmlFor={title}
      >
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </label>
    </div>
  );
};

AdsFilterCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  system: PropTypes.string.isRequired,
};

export default AdsFilterCheckbox;
