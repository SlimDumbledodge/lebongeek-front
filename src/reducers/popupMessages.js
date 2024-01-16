import {
  CLOSE_FAILED_MESSAGE,
  CLOSE_SUCCESSFULL_MESSAGE,
  OPEN_FAILED_MESSAGE,
  OPEN_SUCCESSFULL_MESSAGE,
} from '../actions/popupMessages';

const initialState = {
  isSuccessfullMessageOpen: false,
  isFailedMessageOpen: false,
};

const popupMessagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_SUCCESSFULL_MESSAGE: {
      return {
        ...state,
        isSuccessfullMessageOpen: true,
      };
    }

    case OPEN_FAILED_MESSAGE: {
      return {
        ...state,
        isFailedMessageOpen: true,
      };
    }

    case CLOSE_SUCCESSFULL_MESSAGE: {
      return {
        ...state,
        isSuccessfullMessageOpen: false,
      };
    }

    case CLOSE_FAILED_MESSAGE: {
      return {
        ...state,
        isFailedMessageOpen: false,
      };
    }
    default:
      return state;
  }
};

export default popupMessagesReducer;
