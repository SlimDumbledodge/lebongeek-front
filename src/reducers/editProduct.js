import {
  CHANGE_EDIT_PRODUCT_CATEGORY,
  CHANGE_EDIT_PRODUCT_CATEGORY_VALUE,
  CHANGE_EDIT_PRODUCT_IMAGE,
  CHANGE_EDIT_PRODUCT_NAME,
  CHANGE_EDIT_PRODUCT_SERIAL_NUMBER,
  CHANGE_EDIT_PRODUCT_YEAR,
} from '../actions/editProduct';

const initialState = {
  editProductName: '',
  editProductYear: '',
  editProductSerialNumber: '',
  editProductCategory: 0,
  editProductCategoryValue: '',
  editProductImage: '',
};

const editProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EDIT_PRODUCT_IMAGE: {
      return {
        ...state,
        editProductImage: action.newValue,
      };
    }
    case CHANGE_EDIT_PRODUCT_NAME: {
      return {
        ...state,
        editProductName: action.newValue,
      };
    }

    case CHANGE_EDIT_PRODUCT_YEAR: {
      return {
        ...state,
        editProductYear: action.newValue,
      };
    }
    case CHANGE_EDIT_PRODUCT_SERIAL_NUMBER: {
      return {
        ...state,
        editProductSerialNumber: action.newValue,
      };
    }
    case CHANGE_EDIT_PRODUCT_CATEGORY: {
      return {
        ...state,
        editProductCategory: action.newValue,
      };
    }

    case CHANGE_EDIT_PRODUCT_CATEGORY_VALUE: {
      return {
        ...state,
        editProductCategoryValue: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default editProductReducer;
