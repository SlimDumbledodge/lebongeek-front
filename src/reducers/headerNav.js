import { HIDE } from '../actions/headerNav';

const initialState = {
  isOpen: true,
};

const headerNavReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HIDE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default headerNavReducer;
