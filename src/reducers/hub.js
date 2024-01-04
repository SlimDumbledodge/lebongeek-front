import Cookies from 'js-cookie';

import { SET_USER } from '../actions/hub';

const initialState = {
  isUserDataLoaded: false,
};

const hubReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      Cookies.remove('user');
      Cookies.set('user', JSON.stringify(action.hubData));
      return {
        ...state,
        isUserDataLoaded: true,
      };

    default:
      return state;
  }
};

export default hubReducer;
