import { SAVE_SEARCH_DATA } from '../actions/search';

const initialState = {
  searchResult: [],
  message: '',
  isSearchDataLoaded: false,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SEARCH_DATA:
      return {
        ...state,
        searchResult: action.data,
        message: action.message,
        isSearchDataLoaded: !state.isSearchDataLoaded,
      };

    default:
      return state;
  }
};

export default searchReducer;
