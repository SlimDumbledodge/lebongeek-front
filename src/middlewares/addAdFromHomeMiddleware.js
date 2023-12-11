import axios from 'axios';
import { SEND_ADD_AD_FROM_HOME } from '../actions/addAdFromHome';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;

const addAdFromHomeMiddleware = (store) => (next) => (action) => {
  const addAdFromHomeData = {
    ad: {
      description: store.getState().addAdFromHome.addAdFromHomeDescription,
      price: store.getState().addAdFromHome.addAdFromHomePrice,
      state: store.getState().addAdFromHome.addAdFromHomeState,
      location: store.getState().addAdFromHome.addAdFromHomeLocation,
    },
  };
  switch (action.type) {
    case SEND_ADD_AD_FROM_HOME:
      axios
        .post(
          `${baseUrl}/api/products`,
          {
            title: store.getState().addAdFromHome.addAdFromHomeProductTitle,
            picture: store.getState().addAdFromHome.addAdFromHomeProductPhoto,
            year: store.getState().addAdFromHome.addAdFromHomeProductYear,
            serial_number:
              store.getState().addAdFromHome.addAdFromHomeProductSerialNumber,
            category: {
              name: store.getState().addAdFromHome.addAdFromHomeCategory,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().login.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default addAdFromHomeMiddleware;
