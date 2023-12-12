import {
  UPLOAD_IMAGE,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
} from '../actions/upload';

const initialState = {
  uploading: false,
  uploaded: false,
  error: null,
  uploadedImage: null,
};

const uploadReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        uploading: true,
        uploaded: false,
        error: null,
        uploadedImage: action.image,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploading: false,
        uploaded: true,
        error: null,
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        uploading: false,
        uploaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default uploadReducer;
