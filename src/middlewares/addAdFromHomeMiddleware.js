import axios from 'axios';
import Cookies from 'js-cookie';
import { SEND_ADD_AD_FROM_HOME } from '../actions/addAdFromHome';
import baseUrl from '../assets/baseUrl';
import { setCookieUser } from '../actions/login';
import {
  openFailedMessage,
  openSuccessFullMessage,
} from '../actions/popupMessages';

const addAdFromHomeMiddleware = (store) => (next) => (action) => {
  const formData = store.getState().addAdFromHome.addAdFromHomeProductPhoto;

  switch (action.type) {
    case SEND_ADD_AD_FROM_HOME:
      console.log(store.getState().addAdFromHome.addAdFromHomeProductPhoto);
      axios
        .post(
          `${baseUrl}/api/products`,
          {
            title: store.getState().addAdFromHome.addAdFromHomeProductTitle,
            picture: '',
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
                .post(
                  `${baseUrl}/api/ads`,
                  {
                    description:
                      store.getState().addAdFromHome.addAdFromHomeDescription,
                    title:
                      store.getState().addAdFromHome.addAdFromHomeProductTitle,
                    price:
                      store.getState().addAdFromHome.addAdFromHomePrice * 1,
                    state: store.getState().addAdFromHome.addAdFromHomeState,
                    location:
                      store.getState().addAdFromHome.addAdFromHomeLocation,
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
                .then((thirdResponse) => {
                  console.log(thirdResponse);
                  axios
                    .get(`${baseUrl}/api/get_user`, {
                      headers: {
                        Authorization: `Bearer ${Cookies.get('token')}`,
                      },
                    })
                    .then((fourthResponse) => {
                      console.log(fourthResponse);
                      store.dispatch(setCookieUser(fourthResponse.data));
                      store.dispatch(openSuccessFullMessage());
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
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(openFailedMessage());
        });
      break;
    default:
  }

  next(action);
};

export default addAdFromHomeMiddleware;
