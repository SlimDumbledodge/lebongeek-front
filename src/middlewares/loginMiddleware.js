/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOGIN_USER,
  openLoginFailedPopup,
  openLoginSuccessFullyPopup,
  setCookie,
  setCookieUser,
} from '../actions/login';
import { saveEdithubUserData } from '../actions/edithub';

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
          store.dispatch(setCookie());
          store.dispatch(openLoginSuccessFullyPopup());

          axios
            .get(`${baseUrl}/api/get_user`, {
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
              },
            })
            .then((secondResponse) => {
              console.log(secondResponse);
              store.dispatch(setCookieUser(secondResponse.data));
              store.dispatch(saveEdithubUserData(secondResponse.data));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(openLoginFailedPopup());
        });
      break;

    default:
      break;
  }

  next(action);
};

export default loginMiddleware;
