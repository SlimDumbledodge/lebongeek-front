export const CHANGE_ADD_PRODUCT_TITLE = 'CHANGE_ADD_PRODUCT_TITLE';
export const CHANGE_ADD_PRODUCT_YEAR = 'CHANGE_ADD_PRODUCT_YEAR';
export const CHANGE_ADD_PRODUCT_SERIAL_NUMBER =
  'CHANGE_ADD_PRODUCT_SERIAL_NUMBER';
export const CHANGE_ADD_PRODUCT_CATEGORY = 'CHANGE_ADD_PRODUCT_CATEGORY';
export const CHANGE_ADD_PRODUCT_CATEGORY_VALUE =
  'CHANGE_ADD_PRODUCT_CATEGORY_VALUE';

export const ADD_PRODUCT_SEND_REQUEST = 'ADD_PRODUCT_SEND_REQUEST';
export const CHANGE_ADD_PRODUCT = 'CHANGE_ADD_PRODUCT';

export const changeAddProductTitle = (newValue) => ({
  type: CHANGE_ADD_PRODUCT_TITLE,
  newValue,
});

export const changeAddProductYear = (newValue) => ({
  type: CHANGE_ADD_PRODUCT_YEAR,
  newValue,
});

export const changeAddProductSerialNumber = (newValue) => ({
  type: CHANGE_ADD_PRODUCT_SERIAL_NUMBER,
  newValue,
});

export const changeAddProductCategory = (newValue) => ({
  type: CHANGE_ADD_PRODUCT_CATEGORY,
  newValue,
});

export const changeAddProductCategoryValue = (newValue) => ({
  type: CHANGE_ADD_PRODUCT_CATEGORY_VALUE,
  newValue,
});

export const addProductSendRequest = () => ({
  type: ADD_PRODUCT_SEND_REQUEST,
});

export const changeAddProduct = (newValue) => ({
  type: CHANGE_ADD_PRODUCT,
  newValue,
});
