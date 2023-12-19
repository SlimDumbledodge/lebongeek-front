import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/index';

import loginMiddleware from '../middlewares/loginMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';
import categoryMiddleware from '../middlewares/categoryMiddleware';
import adsMiddleware from '../middlewares/adsMiddleware';
import addAdFromHomeMiddleware from '../middlewares/addAdFromHomeMiddleware';
import edithubMiddleware from '../middlewares/edithubMiddleware';
import foreignUserMiddleware from '../middlewares/foreignUserMiddleware';
import addProductMiddleware from '../middlewares/addProductMiddleware';
import uploadImageMiddleware from '../middlewares/uploadImageMiddleware';
import transformProductInAdMiddleware from '../middlewares/transformProductInAdMiddleware';
import searchMiddleware from '../middlewares/searchMiddleware';
import editProductMiddleware from '../middlewares/editProductMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    categoryMiddleware,
    adsMiddleware,
    addAdFromHomeMiddleware,
    uploadImageMiddleware,
    edithubMiddleware,
    foreignUserMiddleware,
    addProductMiddleware,
    transformProductInAdMiddleware,
    searchMiddleware,
    editProductMiddleware
  )
);

const store = createStore(reducer, enhancer);

export default store;
