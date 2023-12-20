import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_EDITHUB_CHANGES } from '../actions/edithub';
import { clearCookie } from '../actions/login';

import baseUrl from '../assets/baseUrl';

const edithubMiddleware = (store) => (next) => (action) => {
  const formData = store.getState().edithub.avatar;

  switch (action.type) {
    case SAVE_EDITHUB_CHANGES: {
      axios
        .put(
          `${baseUrl}/api/${store.getState().edithub.id}/users`,
          {
            username: store.getState().edithub.username,
            firstname: store.getState().edithub.firstname,
            lastname: store.getState().edithub.lastname,
            avatar: '',
            email: store.getState().edithub.email,
            phone_number: store.getState().edithub.phoneNumber,
            password: store.getState().edithub.password
              ? store.getState().edithub.password
              : 'password',
            description: store.getState().edithub.description,
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
              store.dispatch(clearCookie());
              window.location.reload();
            })
            .catch((error) => {
              console.warn(error);
            });
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    default:
  }
  next(action);
};

export default edithubMiddleware;
