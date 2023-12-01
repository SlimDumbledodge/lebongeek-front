import { SWITCH_SCREEN_RESPONSIVE } from '../actions/responsive';

const initialState = {
  isMobile: window.innerWidth < 1024,
};

const responsiveReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_SCREEN_RESPONSIVE:
      return {
        ...state,
        isMobile: action.isMobile,
      };
    default:
      return state;
  }
};

export default responsiveReducer;
