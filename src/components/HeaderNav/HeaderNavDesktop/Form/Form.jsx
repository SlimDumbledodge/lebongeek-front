/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInputValue,
  searchToggleCategories,
} from '../../../../actions/input';

import { fetchAdsCategories } from '../../../../actions/ads';
import { saveCategoryNameAndSlug } from '../../../../actions/category';

function Form() {
  const inputSearch = useSelector((state) => state.input.inputSearch);
  const isSearchListOpen = useSelector((state) => state.input.isSearchListOpen);
  const categoriesListFromState = useSelector(
    (state) => state.category.listCategories
  );
  const isCategoriesLoaded = useSelector(
    (state) => state.category.isCategoriesLoaded
  );

  const dispatch = useDispatch();

  return (
    <div
      onMouseLeave={() => {
        dispatch(searchToggleCategories());
      }}
      className="parentList"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(fetchAdsCategories());
        }}
      >
        <input
          type="text"
          value={inputSearch}
          onChange={(event) => {
            dispatch(changeInputValue(event.target.value));
          }}
          placeholder="Rechercher..."
          onMouseEnter={() => {
            dispatch(searchToggleCategories());
          }}
          className="theInput"
        />
      </form>
      {isSearchListOpen && isCategoriesLoaded && (
        <ul className="list">
          {categoriesListFromState.map((category) => (
            <Link to={`/annonces/${category.slug}`} key={category.id}>
              <li
                onClick={() => {
                  dispatch(fetchAdsCategories(category.id));
                  dispatch(
                    saveCategoryNameAndSlug(category.name, category.slug)
                  );
                }}
              >
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Form;
