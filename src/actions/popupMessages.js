export const OPEN_SUCCESSFULL_MESSAGE = 'OPEN_SUCCESSFULL_MESSAGE';
export const OPEN_FAILED_MESSAGE = 'OPEN_FAILED_MESSAGE';
export const CLOSE_SUCCESSFULL_MESSAGE = 'CLOSE_SUCCESSFULL_MESSAGE';
export const CLOSE_FAILED_MESSAGE = 'CLOSE_FAILED_MESSAGE';

export const openSuccessFullMessage = () => ({
  type: OPEN_SUCCESSFULL_MESSAGE,
});

export const openFailedMessage = () => ({
  type: OPEN_FAILED_MESSAGE,
});

export const closeSuccessFullMessage = () => ({
  type: CLOSE_SUCCESSFULL_MESSAGE,
});

export const closeFailedMessage = () => ({
  type: CLOSE_FAILED_MESSAGE,
});
