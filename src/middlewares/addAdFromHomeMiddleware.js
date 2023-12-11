import axios from 'axios';
import { SEND_ADD_AD_FROM_HOME } from '../actions/addAdFromHome';

const baseUrl = `http://matthieu-le-floch.vpnuser.lan:8080`;

const addAdFromHomeMiddleware = (store) => (next) => (action) => {
  const addAdFromHomeData = {
    product: {
      title: store.getState().addAdFromHome.addAdFromHomeProductTitle,
      picture: store.getState().addAdFromHome.addAdFromHomeProductPhoto,
      year: store.getState().addAdFromHome.addAdFromHomeProductYear,
      serial_number:
        store.getState().addAdFromHome.addAdFromHomeProductSerialNumber,
    },
    ad: {
      description: store.getState().addAdFromHome.addAdFromHomeDescription,
      price: store.getState().addAdFromHome.addAdFromHomePrice,
      state: store.getState().addAdFromHome.addAdFromHomeState,
      location: store.getState().addAdFromHome.addAdFromHomeLocation,
    },
    category: {
      name: store.getState().addAdFromHome.addAdFromHomeCategory,
    },
  };
  switch (action.type) {
    case SEND_ADD_AD_FROM_HOME:
      axios
        .post(`${baseUrl}/api/ads`, addAdFromHomeData, {
          headers: {
            Authorization: `Bearer ${store.getState().login.token}`,
          },
        })
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
