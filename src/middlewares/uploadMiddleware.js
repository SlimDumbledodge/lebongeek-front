import axios from 'axios';
import { UPLOAD_IMAGE, uploadSuccess, uploadFailure } from '../actions/upload';

const uploadMiddleware = (store) => (next) => (action) => {
  if (action.type === UPLOAD_IMAGE) {
    const { image, endpoint } = action; // Récupérer l'image à envoyer et l'endpoint spécifique

    axios
      .post(endpoint, { image }) // Utiliser l'endpoint spécifié dans l'action
      .then((response) => {
        console.log(response);
        store.dispatch(uploadSuccess());
      })
      .catch((error) => {
        store.dispatch(uploadFailure(error.message));
      });
  }

  next(action);
};

export default uploadMiddleware;
