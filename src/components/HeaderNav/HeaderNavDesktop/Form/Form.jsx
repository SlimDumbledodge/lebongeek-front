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

function Form() {
  const inputSearch = useSelector((state) => state.input.inputSearch);
  const isSearchListOpen = useSelector((state) => state.input.isSearchListOpen);
  const categoriesListFromState = useSelector((state) => state.category.list);
  const isCategoriesLoaded = useSelector(
    (state) => state.category.isCategoriesLoaded
  );

  const dispatch = useDispatch();

  const categoriesListFromAPI = categoriesListFromState.map((ad) => ({
    name: ad.name,
    id: ad.id,
  }));

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
          {categoriesListFromAPI.map((category) => (
            <Link to={`/annonces/${category.id}`} key={category.id}>
              <li
                onClick={() => {
                  dispatch(fetchAdsCategories(category.id));
                }}
              >
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Form;
