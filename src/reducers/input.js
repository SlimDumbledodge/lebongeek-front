import { CHANGE_INPUT_VALUE, SEARCH_TOGGLE_CATEGORIES } from '../actions/input';

const initialState = {
  inputSearch: '',
  isSearchListOpen: false,
};

const inputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputSearch: action.search,
      };

    case SEARCH_TOGGLE_CATEGORIES:
      return {
        ...state,
        isSearchListOpen: !state.isSearchListOpen,
      };

    default:
      return state;
  }
};

export default inputReducer;
