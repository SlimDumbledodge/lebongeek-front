import Cookies from 'js-cookie';
import './Inventory.scss';

const Inventory = () => {
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  return (
    <section className="hub__inventory">
      <h2 className="hub__inventory__title">INVENTAIRE</h2>
      <div className="hub__grid__wrapper">
        {parsedUser.product.map((currentProduct) => (
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

export default Inventory;
