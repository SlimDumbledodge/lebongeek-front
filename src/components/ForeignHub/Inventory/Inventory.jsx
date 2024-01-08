import PropTypes from 'prop-types';

import './Inventory.scss';

import { Link } from 'react-router-dom';

import baseUrl from '../../../assets/baseUrl';

const Inventory = ({ product }) => {
  return (
    <section className="hub__foreign__inventory">
      <h2 className="hub__foreign__inventory__title">INVENTAIRE</h2>
      <div className="hub__foreign__grid__wrapper">
        {product.map((currentProduct) => {
          if (currentProduct.ad === null) {
            return (
              <div key={currentProduct.id}>
                <div className="hub__foreign__inventory__img__container">
                  <img
                    src={`${baseUrl}/images/product/${currentProduct.picture}`}
                    alt={currentProduct.title}
                    className="hub__foreign__inventory__item"
                  />
                </div>
                <p>{currentProduct.title}</p>
              </div>
            );
          }

          return (
            <Link
              to={`/${currentProduct.category.slug}/${currentProduct.ad.id}`}
              key={currentProduct.id}
            >
              <div>
                <div className="hub__foreign__inventory__img__container">
                  <img
                    src={`${baseUrl}/images/product/${currentProduct.picture}`}
                    alt={currentProduct.title}
                    className="hub__foreign__inventory__item"
                  />
                  <p className="hub__foreign__inventory__selltext">En vente</p>
                  <div className="hub__foreign__inventory__opacity" />
                </div>
                <p>{currentProduct.title}</p>
              </div>
            </Link>
          );
        })}
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
