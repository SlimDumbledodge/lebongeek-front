import { combineReducers } from 'redux';

import responsiveReducer from './responsive';
import headerNavReducer from './headerNav';
import adsReducer from './ads';
import inputReducer from './input';
import loginReducer from './login';
import registerReducer from './register';
import categoryReducer from './category';
import addAdFromHomeReducer from './addAdFromHome';
import transactionReducer from './transaction';
import edithubReducer from './edithub';
import foreignUserReducer from './foreignUser';
import addProductReducer from './addProduct';
import uploadImageReducer from './uploadImage';
import transformProductInAdReducer from './transformProductInAd';
import searchReducer from './search';
import editProductReducer from './editProduct';
import contactReducer from './contact';
import popupMessagesReducer from './popupMessages';
import hubReducer from './hub';

const rootReducer = combineReducers({
  responsive: responsiveReducer,
  headerNav: headerNavReducer,
  ads: adsReducer,
  input: inputReducer,
  login: loginReducer,
  register: registerReducer,
  category: categoryReducer,
  addAdFromHome: addAdFromHomeReducer,
  transaction: transactionReducer,
  edithub: edithubReducer,
  foreignUser: foreignUserReducer,
  addProduct: addProductReducer,
  uploadImage: uploadImageReducer,
  transformProductInAd: transformProductInAdReducer,
  search: searchReducer,
  editProduct: editProductReducer,
  contact: contactReducer,
  popupMessages: popupMessagesReducer,
  hub: hubReducer,
});

export default rootReducer;
