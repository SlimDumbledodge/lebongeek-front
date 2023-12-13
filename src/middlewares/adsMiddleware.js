/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_ADS_CATEGORIES,
  saveAdsCategories,
  FETCH_AD,
  saveAd,
  adLoaded,
} from '../actions/ads';

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

    case FETCH_AD: {
      const { id } = action;
      axios
        .get(`${baseUrl}/api/${id}/ads`)
        .then((response) => {
          console.log('OK FETCH_ADS : ', response);
          store.dispatch(saveAd(response.data));
          store.dispatch(adLoaded());
        })
        .catch((error) => {
          console.warn('Erreur FETCH_AD: ', error);
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default adsMiddleware;
