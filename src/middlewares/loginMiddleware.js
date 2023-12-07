import axios from 'axios';
import {
  LOGIN_USER,
  openLoginFailedPopup,
  openLoginSuccessFullyPopup,
  saveToken,
  setCookie,
} from '../actions/login';

const baseUrl = `http://matthieu-le-floch.vpnuser.lan:8080`;
const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post(`${baseUrl}/api/login_check`, {
          username: store.getState().login.LoginUsername,
          password: store.getState().login.LoginPassword,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            store.dispatch(saveToken(response.data.token));
            store.dispatch(setCookie());
            store.dispatch(openLoginSuccessFullyPopup());
          }
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(openLoginFailedPopup());
        });
      break;

    default:
      break;
  }

  next(action);
};

export default loginMiddleware;
