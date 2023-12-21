export const CHANGE_EDIT_PRODUCT_NAME = 'CHANGE_EDIT_PRODUCT_NAME';
export const CHANGE_EDIT_PRODUCT_YEAR = 'CHANGE_EDIT_PRODUCT_YEAR';
export const CHANGE_EDIT_PRODUCT_SERIAL_NUMBER =
  'CHANGE_EDIT_PRODUCT_SERIAL_NUMBER';
export const CHANGE_EDIT_PRODUCT_CATEGORY = 'CHANGE_EDIT_PRODUCT_CATEGORY';
export const CHANGE_EDIT_PRODUCT_CATEGORY_VALUE =
  'CHANGE_EDIT_PRODUCT_CATEGORY_VALUE';

export const REQUEST_EDIT_PRODUCT = 'REQUEST_EDIT_PRODUCT';
export const CHANGE_EDIT_PRODUCT_IMAGE = 'CHANGE_EDIT_PRODUCT_IMAGE';

export const changeEditProductImage = (newValue) => ({
  type: CHANGE_EDIT_PRODUCT_IMAGE,
  newValue,
});

export const changeEditProductName = (newValue) => ({
  type: CHANGE_EDIT_PRODUCT_NAME,
  newValue,
});

export const changeEditProductYear = (newValue) => ({
  type: CHANGE_EDIT_PRODUCT_YEAR,
  newValue,
});

export const changeEditProductSerialNumber = (newValue) => ({
  type: CHANGE_EDIT_PRODUCT_SERIAL_NUMBER,
  newValue,
});

export const changeEditProductCategory = (newValue) => ({
  type: CHANGE_EDIT_PRODUCT_CATEGORY,
  newValue,
});

export const changeEditProductCategoryValue = (newValue) => ({
  type: CHANGE_EDIT_PRODUCT_CATEGORY_VALUE,
  newValue,
});

export const requestEditProduct = (productId) => ({
  type: REQUEST_EDIT_PRODUCT,
  productId,
});
