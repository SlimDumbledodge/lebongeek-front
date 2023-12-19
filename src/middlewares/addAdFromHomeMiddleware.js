import axios from 'axios';
import Cookies from 'js-cookie';
import { SEND_ADD_AD_FROM_HOME } from '../actions/addAdFromHome';

import { uploadImageRequest } from '../actions/uploadImage';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;

const addAdFromHomeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ADD_AD_FROM_HOME:
      store.dispatch(
        uploadImageRequest(
          store.getState().addAdFromHome.addAdFromHomeProductPhoto
        )
      );

      axios
        .post(
          `${baseUrl}/api/products`,
          {
            title: store.getState().addAdFromHome.addAdFromHomeProductTitle,
            picture: store.getState().addAdFromHome.addAdFromHomeProductPhoto,
            year: store.getState().addAdFromHome.addAdFromHomeProductYear,
            serial_number:
              store.getState().addAdFromHome.addAdFromHomeProductSerialNumber,
            category: {
              id: store.getState().addAdFromHome.addAdFromHomeCategory,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          const productIdFromBack = response.data.productId;

          axios
            .post(
              `${baseUrl}/api/ads`,
              {
                description:
                  store.getState().addAdFromHome.addAdFromHomeDescription,
                title: store.getState().addAdFromHome.addAdFromHomeProductTitle,
                price: store.getState().addAdFromHome.addAdFromHomePrice * 1,
                state: store.getState().addAdFromHome.addAdFromHomeState,
                location: store.getState().addAdFromHome.addAdFromHomeLocation,
                productId: productIdFromBack,
                category: {
                  id: store.getState().addAdFromHome.addAdFromHomeCategory,
                },
              },
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
                },
              }
            )
            .then((secondResponse) => {
              console.log(secondResponse);
              // Traitez la réponse de la deuxième requête si nécessaire
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
      break;
  }
  next(action);
};

export default addAdFromHomeMiddleware;
