export const CHANGE_UPLOADED_IMAGE = 'CHANGE_UPLOADED_IMAGE';
export const CHANGE_FORM_DATA = 'CHANGE_FORM_DATA';

export const changeUploadedImage = (newValue) => ({
  type: CHANGE_UPLOADED_IMAGE,
  newValue,
});

export const changeFormData = (newValue) => ({
  type: CHANGE_FORM_DATA,
  newValue,
});
