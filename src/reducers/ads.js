import { ADS_FILTER } from '../actions/ads';

const initialState = {
  isAdsFilterOpen: false,
};

const adsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADS_FILTER:
      return {
        ...state,
        isAdsFilterOpen: !state.isAdsFilterOpen,
      };
    default:
      return state;
  }
};

export default adsReducer;
