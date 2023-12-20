export const CHANGE_OBJECT_VALUE = 'CHANGE_OBJECT_VALUE';
export const CHANGE_CONTENT_VALUE = 'CHANGE_CONTENT_VALUE';
export const CLEAR_MESSAGE_INPUTS = 'CLEAR_MESSAGE_INPUTS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const MESSAGE_IS_SENT = 'MESSAGE_IS_SENT';
export const MESSAGE_ISNT_SENT = 'MESSAGE_ISNT_SENT';

export const changeObjectValue = (object) => ({
  type: CHANGE_OBJECT_VALUE,
  object,
});

export const changeContentValue = (content) => ({
  type: CHANGE_CONTENT_VALUE,
  content,
});

export const clearMessageInputs = () => ({
  type: CLEAR_MESSAGE_INPUTS,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const messageIsSent = () => ({
  type: MESSAGE_IS_SENT,
});

export const messageIsntSent = () => ({
  type: MESSAGE_ISNT_SENT,
});
