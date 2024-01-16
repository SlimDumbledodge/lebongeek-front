export const CHANGE_EDITAD_TITLE_VALUE = 'CHANGE_EDITAD_TITLE_VALUE';
export const CHANGE_EDITAD_DESCRIPTION = 'CHANGE_EDITAD_DESCRIPTION';
export const CHANGE_EDITAD_STATE = 'CHANGE_EDITAD_STATE';
export const CHANGE_EDITAD_CATEGORY = 'CHANGE_EDITAD_CATEGORY';
export const CHANGE_EDITAD_CATEGORY_VALUE = 'CHANGE_EDITAD_CATEGORY_VALUE';
export const CHANGE_EDITAD_PRICE = 'CHANGE_EDITAD_PRICE';
export const CHANGE_EDITAD_LOCATION = 'CHANGE_EDITAD_LOCATION';
export const CHANGE_EDITAD_YEAR = 'CHANGE_EDITAD_YEAR';
export const CHANGE_EDITAD_SERIAL_NUMBER = 'CHANGE_EDITAD_SERIAL_NUMBER';
export const CHANGE_EDITAD_IMAGE = 'CHANGE_EDITAD_IMAGE';

export const SEND_EDITAD = 'SEND_EDITAD';
export const SAVE_EDITAD_DATA = 'SAVE_EDITAD_DATA';

export const changeEditadTitleValue = (newValue) => ({
  type: CHANGE_EDITAD_TITLE_VALUE,
  newValue,
});

export const changeEditadDescription = (newValue) => ({
  type: CHANGE_EDITAD_DESCRIPTION,
  newValue,
});

export const changeEditadState = (newValue) => ({
  type: CHANGE_EDITAD_STATE,
  newValue,
});

export const changeEditadCategory = (newValue) => ({
  type: CHANGE_EDITAD_CATEGORY,
  newValue,
});

export const changeEditadCategoryValue = (newValue) => ({
  type: CHANGE_EDITAD_CATEGORY_VALUE,
  newValue,
});

export const changeEditadPrice = (newValue) => ({
  type: CHANGE_EDITAD_PRICE,
  newValue,
});

export const changeEditadLocation = (newValue) => ({
  type: CHANGE_EDITAD_LOCATION,
  newValue,
});

export const changeEditadYear = (newValue) => ({
  type: CHANGE_EDITAD_YEAR,
  newValue,
});

export const changeEditadSerialNumber = (newValue) => ({
  type: CHANGE_EDITAD_SERIAL_NUMBER,
  newValue,
});

export const changeEditadImage = (newValue) => ({
  type: CHANGE_EDITAD_IMAGE,
  newValue,
});

export const sendEditad = (productIdReceived, adId) => ({
  type: SEND_EDITAD,
  productIdReceived,
  adId,
});

export const saveEditadData = (currentProduct, currentAd) => ({
  type: SAVE_EDITAD_DATA,
  currentProduct,
  currentAd,
});
