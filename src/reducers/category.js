import {
  SAVE_CATEGORIES,
  CATEGORIES_LOADED,
  SAVE_CATEGORY_NAME,
} from '../actions/category';

const initialState = {
  listCategories: [],
  isCategoriesLoaded: false,
  categoryName: '',
};

const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        listCategories: action.category,
      };

    case CATEGORIES_LOADED:
      return {
        ...state,
        isCategoriesLoaded: !state.isCategoriesLoaded,
      };

    case SAVE_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.name,
      };

    default:
      return state;
  }
};

export default categoryReducer;
