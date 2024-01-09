import axios from 'axios';
import Cookies from 'js-cookie';
import { DELETE_ACCOUNT } from '../actions/deleteAccount';
import baseUrl from '../assets/baseUrl';
import { clearCookie } from '../actions/login';

const deleteAccountMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ACCOUNT: {
      axios
        .delete(`${baseUrl}/api/${store.getState().edithub.id}/users`, {
          headers: { Authorization: `Bearer ${Cookies.get('token')}` },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }
    default:
      break;
  }

  next(action);
};

export default deleteAccountMiddleware;
