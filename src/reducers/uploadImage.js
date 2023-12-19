import {
  CHANGE_FORM_DATA,
  CHANGE_UPLOADED_IMAGE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from '../actions/uploadImage';

const initialState = {
  uploadedImage: null,
  formData: null,
  uploadInProgress: false,
  uploadSuccess: false,
  uploadError: null,
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

    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        uploadInProgress: true,
        uploadSuccess: false,
        uploadError: null,
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadInProgress: false,
        uploadSuccess: true,
        uploadError: null,
      };

    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadInProgress: false,
        uploadSuccess: false,
        uploadError: action.error,
      };

    default:
      return state;
  }
};

export default uploadImageReducer;
