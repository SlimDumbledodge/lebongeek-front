import {
  SAVE_CATEGORIES,
  CATEGORIES_LOADED,
  SAVE_CATEGORY_NAME_AND_SLUG,
} from '../actions/category';

const initialState = {
  listCategories: [],
  isCategoriesLoaded: false,
  categoryName: '',
  categorySlug: '',
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

    case SAVE_CATEGORY_NAME_AND_SLUG:
      return {
        ...state,
        categoryName: action.name,
        categorySlug: action.slug,
      };

    default:
      return state;
  }
};

export default categoryReducer;
