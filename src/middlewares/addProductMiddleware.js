import axios from 'axios';
import Cookies from 'js-cookie';
import { ADD_PRODUCT_SEND_REQUEST } from '../actions/addProduct';
import { setCookieUser } from '../actions/login';

import baseUrl from '../assets/baseUrl';

const addProductMiddleware = (store) => (next) => (action) => {
  const formData = store.getState().addProduct.productPhotoValue;

  switch (action.type) {
    case ADD_PRODUCT_SEND_REQUEST:
      axios
        .post(
          `${baseUrl}/api/products`,
          {
            title: store.getState().addProduct.productTitle,
            picture: '',
            year: store.getState().addProduct.productYear,
            serial_number: store.getState().addProduct.productSerialNumber,
            category: {
              id: store.getState().addProduct.productCategory,
            },
          },
          {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` },
          }
        )
        .then((response) => {
          console.log(response);
          const productIdFromBack = response.data.productId;

          axios
            .post(
              `${baseUrl}/api/${productIdFromBack}/product/picture`,
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
              axios
                .get(`${baseUrl}/api/get_user`, {
                  headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                  },
                })
                .then((thirdResponse) => {
                  console.log(thirdResponse);
                  store.dispatch(setCookieUser(thirdResponse.data));
                })
                .catch((error) => {
                  console.log(error);
                });
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

export default addProductMiddleware;
