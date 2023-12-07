import { SAVE_CATEGORIES } from '../actions/category';

const initialState = {
  list: [],
};

const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        list: action.category,
      };

    default:
      return state;
  }
};

export default categoryReducer;
