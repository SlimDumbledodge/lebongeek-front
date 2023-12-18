import { SAVE_SEARCH_DATA } from '../actions/search';

const initialState = {
  searchResult: [],
  message: '',
  status: '',
  isSearchDataLoaded: false,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SEARCH_DATA:
      return {
        ...state,
        searchResult: action.data,
        message: action.message,
        status: action.status,
        isSearchDataLoaded: !state.isSearchDataLoaded,
      };

    default:
      return state;
  }
};

export default searchReducer;
