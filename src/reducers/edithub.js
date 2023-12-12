import Cookies from 'js-cookie';
import {
  CHANGE_EDITHUB_DESCRIPTION,
  CHANGE_EDITHUB_EMAIL,
  CHANGE_EDITHUB_FIRSTNAME,
  CHANGE_EDITHUB_LASTNAME,
  CHANGE_EDITHUB_PHONE_NUMBER,
  CHANGE_EDITHUB_USERNAME,
} from '../actions/edithub';

const currentUser = Cookies.get('user');
const parsedUser = currentUser ? JSON.parse(currentUser) : '';
console.log(parsedUser);

const initialState = {
  id: parsedUser.id,
  username: parsedUser.username,
  email: parsedUser.email,
  phoneNumber: parsedUser.phone_number,
  firstname: parsedUser.firstname,
  lastname: parsedUser.lastname,
  description: parsedUser.description,
};

const edithubReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EDITHUB_USERNAME:
      return {
        ...state,
        username: action.newValue,
      };
    case CHANGE_EDITHUB_EMAIL:
      return {
        ...state,
        email: action.newValue,
      };
    case CHANGE_EDITHUB_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.newValue,
      };
    case CHANGE_EDITHUB_FIRSTNAME:
      return {
        ...state,
        firstname: action.newValue,
      };
    case CHANGE_EDITHUB_LASTNAME:
      return {
        ...state,
        lastname: action.newValue,
      };
    case CHANGE_EDITHUB_DESCRIPTION:
      return {
        ...state,
        description: action.newValue,
      };
    default:
      return state;
  }
};

export default edithubReducer;
