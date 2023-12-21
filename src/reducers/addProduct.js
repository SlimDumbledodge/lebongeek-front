import {
  CHANGE_ADD_PRODUCT_CATEGORY,
  CHANGE_ADD_PRODUCT_CATEGORY_VALUE,
  CHANGE_ADD_PRODUCT_SERIAL_NUMBER,
  CHANGE_ADD_PRODUCT_TITLE,
  CHANGE_ADD_PRODUCT_YEAR,
  CHANGE_ADD_PRODUCT,
} from '../actions/addProduct';

const initialState = {
  productTitle: '',
  productYear: '',
  productSerialNumber: '',
  productCategory: '',
  productCategoryValue: '',
  productPhotoValue: '',
};

const addProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ADD_PRODUCT_TITLE:
      return {
        ...state,
        productTitle: action.newValue,
      };

    case CHANGE_ADD_PRODUCT_YEAR:
      return {
        ...state,
        productYear: action.newValue,
      };

    case CHANGE_ADD_PRODUCT_SERIAL_NUMBER:
      return {
        ...state,
        productSerialNumber: action.newValue,
      };

    case CHANGE_ADD_PRODUCT_CATEGORY:
      return {
        ...state,
        productCategory: action.newValue,
      };

    case CHANGE_ADD_PRODUCT_CATEGORY_VALUE:
      return {
        ...state,
        productCategoryValue: action.newValue,
      };

    case CHANGE_ADD_PRODUCT: {
      return {
        ...state,
        productPhotoValue: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default addProductReducer;
