/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const Ad = ({ title, price }) => {
  return (
    <a href="/" className="ad">
      <img
        src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Une annonce"
        className="ad__image"
      />
      <p className="ad__title">
        {title} - {price}€
      </p>
    </a>
  );
};

Ad.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Ad;
