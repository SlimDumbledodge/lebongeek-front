import { ADS_FILTER, SAVE_ADS_CATEGORIES } from '../actions/ads';

const initialState = {
  isAdsFilterOpen: false,
  listAdsCategories: [],
};

const adsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADS_FILTER:
      return {
        ...state,
        isAdsFilterOpen: !state.isAdsFilterOpen,
      };

    case SAVE_ADS_CATEGORIES:
      return {
        ...state,
        listAdsCategories: action.ads,
      };

    default:
      return state;
  }
};

export default adsReducer;
