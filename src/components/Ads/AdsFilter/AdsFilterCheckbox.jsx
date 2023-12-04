import PropTypes from 'prop-types';

const AdsFilterCheckbox = ({ title, system }) => {
  return (
    <div className={`ads__filter__checkbox__${system}`}>
      <input
        className={`ads__filter__checkbox__input__${system}`}
        type="radio"
        id={title}
        name={title}
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
