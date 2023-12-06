import axios from 'axios';
import {
  CREATE_REGISTER_USER,
  openRegisterSuccessfullyPopup,
  openRegisterFailedPopup,
} from '../actions/register';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_REGISTER_USER:
      axios
        .post(`http://amgad-gaafr.vpnuser.lan:8080/api/users`, {
          username: store.getState().register.username,
          firstname: store.getState().register.firstname,
          lastname: store.getState().register.lastname,
          avatar: 'http://placehold.it/300x300',
          email: store.getState().register.email,
          phone_number: store.getState().register.phone,
          password: store.getState().register.password,
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
