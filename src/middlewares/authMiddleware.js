import axios from 'axios';
import {
  CREATE_USER,
  LOGIN_USER,
  openCreateUserSuccessfullyPopUp,
  openCreateUserFailedPopUp,
} from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
      axios
        .post('http://matthieu-le-floch.vpnuser.lan:8080/api/users', {
          username: store.getState().user.username,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
          avatar: 'http://placehold.it/300x300',
          email: store.getState().user.email,
          phone_number: store.getState().user.phone,
          password: store.getState().user.password,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(openCreateUserSuccessfullyPopUp());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(openCreateUserFailedPopUp());
        });
      break;

    case LOGIN_USER:
      axios
        .post('http://amgad-gaafr.vpnuser.lan:8080/api/login_check', {
          username: 'DSdsdsqqddhsqdQ',
          password: 'password',
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;
    default:
      break;
  }

  next(action);
};

export default authMiddleware;
