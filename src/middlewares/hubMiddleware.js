/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';
import { GET_USER, setUser } from '../actions/hub';

import { saveEdithubUserData } from '../actions/edithub';
import { saveEditadData } from '../actions/editAd';

import baseUrl from '../assets/baseUrl';

const hubMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER:
      axios
        .get(`${baseUrl}/api/get_user`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        })
        .then((response) => {
          console.log('OK GET_USER : ', response);
          store.dispatch(setUser(response.data));
          store.dispatch(saveEdithubUserData(response.data));
          store.dispatch(saveEditadData(response.data));
        })
        .catch((error) => {
          console.warn('Erreur GET_USER : ', error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default hubMiddleware;
