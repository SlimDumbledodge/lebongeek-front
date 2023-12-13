import { SAVE_SEARCH_DATA } from '../actions/search';

const initialState = {
  searchResult: [],
  isAdLoaded: false,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SEARCH_DATA:
      return {
        ...state,
        searchResult: action.data,
        isAdLoaded: !state.isAdLoaded,
      };

    default:
      return state;
  }
};

export default searchReducer;
