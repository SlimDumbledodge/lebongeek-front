import {
  CHANGE_TRANSFORM_PRODUCT_IN_AD_CATEGORY,
  CHANGE_TRANSFORM_PRODUCT_IN_AD_CATEGORY_VALUE,
  CHANGE_TRANSFORM_PRODUCT_IN_AD_DESCRIPTION,
  CHANGE_TRANSFORM_PRODUCT_IN_AD_LOCATION,
  CHANGE_TRANSFORM_PRODUCT_IN_AD_PRICE,
  CHANGE_TRANSFORM_PRODUCT_IN_AD_STATE,
  CHANGE_TRANSFORM_PRODUCT_IN_AD_TITLE,
} from '../actions/transformProductInAd';

const initialState = {
  transformProductInAdDescription: '',
  transformProductInAdTitle: '',
  transformProductInAdPrice: '',
  transformProductInAdState: '',
  transformProductInAdLocation: '',
  transformProductInAdCategory: '',
  transformProductInAdCategoryValue: '',
};

const transformProductInAdReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TRANSFORM_PRODUCT_IN_AD_DESCRIPTION: {
      return {
        ...state,
        transformProductInAdDescription: action.newValue,
      };
    }

    case CHANGE_TRANSFORM_PRODUCT_IN_AD_TITLE: {
      return {
        ...state,
        transformProductInAdTitle: action.newValue,
      };
    }
    case CHANGE_TRANSFORM_PRODUCT_IN_AD_PRICE: {
      return {
        ...state,
        transformProductInAdPrice: action.newValue,
      };
    }
    case CHANGE_TRANSFORM_PRODUCT_IN_AD_STATE: {
      return {
        ...state,
        transformProductInAdState: action.newValue,
      };
    }
    case CHANGE_TRANSFORM_PRODUCT_IN_AD_LOCATION: {
      return {
        ...state,
        transformProductInAdLocation: action.newValue,
      };
    }
    case CHANGE_TRANSFORM_PRODUCT_IN_AD_CATEGORY: {
      return {
        ...state,
        transformProductInAdCategory: action.newValue,
      };
    }
    case CHANGE_TRANSFORM_PRODUCT_IN_AD_CATEGORY_VALUE: {
      return {
        ...state,
        transformProductInAdCategoryValue: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default transformProductInAdReducer;
