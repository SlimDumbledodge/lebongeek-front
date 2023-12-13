import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_EDITHUB_CHANGES, saveEdithubChanges } from '../actions/edithub';
import { clearCookie } from '../actions/login';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;

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
            avatar: 'http://placehold.it/300x300',
            email: store.getState().edithub.email,
            phone_number: store.getState().edithub.phoneNumber,
            password: 'password',
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
