export const CHANGE_TRANSFORM_PRODUCT_IN_AD_TITLE =
  'CHANGE_TRANSFORM_PRODUCT_IN_AD_TITLE';
export const CHANGE_TRANSFORM_PRODUCT_IN_AD_LOCATION =
  'CHANGE_TRANSFORM_PRODUCT_IN_AD_LOCATION';

export const CHANGE_TRANSFORM_PRODUCT_IN_AD_PRICE =
  'CHANGE_TRANSFORM_PRODUCT_IN_AD_PRICE';

export const CHANGE_TRANSFORM_PRODUCT_IN_AD_STATE =
  'CHANGE_TRANSFORM_PRODUCT_IN_AD_STATE';

export const CHANGE_TRANSFORM_PRODUCT_IN_AD_DESCRIPTION =
  'CHANGE_TRANSFORM_PRODUCT_IN_AD_DESCRIPTION';

export const REQUEST_TRANSFORM_PRODUCT_IN_AD =
  'REQUEST_TRANSFORM_PRODUCT_IN_AD';

export const requestTransformProductInAd = (productId) => ({
  type: REQUEST_TRANSFORM_PRODUCT_IN_AD,
  productId,
});

export const changeTransformProductInAdTitle = (newValue) => ({
  type: CHANGE_TRANSFORM_PRODUCT_IN_AD_TITLE,
  newValue,
});
export const changeTransformProductInAdLocation = (newValue) => ({
  type: CHANGE_TRANSFORM_PRODUCT_IN_AD_LOCATION,
  newValue,
});
export const changeTransformProductInAdPrice = (newValue) => ({
  type: CHANGE_TRANSFORM_PRODUCT_IN_AD_PRICE,
  newValue,
});

export const changeTransformProductInAdState = (newValue) => ({
  type: CHANGE_TRANSFORM_PRODUCT_IN_AD_STATE,
  newValue,
});

export const changeTransformProductInAdDescription = (newValue) => ({
  type: CHANGE_TRANSFORM_PRODUCT_IN_AD_DESCRIPTION,
  newValue,
});
