export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const uploadImageRequest = (formData) => {
  return {
    type: UPLOAD_IMAGE_REQUEST,
    payload: formData,
  };
};

export const uploadImageSuccess = (imageUrl) => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    payload: imageUrl,
  };
};

export const uploadImageFailure = (error) => {
  return {
    type: UPLOAD_IMAGE_FAILURE,
    payload: error,
  };
};
