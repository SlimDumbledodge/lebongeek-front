export const CHANGE_REGISTER_USERNAME = 'CHANGE_REGISTER_USERNAME';
export const CHANGE_REGISTER_EMAIL = 'CHANGE_REGISTER_EMAIL';
export const CHANGE_REGISTER_PASSWORD = 'CHANGE_REGISTER_PASSWORD';
export const CHANGE_REGISTER_FIRSTNAME = 'CHANGE_REGISTER_FIRSTNAME';
export const CHANGE_REGISTER_LASTNAME = 'CHANGE_REGISTER_LASTNAME';
export const CHANGE_REGISTER_PHONE = 'CHANGE_REGISTER_PHONE';
export const CREATE_REGISTER_USER = 'CREATE_REGISTER_USER';
export const CLEAR_REGISTER_INPUTS = 'CLEAR_REGISTER_INPUTS';

export const OPEN_REGISTER_SUCCESSFULLY_POPUP =
  'OPEN_REGISTER_SUCCESSFULLY_POPUP';
export const OPEN_REGISTER_FAILED_POPUP = 'OPEN_REGISTER_FAILED_POPUP';
export const CLOSE_REGISTER_SUCCESSFULLY_POPUP =
  'CLOSE_REGISTER_SUCCESSFULLY_POPUP';
export const CLOSE_REGISTER_FAILED_POPUP = 'CLOSE_REGISTER_FAILED_POPUP';

export const changeRegisterUsername = (newValue) => ({
  type: CHANGE_REGISTER_USERNAME,
  newValue,
});

export const changeRegisterEmail = (newValue) => ({
  type: CHANGE_REGISTER_EMAIL,
  newValue,
});

export const changeRegisterPassword = (newValue) => ({
  type: CHANGE_REGISTER_PASSWORD,
  newValue,
});

export const changeRegisterFirstname = (newValue) => ({
  type: CHANGE_REGISTER_FIRSTNAME,
  newValue,
});

export const changeRegisterLastname = (newValue) => ({
  type: CHANGE_REGISTER_LASTNAME,
  newValue,
});

export const changeRegisterPhone = (newValue) => ({
  type: CHANGE_REGISTER_PHONE,
  newValue,
});

export const createRegisterUser = (newUser) => ({
  type: CREATE_REGISTER_USER,
  newUser,
});

export const openRegisterSuccessfullyPopup = () => ({
  type: OPEN_REGISTER_SUCCESSFULLY_POPUP,
});

export const closeRegisterSuccessfullyPopup = () => ({
  type: CLOSE_REGISTER_SUCCESSFULLY_POPUP,
});

export const openRegisterFailedPopup = () => ({
  type: OPEN_REGISTER_FAILED_POPUP,
});

export const closeRegisterFailedPopup = () => ({
  type: CLOSE_REGISTER_FAILED_POPUP,
});

export const clearRegisterInputs = () => ({
  type: CLEAR_REGISTER_INPUTS,
});
