import axios from 'axios';
import { FETCH_ADS_CATEGORIES, saveAdsCategories } from '../actions/ads';

const adsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADS_CATEGORIES:
      axios
        .get('http://amgad-gaafr.vpnuser.lan:8080/api/7/categories')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('OK FETCH_ADS_CATEGORIES : ', response);

          store.dispatch(saveAdsCategories(response.data.ads));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn('Erreur FETCH_ADS_CATEGORIES : ', error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default adsMiddleware;
