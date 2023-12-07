export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const SAVE_CATEGORY_NAME = 'SAVE_CATEGORY_NAME';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const saveCategories = (category) => ({
  type: SAVE_CATEGORIES,
  category,
});

export const categoriesLoaded = () => ({
  type: CATEGORIES_LOADED,
});

export const saveCategoryName = (name) => ({
  type: SAVE_CATEGORY_NAME,
  name,
});
