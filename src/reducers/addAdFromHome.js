import {
  CHANGE_ADD_AD_FROM_HOME_CATEGORY,
  CHANGE_ADD_AD_FROM_HOME_DESCRIPTION,
  CHANGE_ADD_AD_FROM_HOME_STATE,
  CHANGE_ADD_AD_FROM_HOME_PRODUCT_TITLE,
  CHANGE_ADD_AD_FROM_HOME_PRICE,
  CHANGE_ADD_AD_FROM_HOME_LOCATION,
  CHANGE_ADD_AD_FROM_HOME_PRODUCT_YEAR,
  CHANGE_ADD_AD_FROM_HOME_PRODUCT_SERIAL_NUMBER,
  CHANGE_ADD_AD_FROM_HOME_CATEGORY_VALUE,
  CHANGE_ADD_AD_FROM_HOME_IMAGE,
  SET_ADD_AD_FROM_HOME_STATUS,
} from '../actions/addAdFromHome';

const initialState = {
  addAdFromHomeProductTitle: '',
  addAdFromHomeProductPhoto: '',
  addAdFromHomeProductYear: '',
  addAdFromHomeProductSerialNumber: '',

  addAdFromHomeDescription: '',
  addAdFromHomePrice: '',
  addAdFromHomeState: '',
  addAdFromHomeLocation: '',
  addAdFromHomeCategory: '',
  addAdFromHomeCategoryValue: '',

  isaddAdFromHomeSucceed: false,
};

const addAdFromHomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ADD_AD_FROM_HOME_STATUS: {
      return {
        ...state,
        isaddAdFromHomeSucceed: !state.isaddAdFromHomeSucceed,
      };
    }
    case CHANGE_ADD_AD_FROM_HOME_IMAGE: {
      return {
        ...state,
        addAdFromHomeProductPhoto: action.newValue,
      };
    }
    case CHANGE_ADD_AD_FROM_HOME_PRODUCT_TITLE:
      return {
        ...state,
        addAdFromHomeProductTitle: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_DESCRIPTION:
      return {
        ...state,
        addAdFromHomeDescription: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_STATE:
      return {
        ...state,
        addAdFromHomeState: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_CATEGORY:
      return {
        ...state,
        addAdFromHomeCategory: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_CATEGORY_VALUE:
      return {
        ...state,
        addAdFromHomeCategoryValue: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_PRICE:
      return {
        ...state,
        addAdFromHomePrice: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_LOCATION:
      return {
        ...state,
        addAdFromHomeLocation: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_PRODUCT_YEAR:
      return {
        ...state,
        addAdFromHomeProductYear: action.newValue,
      };

    case CHANGE_ADD_AD_FROM_HOME_PRODUCT_SERIAL_NUMBER:
      return {
        ...state,
        addAdFromHomeProductSerialNumber: action.newValue,
      };
    default:
      return state;
  }
};

export default addAdFromHomeReducer;
