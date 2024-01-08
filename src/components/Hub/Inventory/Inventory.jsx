import PropTypes from 'prop-types';

import './Inventory.scss';
import { Link } from 'react-router-dom';

import baseUrl from '../../../assets/baseUrl';

const Inventory = ({ product }) => {
  return (
    <section className="hub__inventory">
      <h2 className="hub__inventory__title">INVENTAIRE</h2>
      <div className="hub__grid__wrapper">
        {
          /* {parsedUser.product && */
          product.map((currentProduct) => (
            <Link to={`/produits/${currentProduct.id}`} key={currentProduct.id}>
              <div>
                <div className="hub__item__container">
                  <img
                    src={`${baseUrl}/images/product/${currentProduct.picture}`}
                    alt={currentProduct.title}
                    className="hub__inventory__item"
                  />
                  {currentProduct.ad === null ? '' : <p>En vente</p>}
                </div>

                <p>{currentProduct.title}</p>
              </div>
            </Link>
          ))
        }
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
