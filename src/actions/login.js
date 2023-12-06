export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_LOGIN_USERNAME = 'CHANGE_LOGIN_USERNAME';
export const CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SET_COOKIE = 'SET_COOKIE';
export const CLEAR_COOKIE = 'CLEAR_COOKIE';
export const OPEN_LOGIN_SUCCESSFULLY_POPUP = 'OPEN_LOGIN_SUCCESSFULLY_POPUP';
export const OPEN_LOGIN_FAILED_POPUP = 'OPEN_LOGIN_FAILED_POPUP';
export const CLOSE_LOGIN_SUCCESSFULLY_POPUP = 'CLOSE_LOGIN_SUCCESSFULLY_POPUP';
export const CLOSE_LOGIN_FAILED_POPUP = 'CLOSE_LOGIN_FAILED_POPUP';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const changeLoginUsername = (newValue) => ({
  type: CHANGE_LOGIN_USERNAME,
  newValue,
});

export const changeLoginPassword = (newValue) => ({
  type: CHANGE_LOGIN_PASSWORD,
  newValue,
});

export const saveToken = (newToken) => ({
  type: SAVE_TOKEN,
  newToken,
});

export const setCookie = () => ({
  type: SET_COOKIE,
});

export const clearCookie = () => ({
  type: CLEAR_COOKIE,
});

export const openLoginSuccessFullyPopup = () => ({
  type: OPEN_LOGIN_SUCCESSFULLY_POPUP,
});

export const openLoginFailedPopup = () => ({
  type: OPEN_LOGIN_FAILED_POPUP,
});

export const closeLoginSuccessFullyPopup = () => ({
  type: CLOSE_LOGIN_SUCCESSFULLY_POPUP,
});

export const closeLoginFailedPopup = () => ({
  type: CLOSE_LOGIN_FAILED_POPUP,
});
