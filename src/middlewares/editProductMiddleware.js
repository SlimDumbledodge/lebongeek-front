import axios from 'axios';
import Cookies from 'js-cookie';
import { REQUEST_EDIT_PRODUCT } from '../actions/editProduct';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;

const editProductMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_EDIT_PRODUCT:
      axios
        .put(
          `${baseUrl}/api/${action.productId}/products`,
          {
            title: store.getState().editProduct.editProductName,
            picture: 'http://placehold.it/300x300',
            year: store.getState().editProduct.editProductYear,
            serial_number: store.getState().editProduct.editProductSerialNumber,
            category: {
              id: store.getState().editProduct.editProductCategory,
            },
          },
          {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default editProductMiddleware;
