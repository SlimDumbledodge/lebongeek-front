import { SAVE_CATEGORIES, CATEGORIES_LOADED } from '../actions/category';

const initialState = {
  list: [],
  isCategoriesLoaded: false,
};

const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        list: action.category,
      };

    case CATEGORIES_LOADED:
      return {
        ...state,
        isCategoriesLoaded: !state.isCategoriesLoaded,
      };

    default:
      return state;
  }
};

export default categoryReducer;
