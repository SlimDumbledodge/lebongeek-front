export const CHANGE_INPUT_USERNAME = 'CHANGE_INPUT_USERNAME';
export const CHANGE_INPUT_EMAIL = 'CHANGE_INPUT_EMAIL';
export const CHANGE_INPUT_PASSWORD = 'CHANGE_INPUT_PASSWORD';
export const CHANGE_INPUT_FIRSTNAME = 'CHANGE_INPUT_FIRSTNAME';
export const CHANGE_INPUT_LASTNAME = 'CHANGE_INPUT_LASTNAME';
export const CHANGE_INPUT_PHONE = 'CHANGE_INPUT_PHONE';

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const OPEN_CREATE_USER_SUCCESSFULLY_POP_UP =
  'OPEN_CREATE_USER_SUCCESSFULLY_POP_UP';
export const CLOSE_CREATE_USER_SUCCESSFULLY_POP_UP =
  'CLOSE_CREATE_USER_SUCCESSFULLY_POP_UP';
export const OPEN_CREATE_USER_FAILED_POP_UP = 'OPEN_CREATE_USER_FAILED_POP_UP';
export const CLOSE_CREATE_USER_FAILED_POP_UP =
  'CLOSE_CREATE_USER_FAILED_POP_UP';

export const createUser = (newUser) => ({
  type: CREATE_USER,
  newUser,
});

export const loginUser = (newEmail, newPassword) => ({
  type: LOGIN_USER,
  newEmail,
  newPassword,
});

export const changeInputUsername = (newValue) => ({
  type: CHANGE_INPUT_USERNAME,
  newValue,
});

export const changeInputEmail = (newValue) => ({
  type: CHANGE_INPUT_EMAIL,
  newValue,
});

export const changeInputPassword = (newValue) => ({
  type: CHANGE_INPUT_PASSWORD,
  newValue,
});

export const changeInputFirstname = (newValue) => ({
  type: CHANGE_INPUT_FIRSTNAME,
  newValue,
});

export const changeInputLastname = (newValue) => ({
  type: CHANGE_INPUT_LASTNAME,
  newValue,
});

export const changeInputPhone = (newValue) => ({
  type: CHANGE_INPUT_PHONE,
  newValue,
});

export const openCreateUserSuccessfullyPopUp = () => ({
  type: OPEN_CREATE_USER_SUCCESSFULLY_POP_UP,
});

export const closeCreateUserSuccessfullyPopUp = () => ({
  type: CLOSE_CREATE_USER_SUCCESSFULLY_POP_UP,
});

export const openCreateUserFailedPopUp = () => ({
  type: OPEN_CREATE_USER_FAILED_POP_UP,
});

export const closeCreateUserFailedPopUp = () => ({
  type: CLOSE_CREATE_USER_FAILED_POP_UP,
});
