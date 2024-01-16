import {
  ADS_FILTER,
  SAVE_ADS_CATEGORIES,
  SAVE_AD,
  AD_LOADED,
} from '../actions/ads';

const initialState = {
  isAdsFilterOpen: false,
  listAdsCategories: [],
  oneAd: [],
  isAdLoaded: false,
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

    case SAVE_AD:
      return {
        ...state,
        oneAd: action.ad,
      };

    case AD_LOADED:
      return {
        ...state,
        isAdLoaded: !state.isAdLoaded,
      };

    default:
      return state;
  }
};

export default adsReducer;
