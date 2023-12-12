export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';

export const uploadImage = (image, endpoint) => ({
  type: UPLOAD_IMAGE,
  image,
  endpoint, // Ajout de l'endpoint dans l'action
});

export const uploadSuccess = () => ({
  type: UPLOAD_SUCCESS,
});

export const uploadFailure = (error) => ({
  type: UPLOAD_FAILURE,
  error,
});
