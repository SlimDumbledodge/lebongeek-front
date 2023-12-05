import {
  CHANGE_INPUT_USERNAME,
  CHANGE_INPUT_EMAIL,
  CHANGE_INPUT_PASSWORD,
  CHANGE_INPUT_FIRSTNAME,
  CHANGE_INPUT_LASTNAME,
  CHANGE_INPUT_PHONE,
  OPEN_CREATE_USER_SUCCESSFULLY_POP_UP,
  CLOSE_CREATE_USER_SUCCESSFULLY_POP_UP,
  OPEN_CREATE_USER_FAILED_POP_UP,
  CLOSE_CREATE_USER_FAILED_POP_UP,
} from '../actions/user';

const initialState = {
  username: '',
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  phone: '',
  isCreateUserSuccessfullyPopUpOpen: false,
  isCreateUserFailedPopUpOpen: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CREATE_USER_SUCCESSFULLY_POP_UP:
      return {
        ...state,
        isCreateUserSuccessfullyPopUpOpen: true,
      };
    case CLOSE_CREATE_USER_SUCCESSFULLY_POP_UP:
      return {
        ...state,
        isCreateUserSuccessfullyPopUpOpen: false,
      };

    case OPEN_CREATE_USER_FAILED_POP_UP:
      return {
        ...state,
        isCreateUserFailedPopUpOpen: true,
      };

    case CLOSE_CREATE_USER_FAILED_POP_UP:
      return {
        ...state,
        isCreateUserFailedPopUpOpen: false,
      };
    case CHANGE_INPUT_USERNAME:
      return {
        ...state,
        username: action.newValue,
      };

    case CHANGE_INPUT_EMAIL:
      return {
        ...state,
        email: action.newValue,
      };

    case CHANGE_INPUT_PASSWORD:
      return {
        ...state,
        password: action.newValue,
      };

    case CHANGE_INPUT_FIRSTNAME:
      return {
        ...state,
        firstname: action.newValue,
      };

    case CHANGE_INPUT_LASTNAME:
      return {
        ...state,
        lastname: action.newValue,
      };

    case CHANGE_INPUT_PHONE:
      return {
        ...state,
        phone: action.newValue,
      };
    default:
      return state;
  }
};

export default userReducer;
