import {
  CHANGE_EDITAD_TITLE_VALUE,
  CHANGE_EDITAD_DESCRIPTION,
  CHANGE_EDITAD_STATE,
  CHANGE_EDITAD_CATEGORY,
  CHANGE_EDITAD_CATEGORY_VALUE,
  CHANGE_EDITAD_PRICE,
  CHANGE_EDITAD_LOCATION,
  CHANGE_EDITAD_YEAR,
  CHANGE_EDITAD_SERIAL_NUMBER,
  CHANGE_EDITAD_IMAGE,
  SAVE_EDITAD_DATA,
} from '../actions/editAd';

const initialState = {
  editAdTitle: '',
  editAdDescription: '',
  editAdState: '',
  editAdCategory: '',
  editAdCategoryValue: '',
  editAdPrice: '',
  editAdLocation: '',
  editAdYear: '',
  editAdSerialNumber: '',
  editAdImage: '',
  editAdProductTitle: '',
};

const editAdReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EDITAD_TITLE_VALUE: {
      return {
        ...state,
        editAdTitle: action.newValue,
      };
    }

    case CHANGE_EDITAD_DESCRIPTION: {
      return {
        ...state,
        editAdDescription: action.newValue,
      };
    }

    case CHANGE_EDITAD_STATE: {
      return {
        ...state,
        editAdState: action.newValue,
      };
    }

    case CHANGE_EDITAD_CATEGORY: {
      return {
        ...state,
        editAdCategory: action.newValue,
      };
    }
    case CHANGE_EDITAD_CATEGORY_VALUE: {
      return {
        ...state,
        editAdCategoryValue: action.newValue,
      };
    }

    case CHANGE_EDITAD_PRICE: {
      return {
        ...state,
        editAdPrice: action.newValue,
      };
    }

    case CHANGE_EDITAD_LOCATION: {
      return {
        ...state,
        editAdLocation: action.newValue,
      };
    }

    case CHANGE_EDITAD_YEAR: {
      return {
        ...state,
        editAdYear: action.newValue,
      };
    }
    case CHANGE_EDITAD_SERIAL_NUMBER: {
      return {
        ...state,
        editAdSerialNumber: action.newValue,
      };
    }

    case CHANGE_EDITAD_IMAGE: {
      return {
        ...state,
        editAdImage: action.newValue,
      };
    }

    case SAVE_EDITAD_DATA:
      return {
        ...state,
        editAdTitle: action.currentAd.title,
        editAdDescription: action.currentAd.description,
        editAdState: action.currentAd.state,
        editAdCategory: action.currentProduct.category.id,
        editAdCategoryValue: action.currentProduct.category.name,
        editAdPrice: action.currentAd.price,
        editAdLocation: action.currentAd.location,
        editAdYear: action.currentProduct.year,
        editAdSerialNumber: action.currentProduct.serial_number,
        editAdImage: action.currentProduct.picture,
        editAdProductTitle: action.currentProduct.title,
      };

    default:
      return state;
  }
};

export default editAdReducer;
