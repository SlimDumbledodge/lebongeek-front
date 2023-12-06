export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const changeInputValue = (content) => ({
  type: CHANGE_INPUT_VALUE,
  newContent: content,
});

export const addMessage = (table) => ({
  type: ADD_MESSAGE,
  newContentMessageArray: table,
});
