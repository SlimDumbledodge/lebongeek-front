/* eslint-disable no-console */
import axios from 'axios';
import {
  LOGIN_USER,
  openLoginFailedPopup,
  openLoginSuccessFullyPopup,
  saveToken,
  setCookie,
} from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post(`http://matthieu-le-floch.vpnuser.lan:8080/api/login_check`, {
          username: store.getState().login.username,
          password: store.getState().login.password,
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
