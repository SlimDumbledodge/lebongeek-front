/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const AddResult = ({ title, price, image }) => {
  return (
    <button type="button" className="ad">
      <img src={image} alt="Une annonce" className="ad__image" />
      <p className="ad__title">
        {title} - {price}€
      </p>
    </button>
  );
};

AddResult.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default AddResult;
