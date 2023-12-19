import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_EDITHUB_CHANGES } from '../actions/edithub';
import { clearCookie } from '../actions/login';

import baseUrl from '../assets/baseUrl';

const edithubMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_EDITHUB_CHANGES: {
      axios
        .put(
          `${baseUrl}/api/${store.getState().edithub.id}/users`,
          {
            username: store.getState().edithub.username,
            firstname: store.getState().edithub.firstname,
            lastname: store.getState().edithub.lastname,
            avatar: store.getState().uploadImage.uploadedImage,
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
              'Content-Type': 'multypart/form-data',
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(clearCookie());
          window.location.reload();
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
