import {
  CHANGE_LOGIN_USERNAME,
  CHANGE_LOGIN_PASSWORD,
  SAVE_TOKEN,
  SET_COOKIE,
  OPEN_LOGIN_SUCCESSFULLY_POPUP,
  OPEN_LOGIN_FAILED_POPUP,
  CLOSE_LOGIN_SUCCESSFULLY_POPUP,
  CLOSE_LOGIN_FAILED_POPUP,
  CLEAR_COOKIE,
} from '../actions/login';

const initialState = {
  username: '',
  password: '',
  isSuccessfullyLoginPopupOpen: false,
  isFailedLoginPopupOpen: false,
  token: null,
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_USERNAME:
      return {
        ...state,
        username: action.newValue,
      };

    case CHANGE_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.newValue,
      };

    case SAVE_TOKEN:
      return {
        ...state,
        token: action.newToken,
      };

    case SET_COOKIE:
      document.cookie = `token=${state.token}; path=/;`;
      return {
        ...state,
      };

    case CLEAR_COOKIE:
      document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      return {
        ...state,
      };

    case OPEN_LOGIN_SUCCESSFULLY_POPUP:
      return {
        ...state,
        isSuccessfullyLoginPopupOpen: true,
      };

    case OPEN_LOGIN_FAILED_POPUP:
      return {
        ...state,
        isFailedLoginPopupOpen: true,
      };

    case CLOSE_LOGIN_SUCCESSFULLY_POPUP:
      return {
        ...state,
        isSuccessfullyLoginPopupOpen: false,
      };

    case CLOSE_LOGIN_FAILED_POPUP:
      return {
        ...state,
        isFailedLoginPopupOpen: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
