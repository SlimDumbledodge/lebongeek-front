// import axios from 'axios';
// import { UPLOAD_IMAGE } from '../actions/uploadImage';

const uploadImageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case UPLOAD_IMAGE: {
    //   axios
    //     .post() // Utiliser l'endpoint spécifié dans l'action
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {});
    //   break;
    // }
    default:
  }

  next(action);
};

export default uploadImageMiddleware;
