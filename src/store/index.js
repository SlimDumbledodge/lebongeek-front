import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';

import loginMiddleware from '../middlewares/loginMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';
import categoryMiddleware from '../middlewares/categoryMiddleware';
import adsMiddleware from '../middlewares/adsMiddleware';
import addAdFromHomeMiddleware from '../middlewares/addAdFromHomeMiddleware';
import uploadMiddleware from '../middlewares/uploadMiddleware';
import edithubMiddleware from '../middlewares/edithubMiddleware';
import foreignUserMiddleware from '../middlewares/foreignUserMiddleware';
import transactionMiddleware from '../middlewares/transactionMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    categoryMiddleware,
    adsMiddleware,
    addAdFromHomeMiddleware,
    uploadMiddleware,
    edithubMiddleware,
    foreignUserMiddleware,
    transactionMiddleware
  )
);

const store = createStore(reducer, enhancer);

export default store;
