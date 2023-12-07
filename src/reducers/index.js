import { combineReducers } from 'redux';

import responsiveReducer from './responsive';
import headerNavReducer from './headerNav';
import adsReducer from './ads';
import inputReducer from './input';
import loginReducer from './login';
import registerReducer from './register';

const rootReducer = combineReducers({
  responsive: responsiveReducer,
  headerNav: headerNavReducer,
  ads: adsReducer,
  input: inputReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
