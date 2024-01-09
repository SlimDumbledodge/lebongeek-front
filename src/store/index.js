import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducers from '../reducers';

import loginMiddleware from '../middlewares/loginMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';
import categoryMiddleware from '../middlewares/categoryMiddleware';
import adsMiddleware from '../middlewares/adsMiddleware';
import addAdFromHomeMiddleware from '../middlewares/addAdFromHomeMiddleware';
import edithubMiddleware from '../middlewares/edithubMiddleware';
import foreignUserMiddleware from '../middlewares/foreignUserMiddleware';
import addProductMiddleware from '../middlewares/addProductMiddleware';
import imageUploadMiddleware from '../middlewares/imageUploadMiddleware';
import transformProductInAdMiddleware from '../middlewares/transformProductInAdMiddleware';
import searchMiddleware from '../middlewares/searchMiddleware';
import editProductMiddleware from '../middlewares/editProductMiddleware';
import transactionMiddleware from '../middlewares/transactionMiddleware';
import deleteProductMiddleware from '../middlewares/deleteProductMiddleware';
import contactMiddleware from '../middlewares/contactMiddleware';
import hubMiddleware from '../middlewares/hubMiddleware';
<<<<<<< HEAD
import editAdMiddleware from '../middlewares/editAdMiddleware';
=======
import deleteAccountMiddleware from '../middlewares/deleteAccount';
>>>>>>> 2a53390d85975c62890e82ed9e8a83735c73ea39

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    categoryMiddleware,
    adsMiddleware,
    addAdFromHomeMiddleware,
    imageUploadMiddleware,
    edithubMiddleware,
    foreignUserMiddleware,
    addProductMiddleware,
    transformProductInAdMiddleware,
    searchMiddleware,
    editProductMiddleware,
    transactionMiddleware,
    deleteProductMiddleware,
    contactMiddleware,
    hubMiddleware,
<<<<<<< HEAD
    editAdMiddleware
=======
    deleteAccountMiddleware
>>>>>>> 2a53390d85975c62890e82ed9e8a83735c73ea39
  )
);

const store = createStore(reducers, enhancer);

export default store;
