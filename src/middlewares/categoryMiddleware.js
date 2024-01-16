import axios from 'axios';
import {
  FETCH_CATEGORIES,
  saveCategories,
  categoriesLoaded,
} from '../actions/category';

import baseUrl from '../assets/baseUrl';

const categoryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios
        .get(`${baseUrl}/api/list/categories`)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('OK FETCH_CATEGORIES : ', response);

          store.dispatch(saveCategories(response.data));
          store.dispatch(categoriesLoaded());
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

export default categoryMiddleware;
