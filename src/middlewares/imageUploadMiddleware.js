import axios from 'axios';
import baseUrl from '../assets/baseUrl';
import {
  UPLOAD_IMAGE_REQUEST,
  uploadImageSuccess,
  uploadImageFailure,
} from '../actions/uploadImage';

const imageUploadMiddleware = (store) => (next) => async (action) => {
  next(action);

  if (action.type === UPLOAD_IMAGE_REQUEST) {
    try {
      const formData = action.payload;
      console.log(formData);
      console.log('Contenu de FormData :', formData);
      const response = await axios.post(
        baseUrl,
        formData.get('image'),
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${store.getState().login.token}`,
          },
        }
      );

      if (response && response.data && response.data.imageUrl) {
        store.dispatch(uploadImageSuccess(response.data.imageUrl));
      }
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      store.dispatch(
        uploadImageFailure(
          error.response ? error.response.data : "Erreur lors de l'upload"
        )
      );
    }
  }
};

export default imageUploadMiddleware;
