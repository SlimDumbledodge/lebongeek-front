import PropTypes from 'prop-types';

import './Inventory.scss';

const Inventory = ({ product }) => {
  return (
    <section className="hub__inventory">
      <h2 className="hub__inventory__title">INVENTAIRE</h2>
      <div className="hub__grid__wrapper">
        {product.map((currentProduct) => (
          <div key={currentProduct.id}>
            <img
              src={currentProduct.picture}
              alt={currentProduct.title}
              className="hub__inventory__item"
            />

            <p>{currentProduct.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

Inventory.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      picture: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Inventory;
