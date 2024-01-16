import axios from 'axios';
import {
  LOGIN_USER,
  CREATE_USER,
  LOGOUT_USER,
} from '../actions/authentification';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
      axios
        .post('http://amgad-gaafr.vpnuser.lan:8080/api/users', {
          username: 'DSdsdsqqddhsqdQ',
          firstname: 'DSQdsdsdskqdqqDQ',
          lastname: 'DSQDdsdsdsqkqdqsqQS',
          avatar: 'http://placehold.it/300x300',
          email: 'matthieu@ocdsdsqqdDkudsqSdsqQqleazeaock.com',
          phone_number: '14254584',
          password: 'password',
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;

    case LOGIN_USER:
      axios
        .post('http://amgad-gaafr.vpnuser.lan:8080/api/login_check', {
          username: 'DSdsqdQ',
          password: 'password',
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;

    case LOGOUT_USER:
      axios
        .post('http://amgad-gaafr.vpnuser.lan:8080/api/logout', {})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;

    default:
      break;
  }

  next(action);
};

export default authMiddleware;
