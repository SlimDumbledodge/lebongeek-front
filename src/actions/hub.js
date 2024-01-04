export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (hubData) => ({
  type: SET_USER,
  hubData,
});
