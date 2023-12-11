/* eslint-disable no-console */
import axios from 'axios';
import { FETCH_ADS_CATEGORIES, saveAdsCategories } from '../actions/ads';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;
const adsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADS_CATEGORIES: {
      const { id } = action;
      axios
        .get(`${baseUrl}/api/${id}/categories`)
        .then((response) => {
          console.log('OK FETCH_ADS_CATEGORIES : ', response);
          store.dispatch(saveAdsCategories(response.data.product));
        })
        .catch((error) => {
          console.warn('Erreur FETCH_ADS_CATEGORIES : ', error);
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default adsMiddleware;
