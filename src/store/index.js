import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';

import loginMiddleware from '../middlewares/loginMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';
import categoryMiddleware from '../middlewares/categoryMiddleware';
import adsMiddleware from '../middlewares/adsMiddleware';
import addAdFromHomeMiddleware from '../middlewares/addAdFromHomeMiddleware';
import uploadMiddleware from '../middlewares/uploadMiddleware';
import foreignUserMiddleware from '../middlewares/foreignUserMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    categoryMiddleware,
    adsMiddleware,
    addAdFromHomeMiddleware,
    uploadMiddleware,
    foreignUserMiddleware
  )
);

const store = createStore(reducer, enhancer);

export default store;
