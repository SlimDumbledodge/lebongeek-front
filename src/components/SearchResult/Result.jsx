/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const Result = ({ title, price, image }) => {
  return (
    <button type="button" className="ad">
      <img src={image} alt="Une annonce" className="ad__image" />
      <p className="ad__title">
        {title} - {price}€
      </p>
    </button>
  );
};

Result.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Result;
