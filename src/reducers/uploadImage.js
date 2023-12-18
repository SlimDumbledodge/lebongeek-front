import {
  CHANGE_FORM_DATA,
  CHANGE_UPLOADED_IMAGE,
} from '../actions/uploadImage';

const initialState = {
  uploadedImage: null,
  formData: null,
};

const uploadImageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_UPLOADED_IMAGE:
      return {
        ...state,
        uploadedImage: action.newValue,
      };

    case CHANGE_FORM_DATA:
      return {
        ...state,
        formData: action.newValue,
      };
    default:
      return state;
  }
};

export default uploadImageReducer;
