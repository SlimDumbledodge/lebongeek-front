/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

const AdsFilterCheckbox = ({ title, system, onClickProp }) => {
  const categoryName = useSelector((state) => state.category.categoryName);

  return (
    <div className={`ads__filter__checkbox__${system}`} onClick={onClickProp}>
      <input
        className={`ads__filter__checkbox__input__${system}`}
        type="radio"
        id={title}
        name="adsFilterCategoriesCheckbox"
        checked={categoryName === title}
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
  onClickProp: PropTypes.func.isRequired,
};

export default AdsFilterCheckbox;
