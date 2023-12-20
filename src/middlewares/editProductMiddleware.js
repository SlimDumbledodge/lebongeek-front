import axios from 'axios';
import Cookies from 'js-cookie';
import {
  CHANGE_EDIT_PRODUCT_IMAGE,
  REQUEST_EDIT_PRODUCT,
} from '../actions/editProduct';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;

const editProductMiddleware = (store) => (next) => (action) => {
  const formData = store.getState().editProduct.editProductImage;
  console.log(formData);
  switch (action.type) {
    case REQUEST_EDIT_PRODUCT:
      axios
        .put(
          `${baseUrl}/api/${action.productId}/products`,
          {
            title: store.getState().editProduct.editProductName,
            picture: '',
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
          axios
            .post(
              `${baseUrl}/api/${action.productId}/product/picture`,
              {
                picture: formData,
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: `Bearer ${Cookies.get('token')}`,
                },
              }
            )
            .then((secondResponse) => {
              console.log(secondResponse);
            })
            .catch((error) => {
              console.warn(error);
            });
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
