import React from 'react';
import Cookies from 'js-cookie';
import { Button, Image, Label } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  const currentProduct = parsedUser.product.find(
    (product) => product.id === id
  );

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="ad__details__container">
      <h2 className="ad__details__title">{currentProduct.title}</h2>
      <Image src={parsedUser.avatar} size="mini" circular inline />
      <span className="ad__details__pseudo">{parsedUser.username}</span>

      <img
        src={currentProduct.picture}
        alt=""
        className="ad__details__picture"
      />
      <Label content={parsedUser.email} icon="mail" id="ad__details__mail" />
      <Label content={parsedUser.phone_number} icon="phone" />
      <Label id="ad__details__state__tag">
        Numéro de série : {currentProduct.serial_number}
      </Label>
      <Label id="ad__details__state__tag">
        Année de sortie :{currentProduct.year}
      </Label>

      <Link to={`/vendre-mon-produit/${id}`}>
        <Button size="medium" className="ad__details__button__buy">
          Vendre mon produit
        </Button>
      </Link>
    </div>
  );
};

export default ProductPage;
