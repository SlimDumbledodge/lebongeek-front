import axios from 'axios';
import Cookies from 'js-cookie';
import {
  SAVE_EDITHUB_CHANGES,
  SAVE_EDITHUB_AVATAR,
  SAVE_EDITHUB_BANNER,
} from '../actions/edithub';
import { clearCookie } from '../actions/login';

import baseUrl from '../assets/baseUrl';

const edithubMiddleware = (store) => (next) => (action) => {
  const formData = store.getState().edithub.avatar;
  const formDataBis = store.getState().edithub.banner;

  switch (action.type) {
    case SAVE_EDITHUB_CHANGES: {
      axios
        .put(
          `${baseUrl}/api/${store.getState().edithub.id}/users`,
          {
            username: store.getState().edithub.username,
            firstname: store.getState().edithub.firstname,
            lastname: store.getState().edithub.lastname,
            email: store.getState().edithub.email,
            phone_number: store.getState().edithub.phoneNumber,
            password: store.getState().edithub.password
              ? store.getState().edithub.password
              : '',
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
          window.location.href = '/hub';
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    case SAVE_EDITHUB_AVATAR: {
      axios
        .post(
          `${baseUrl}/api/user/avatar`,
          {
            avatar: formData,
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
          window.location.href = '/hub';
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    case SAVE_EDITHUB_BANNER: {
      axios
        .post(
          `${baseUrl}/api/user/banner`,
          {
            banner: formDataBis,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        )
        .then((thirdResponse) => {
          console.log(thirdResponse);
          /* store.dispatch(clearCookie()); */
          /* window.location.reload(); */
          window.location.href = '/hub';
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
