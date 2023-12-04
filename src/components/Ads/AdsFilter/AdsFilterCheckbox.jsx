import PropTypes from 'prop-types';

const AdsFilterCheckbox = ({ title }) => {
  return (
    <div className="ads__filter__checkbox">
      <input
        className="ads__filter__checkbox__input"
        type="checkbox"
        id={title}
        name={title}
      />
      <label className="ads__filter__checkbox_label" htmlFor={title}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </label>
    </div>
  );
};

AdsFilterCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AdsFilterCheckbox;
