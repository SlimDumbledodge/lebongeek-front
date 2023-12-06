import { CHANGE_INPUT_VALUE, ADD_MESSAGE } from '../actions/input';

const initialState = {
  inputContent: '',
  tableMessages: [{ id: 0, content: "Y a quelqu'un ?" }],
};

const inputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputContent: action.newContent,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        tableMessages: action.newContentMessageArray,
      };

    default:
      return state;
  }
};

export default inputReducer;
