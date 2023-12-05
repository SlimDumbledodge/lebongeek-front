export const CREATE_USER = 'CREATE_USER';
// export const LOGIN_USER = 'LOGIN_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';

export const createUser = (newUser) => ({
  type: CREATE_USER,
  newUser,
});

// export const loginUser = (newEmail, newPassword) => ({
//   type: LOGIN_USER,
//   newEmail,
//   newPassword,
// });

// export const logoutUser = () => ({
//   type: LOGOUT_USER,
// });
