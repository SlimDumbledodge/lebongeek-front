import React from 'react';
import Cookies from 'js-cookie';
import { Button, Form, Image, Label } from 'semantic-ui-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions/deleteProduct';

import baseUrl from '../../assets/baseUrl';

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  id = parseInt(id, 10);
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  const currentProduct = parsedUser.product.find(
    (product) => product.id === id
  );

  console.log(parsedUser);
  console.log(currentProduct);

  if (!currentProduct) {
    return <div>Produit inexistant</div>;
  }

  return (
    <div className="ad__details__container">
      <h2 className="ad__details__title">
        {currentProduct.title} {currentProduct.ad === null ? '' : '- En vente'}
      </h2>
      <Form
        onSubmit={() => {
          dispatch(deleteProduct(id));
        }}
      >
        <Image
          src={`${baseUrl}/images/user/avatar/${parsedUser.avatar}`}
          size="mini"
          circular
          inline
        />
        {currentProduct.ad === null ? (
          <Link to={`/vendre-mon-produit/${id}`}>
            <Button size="medium" className="ad__details__button__buy">
              Vendre mon produit
            </Button>
          </Link>
        ) : (
          <Link to={`/${currentProduct.category.slug}/${currentProduct.ad.id}`}>
            <Button size="medium" className="ad__details__button__buy">
              Voir mon annonce
            </Button>
          </Link>
        )}
        <span className="ad__details__pseudo">{parsedUser.username}</span>

        <img
          src={`${baseUrl}/images/product/${currentProduct.picture}`}
          alt=""
          className="ad__details__picture"
        />

        <Label content={parsedUser.email} icon="mail" id="ad__details__mail" />
        <Label content={parsedUser.phone_number} icon="phone" />
        <Label id="ad__details__state__tag">
          Numéro de série : {currentProduct.serial_number}
        </Label>
        <Label id="ad__details__state__tag">
          Année de sortie : {currentProduct.year}
        </Label>
        <Button
          size="medium"
          type="submit"
          className="ad__details__button__buy"
        >
          Supprimer mon produit
        </Button>
        <Link to={`/modifier-mon-produit/${id}`}>
          <Button size="medium" className="ad__details__button__buy">
            Modifier mon produit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default ProductPage;
