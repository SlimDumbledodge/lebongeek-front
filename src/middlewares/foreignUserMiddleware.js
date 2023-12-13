/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_FOREIGN_USER,
  saveForeignUser,
  foreignUserLoaded,
} from '../actions/foreignUser';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;
const foreignUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FOREIGN_USER: {
      const { id } = action;
      axios
        .get(`${baseUrl}/api/${id}/users`)
        .then((response) => {
          console.log('OK FETCH_FOREIGN_USER : ', response);
          store.dispatch(saveForeignUser(response.data));
          store.dispatch(foreignUserLoaded());
        })
        .catch((error) => {
          console.warn('Erreur FETCH_FOREIGN_USER: ', error);
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default foreignUserMiddleware;
