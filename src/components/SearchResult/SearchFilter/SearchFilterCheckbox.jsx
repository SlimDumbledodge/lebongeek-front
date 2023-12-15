/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

const SearchFilterCheckbox = ({ title, system }) => {
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
        // checked={}
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

SearchFilterCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  system: PropTypes.string.isRequired,
};

export default SearchFilterCheckbox;
