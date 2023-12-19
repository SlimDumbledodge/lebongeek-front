/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';
import { FETCH_TRANSACTION } from '../actions/transaction';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;
const transactionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TRANSACTION: {
      const { id } = action;
      axios
        .post(
          `${baseUrl}/api/transaction/confirm`,
          {
            ad: id,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        )
        .then((response) => {
          console.log('OK FETCH_TRANSACTION : ', response);
        })
        .catch((error) => {
          console.warn('Erreur FETCH_TRANSACTION : ', error);
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default transactionMiddleware;
