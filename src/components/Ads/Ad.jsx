/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const Ad = ({ title, price, image }) => {
  return (
    <a href="/" className="ad">
      <img src={image} alt="Une annonce" className="ad__image" />
      <p className="ad__title">
        {title} - {price}€
      </p>
    </a>
  );
};

Ad.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Ad;
