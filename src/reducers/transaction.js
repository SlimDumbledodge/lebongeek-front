import { BUY } from '../actions/transaction';

const initialState = {
  isTransactionDone: false,
};

const transactionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BUY:
      return {
        ...state,
        isTransactionDone: !state.isTransactionDone,
      };
    default:
      return state;
  }
};

export default transactionReducer;
