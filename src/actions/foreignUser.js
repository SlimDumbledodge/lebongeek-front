export const FETCH_FOREIGN_USER = 'FETCH_FOREIGN_USER';
export const SAVE_FOREIGN_USER = 'SAVE_FOREIGN_USER';
export const FOREIGN_USER_LOADED = 'FOREIGN_USER_LOADED';

export const fetchForeignUser = (id) => ({
  type: FETCH_FOREIGN_USER,
  id,
});

export const saveForeignUser = (user) => ({
  type: SAVE_FOREIGN_USER,
  user,
});

export const foreignUserLoaded = () => ({
  type: FOREIGN_USER_LOADED,
});
