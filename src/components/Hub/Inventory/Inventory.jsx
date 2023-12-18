import Cookies from 'js-cookie';
import './Inventory.scss';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;
  console.log(parsedUser);

  return (
    <section className="hub__inventory">
      <h2 className="hub__inventory__title">INVENTAIRE</h2>
      <div className="hub__grid__wrapper">
        {parsedUser.product.map((currentProduct) => (
          <Link to={`/products/${currentProduct.id}`} key={currentProduct.id}>
            <div>
              <img
                src={currentProduct.picture}
                alt={currentProduct.title}
                className="hub__inventory__item"
              />
              <p>{currentProduct.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
