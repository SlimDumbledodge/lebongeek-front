export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SAVE_SEARCH_DATA = 'SAVE_SEARCH_DATA';

export const fetchSearch = () => ({
  // Il faut rajouter l'input en paramètre et aussi le numPage
  type: FETCH_SEARCH,
});

export const saveSearchData = (data) => ({
  type: SAVE_SEARCH_DATA,
  data,
});
