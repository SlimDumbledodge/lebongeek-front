import axios from 'axios';
import Cookies from 'js-cookie';
import {
  SEND_MESSAGE,
  messageIsSent,
  messageIsntSent,
} from '../actions/contact';

const baseUrl = `http://matthieu-le-floch.vpnuser.lan:8080`;

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      axios
        .post(`${baseUrl}/api/contact`, {
          from: JSON.parse(Cookies.get('user')).email,
          subject: store.getState().contact.subject,
          content: store.getState().contact.content,
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('OK SEND_MESSAGE : ', response);
          store.dispatch(messageIsSent());
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn('Erreur SEND_MESSAGE : ', error);
          store.dispatch(messageIsntSent());
        });
      break;

    default:
      break;
  }

  next(action);
};

export default contactMiddleware;
