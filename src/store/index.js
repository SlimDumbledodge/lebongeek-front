import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';

import loginMiddleware from '../middlewares/loginMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(loginMiddleware, registerMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
