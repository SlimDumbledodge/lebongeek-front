/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const Ad = ({ title, price, image, onClickPropAd }) => {
  return (
    <button type="button" className="ad" onClick={onClickPropAd}>
      <img src={image} alt="Une annonce" className="ad__image" />
      <p className="ad__title">
        {title} - {price}€
      </p>
    </button>
  );
};

Ad.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClickPropAd: PropTypes.func.isRequired,
};

export default Ad;
