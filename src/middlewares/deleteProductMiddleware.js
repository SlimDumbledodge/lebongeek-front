/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';
import { DELETE_PRODUCT } from '../actions/deleteProduct';
import { setCookieUser } from '../actions/login';
import baseUrl from '../assets/baseUrl';

const deleteProductMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      axios
        .delete(`${baseUrl}/api/${action.productId * 1}/products`, {
          headers: { Authorization: `Bearer ${Cookies.get('token')}` },
        })
        .then((response) => {
          console.log(response);
          window.location.href = '/hub';
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default deleteProductMiddleware;
