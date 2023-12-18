export const CHANGE_UPLOADED_IMAGE = 'CHANGE_UPLOADED_IMAGE';
export const CHANGE_FORM_DATA = 'CHANGE_FORM_DATA';
export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const changeUploadedImage = (newValue) => ({
  type: CHANGE_UPLOADED_IMAGE,
  newValue,
});

export const changeFormData = (newValue) => ({
  type: CHANGE_FORM_DATA,
  newValue,
});

export const uploadImageRequest = (imageData) => ({
  type: UPLOAD_IMAGE_REQUEST,
  imageData,
});

export const uploadImageSuccess = (response) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  response,
});

export const uploadImageFailure = (error) => ({
  type: UPLOAD_IMAGE_FAILURE,
  error,
});
