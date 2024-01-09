import axios from 'axios';
import Cookies from 'js-cookie';
import { REQUEST_TRANSFORM_PRODUCT_IN_AD } from '../actions/transformProductInAd';
import { setCookieUser } from '../actions/login';

import baseUrl from '../assets/baseUrl';

const currentUser = Cookies.get('user');
const parsedUser = currentUser ? JSON.parse(currentUser) : null;

const transformProductInAdMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_TRANSFORM_PRODUCT_IN_AD:
      axios
        .post(
          `${baseUrl}/api/ads`,
          {
            description:
              store.getState().transformProductInAd
                .transformProductInAdDescription,
            title:
              store.getState().transformProductInAd.transformProductInAdTitle,
            price:
              store.getState().transformProductInAd.transformProductInAdPrice *
              1,
            state:
              store.getState().transformProductInAd.transformProductInAdState,
            location:
              store.getState().transformProductInAd
                .transformProductInAdLocation,
            productId: action.productId * 1,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          axios
            .get(`${baseUrl}/api/get_user`, {
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
              },
            })
            .then((secondResponse) => {
              console.log(secondResponse);
              store.dispatch(setCookieUser(secondResponse.data));
            })
            .catch((error) => {
              console.log(error);
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

export default transformProductInAdMiddleware;
