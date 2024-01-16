import {
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

    default:
      return state;
  }
};

export default transformProductInAdReducer;
