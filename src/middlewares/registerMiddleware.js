import axios from 'axios';
import {
  CREATE_REGISTER_USER,
  openRegisterSuccessfullyPopup,
  openRegisterFailedPopup,
} from '../actions/register';

const baseUrl = `http://amgad-gaafr.vpnuser.lan:8080`;

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_REGISTER_USER:
      axios
        .post(`${baseUrl}/api/users`, {
          username: store.getState().register.RegisterUsername,
          firstname: store.getState().register.RegisterFirstname,
          lastname: store.getState().register.RegisterLastname,
          avatar: 'http://placehold.it/300x300',
          email: store.getState().register.RegisterEmail,
          phone_number: store.getState().register.RegisterPhone,
          password: store.getState().register.RegisterPassword,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(openRegisterSuccessfullyPopup());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(openRegisterFailedPopup());
        });
      break;
    default:
  }
  next(action);
};

export default registerMiddleware;
