import axios from 'axios';
import { SEND_MESSAGE } from '../actions/contact';

const baseUrl = `http://matthieu-le-floch.vpnuser.lan:8080`;

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      axios
        .post(`${baseUrl}/api/contact`, {
          message: store.getState().contact.,
        })
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

export default contactMiddleware;
