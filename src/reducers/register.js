import {
  CHANGE_REGISTER_EMAIL,
  CHANGE_REGISTER_USERNAME,
  CHANGE_REGISTER_FIRSTNAME,
  CHANGE_REGISTER_LASTNAME,
  CHANGE_REGISTER_PASSWORD,
  CHANGE_REGISTER_PHONE,
  OPEN_REGISTER_SUCCESSFULLY_POPUP,
  OPEN_REGISTER_FAILED_POPUP,
  CLOSE_REGISTER_SUCCESSFULLY_POPUP,
  CLOSE_REGISTER_FAILED_POPUP,
} from '../actions/register';

const initialState = {
  RegisterUsername: '',
  RegisterEmail: '',
  RegisterPassword: '',
  RegisterFirstname: '',
  RegisterLastname: '',
  RegisterPhone: '',
  isRegisterSuccessfullyPopupOpen: false,
  isRegisterFailedPopupOpen: false,
};
const registerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_REGISTER_SUCCESSFULLY_POPUP:
      return {
        ...state,
        isRegisterSuccessfullyPopupOpen: true,
      };
    case OPEN_REGISTER_FAILED_POPUP:
      return {
        ...state,
        isRegisterFailedPopupOpen: true,
      };

    case CLOSE_REGISTER_SUCCESSFULLY_POPUP:
      return {
        ...state,
        isRegisterSuccessfullyPopupOpen: false,
      };

    case CLOSE_REGISTER_FAILED_POPUP:
      return {
        ...state,
        isRegisterFailedPopupOpen: false,
      };

    case CHANGE_REGISTER_EMAIL:
      return {
        ...state,
        RegisterEmail: action.newValue,
      };

    case CHANGE_REGISTER_USERNAME:
      return {
        ...state,
        RegisterUsername: action.newValue,
      };

    case CHANGE_REGISTER_PASSWORD:
      return {
        ...state,
        RegisterPassword: action.newValue,
      };

    case CHANGE_REGISTER_FIRSTNAME:
      return {
        ...state,
        RegisterFirstname: action.newValue,
      };

    case CHANGE_REGISTER_LASTNAME:
      return {
        ...state,
        RegisterLastname: action.newValue,
      };

    case CHANGE_REGISTER_PHONE:
      return {
        ...state,
        RegisterPhone: action.newValue,
      };
    default:
      return state;
  }
};

export default registerReducer;
