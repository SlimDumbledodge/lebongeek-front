import axios from 'axios';
import { FETCH_SEARCH, saveSearchData } from '../actions/search';

const searchParam = 'mme';
const pageNumber = 1;

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;
const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      axios
        .get(`${baseUrl}/api/search?query=${searchParam}&page=${pageNumber}`)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('OK FETCH_SEARCH : ', response);

          store.dispatch(saveSearchData(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn('Erreur FETCH_SEARCH : ', error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default searchMiddleware;
