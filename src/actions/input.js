export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SEARCH_TOGGLE_CATEGORIES = 'SEARCH_TOGGLE_CATEGORIES';

export const changeInputValue = (content) => ({
  type: CHANGE_INPUT_VALUE,
  search: content,
});

export const searchToggleCategories = () => ({
  type: SEARCH_TOGGLE_CATEGORIES,
});
