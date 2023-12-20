import {
  CHANGE_OBJECT_VALUE,
  CHANGE_CONTENT_VALUE,
  CLEAR_MESSAGE_INPUTS,
  MESSAGE_IS_SENT,
  MESSAGE_ISNT_SENT,
} from '../actions/contact';

const initialState = {
  inputObject: '',
  inputContent: '',
  isMessageSent: '',
};
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_OBJECT_VALUE:
      return {
        ...state,
        inputObject: action.object,
      };

    case CHANGE_CONTENT_VALUE:
      return {
        ...state,
        inputContent: action.content,
      };

    case CLEAR_MESSAGE_INPUTS:
      return {
        ...state,
        inputObject: '',
        inputContent: '',
      };

    case MESSAGE_IS_SENT:
      return {
        ...state,
        isMessageSent: true,
      };

    case MESSAGE_ISNT_SENT:
      return {
        ...state,
        inputObject: '',
        isMessageSent: false,
      };

    default:
      return state;
  }
};

export default contactReducer;
