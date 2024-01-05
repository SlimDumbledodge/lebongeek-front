export const CHANGE_EDITHUB_USERNAME = 'CHANGE_EDITHUB_USERNAME';
export const CHANGE_EDITHUB_EMAIL = 'CHANGE_EDITHUB_EMAIL';
export const CHANGE_EDITHUB_PASSWORD = 'CHANGE_EDITHUB_PASSWORD';
export const CHANGE_EDITHUB_PHONE_NUMBER = 'CHANGE_EDITHUB_PHONE_NUMBER';
export const CHANGE_EDITHUB_FIRSTNAME = 'CHANGE_EDITHUB_FIRSTNAME';
export const CHANGE_EDITHUB_LASTNAME = 'CHANGE_EDITHUB_LASTNAME';
export const CHANGE_EDITHUB_DESCRIPTION = 'CHANGE_EDITHUB_DESCRIPTION';
export const SAVE_EDITHUB_CHANGES = 'SAVE_EDITHUB_CHANGES';
export const SAVE_EDITHUB_USER_DATA = 'SAVE_EDITHUB_USER_DATA';
export const CHANGE_EDITHUB_AVATAR = 'CHANGE_EDITHUB_AVATAR';
export const CHANGE_EDITHUB_BANNER = 'CHANGE_EDITHUB_BANNER';
export const SAVE_INITIAL_USER_STATE = 'SAVE_INITIAL_USER_STATE';
export const SAVE_EDITHUB_AVATAR = 'SAVE_EDITHUB_AVATAR';
export const SAVE_EDITHUB_BANNER = 'SAVE_EDITHUB_BANNER';

export const changeEdithubUsername = (newValue) => ({
  type: CHANGE_EDITHUB_USERNAME,
  newValue,
});

export const changeEdithubPassword = (newValue) => ({
  type: CHANGE_EDITHUB_PASSWORD,
  newValue,
});

export const changeEdithubEmail = (newValue) => ({
  type: CHANGE_EDITHUB_EMAIL,
  newValue,
});

export const changeEdithubPhoneNumber = (newValue) => ({
  type: CHANGE_EDITHUB_PHONE_NUMBER,
  newValue,
});

export const changeEdithubFirstname = (newValue) => ({
  type: CHANGE_EDITHUB_FIRSTNAME,
  newValue,
});

export const changeEdithubLastname = (newValue) => ({
  type: CHANGE_EDITHUB_LASTNAME,
  newValue,
});

export const changeEdithubDescription = (newValue) => ({
  type: CHANGE_EDITHUB_DESCRIPTION,
  newValue,
});

export const saveEdithubChanges = () => ({
  type: SAVE_EDITHUB_CHANGES,
});

export const saveEdithubAvatar = () => ({
  type: SAVE_EDITHUB_AVATAR,
});

export const saveEdithubBanner = () => ({
  type: SAVE_EDITHUB_BANNER,
});

export const saveEdithubUserData = (userData) => ({
  type: SAVE_EDITHUB_USER_DATA,
  userData,
});

export const changeEdithubAvatar = (newValue) => ({
  type: CHANGE_EDITHUB_AVATAR,
  newValue,
});

export const changeEdithubBanner = (newValue) => ({
  type: CHANGE_EDITHUB_BANNER,
  newValue,
});

export const saveInitialUserState = () => ({
  type: SAVE_INITIAL_USER_STATE,
});
