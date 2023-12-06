/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInputValue,
  searchToggleCategories,
} from '../../../../actions/input';

function Form() {
  const inputSearch = useSelector((state) => state.input.inputSearch);
  const isSearchListOpen = useSelector((state) => state.input.isSearchListOpen);
  const dispatch = useDispatch();

  const categoriesList = [
    'Jeux vidéo',
    'Figurine',
    'JDR',
    'Manga',
    'Comics',
    'Cosplay',
    'Cartes',
    'Guides',
    'Décoration',
  ];

  return (
    <div
      onMouseLeave={() => {
        dispatch(searchToggleCategories());
      }}
      className="parentList"
    >
      <form action="">
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
      {isSearchListOpen && (
        <ul className="list">
          {categoriesList.map((category) => (
            <li
              key={category}
              onClick={() => {
                console.log('Yo');
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Form;
