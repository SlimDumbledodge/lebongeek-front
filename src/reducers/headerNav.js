import { IS_HEADER_NAV_OPEN } from '../actions/headerNav';

const initialState = {
  isHeaderNavOpen: true,
};

const headerNavReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_HEADER_NAV_OPEN:
      return {
        ...state,
        isHeaderNavOpen: !state.isHeaderNavOpen,
      };
    default:
      return state;
  }
};

export default headerNavReducer;
