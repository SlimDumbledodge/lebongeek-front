export const CHANGE_ADD_AD_FROM_HOME_PRODUCT_TITLE = 'CHANGE_ADD_AD_TITLE';
export const CHANGE_ADD_AD_FROM_HOME_DESCRIPTION = 'CHANGE_ADD_AD_DESCRIPTION';
export const CHANGE_ADD_AD_FROM_HOME_STATE = 'CHANGE_ADD_AD_STATE';
export const CHANGE_ADD_AD_FROM_HOME_CATEGORY = 'CHANGE_ADD_AD_CATEGORY';
export const CHANGE_ADD_AD_FROM_HOME_CATEGORY_VALUE =
  'CHANGE_ADD_AD_FROM_HOME_CATEGORY_VALUE';
export const CHANGE_ADD_AD_FROM_HOME_PRICE = 'CHANGE_ADD_AD_FROM_HOME_PRICE';
export const CHANGE_ADD_AD_FROM_HOME_LOCATION =
  'CHANGE_ADD_AD_FROM_HOME_LOCATION';
export const CHANGE_ADD_AD_FROM_HOME_PRODUCT_YEAR =
  'CHANGE_ADD_AD_FROM_HOME_PRODUCT_YEAR';
export const CHANGE_ADD_AD_FROM_HOME_PRODUCT_SERIAL_NUMBER =
  'CHANGE_ADD_AD_FROM_HOME_PRODUCT_SERIAL_NUMBER';

export const CHANGE_ADD_AD_FROM_HOME_IMAGE = 'CHANGE_ADD_AD_FROM_HOME_IMAGE';

export const SEND_ADD_AD_FROM_HOME = 'SEND_ADD_AD_FROM_HOME';
export const SET_ADD_AD_FROM_HOME_STATUS = 'SET_ADD_AD_FROM_HOME_STATUS';

export const changeAddAdFromHomeImage = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_IMAGE,
  newValue,
});

export const changeAddAdFromHomeProductTitle = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_PRODUCT_TITLE,
  newValue,
});

export const changeAddAdFromHomeDescription = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_DESCRIPTION,
  newValue,
});

export const changeAddAdFromHomeState = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_STATE,
  newValue,
});

export const changeAddAdFromHomeCategory = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_CATEGORY,
  newValue,
});

export const changeAddAdFromHomeCategoryValue = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_CATEGORY_VALUE,
  newValue,
});

export const changeAddAdFromHomePrice = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_PRICE,
  newValue,
});

export const changeAddAdFromHomeLocation = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_LOCATION,
  newValue,
});

export const changeAddAdFromHomeProductYear = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_PRODUCT_YEAR,
  newValue,
});

export const changeAddAdFromHomeProductSerialNumber = (newValue) => ({
  type: CHANGE_ADD_AD_FROM_HOME_PRODUCT_SERIAL_NUMBER,
  newValue,
});

export const sendAddAdFromHome = () => ({
  type: SEND_ADD_AD_FROM_HOME,
});

export const setAddAdFromHomeStatus = () => ({
  type: SET_ADD_AD_FROM_HOME_STATUS,
});
