import axios from 'axios';
import {
  UPLOAD_IMAGE_REQUEST,
  uploadImageSuccess,
  uploadImageFailure,
} from '../actions/uploadImage';

const uploadImageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST: {
      const formData = action.imageData;

      axios
        .post('http://amgad-gaafr.vpnuser.lan:8080/api/test', formData)
        .then((response) => {
          store.dispatch(uploadImageSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(uploadImageFailure(error));
        });
      break;
    }
    default:
      break;
  }

  next(action);
};

export default uploadImageMiddleware;
