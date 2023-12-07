import axios from 'axios';
import { FETCH_CATEGORIES, saveCategories } from '../actions/category';

const adsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios
        .get('http://amgad-gaafr.vpnuser.lan:8080/api/categories')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('OK FETCH_CATEGORIES : ', response);

          store.dispatch(saveCategories(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn('Erreur FETCH_CATEGORIES : ', error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default adsMiddleware;
