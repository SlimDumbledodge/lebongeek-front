import { SAVE_FOREIGN_USER, FOREIGN_USER_LOADED } from '../actions/foreignUser';

const initialState = {
  oneForeignUser: [],
  isForeignUserLoaded: false,
};

const foreignUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FOREIGN_USER:
      return {
        ...state,
        oneForeignUser: action.user,
      };

    case FOREIGN_USER_LOADED:
      return {
        ...state,
        isForeignUserLoaded: true,
      };

    default:
      return state;
  }
};

export default foreignUserReducer;
