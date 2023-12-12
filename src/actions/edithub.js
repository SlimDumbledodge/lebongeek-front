export const CHANGE_EDITHUB_USERNAME = 'CHANGE_EDITHUB_USERNAME';
export const CHANGE_EDITHUB_EMAIL = 'CHANGE_EDITHUB_EMAIL';
export const CHANGE_EDITHUB_PHONE_NUMBER = 'CHANGE_EDITHUB_PHONE_NUMBER';
export const CHANGE_EDITHUB_FIRSTNAME = 'CHANGE_EDITHUB_FIRSTNAME';
export const CHANGE_EDITHUB_LASTNAME = 'CHANGE_EDITHUB_LASTNAME';
export const CHANGE_EDITHUB_DESCRIPTION = 'CHANGE_EDITHUB_DESCRIPTION';
export const SAVE_EDITHUB_CHANGES = 'SAVE_EDITHUB_CHANGES';

export const changeEdithubUsername = (newValue) => ({
  type: CHANGE_EDITHUB_USERNAME,
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
