import Cookies from 'js-cookie';
import {
  CHANGE_EDITHUB_DESCRIPTION,
  CHANGE_EDITHUB_EMAIL,
  CHANGE_EDITHUB_FIRSTNAME,
  CHANGE_EDITHUB_LASTNAME,
  CHANGE_EDITHUB_PASSWORD,
  CHANGE_EDITHUB_PHONE_NUMBER,
  CHANGE_EDITHUB_USERNAME,
  SAVE_EDITHUB_USER_DATA,
  CHANGE_EDITHUB_AVATAR,
  CHANGE_EDITHUB_BANNER,
} from '../actions/edithub';

const currentUser = Cookies.get('user');
const parsedUser = currentUser ? JSON.parse(currentUser) : '';
console.log(parsedUser);

const initialState = {
  id: parsedUser.id,
  username: parsedUser.username,
  email: parsedUser.email,
  password: '',
  phoneNumber: parsedUser.phone_number,
  firstname: parsedUser.firstname,
  lastname: parsedUser.lastname,
  description: parsedUser.description,
  products: parsedUser.product,
  avatar: parsedUser.avatar,
  banner: parsedUser.banner,
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

    case CHANGE_EDITHUB_PASSWORD:
      return {
        ...state,
        password: action.newValue,
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

    case SAVE_EDITHUB_USER_DATA:
      return {
        ...state,
        id: action.userData.id,
        username: action.userData.username,
        email: action.userData.email,
        phoneNumber: action.userData.phone_number,
        firstname: action.userData.firstname,
        lastname: action.userData.lastname,
        description: action.userData.description,
      };

    case CHANGE_EDITHUB_AVATAR: {
      return {
        ...state,
        avatar: action.newValue,
      };
    }

    case CHANGE_EDITHUB_BANNER: {
      return {
        ...state,
        banner: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default edithubReducer;
