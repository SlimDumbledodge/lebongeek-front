import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { switchScreenResponsive } from '../../actions/responsive';
import { fetchSearch } from '../../actions/search';

import './SearchResult.scss';

import AddResult from './AddResult';
import ProfilResult from './ProfilResult';

import baseUrl from '../../assets/baseUrl';

const SearchResult = () => {
  const { input, page } = useParams();

  const dispatch = useDispatch();

  const searchResultData = useSelector((state) => state.search.searchResult);
  const numberResultFromState = useSelector((state) => state.search.message);
  const status = useSelector((state) => state.search.status);
  const isSearchDataLoaded = useSelector(
    (state) => state.search.isSearchDataLoaded
  );
  const isCookieFilled = useSelector((state) => state.login.isCookieFilled);

  const numberResult = parseInt(numberResultFromState, 10);

  const pageNumber = Math.ceil(numberResult / 9);

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : '';

  let tableToUse = [];

  if (isCookieFilled && status === 200) {
    tableToUse = searchResultData.filter(
      (item) => item.user.id !== parsedUser.id
    );
  }
  if (isCookieFilled && status === 202) {
    tableToUse = searchResultData.filter((item) => item.id !== parsedUser.id);
  }
  if (isCookieFilled !== true) {
    tableToUse = searchResultData;
  }

  /* const userSet = new Set();

  searchResultData.forEach((data) => {
    userSet.add(data.user);
  });

  const userArray = Array.from(userSet);
  console.log(userArray); */

  /* const filtredArray = searchResultData.filter((item) => item.user.id !== 2); */
  /* let filtredUserAloneArray = [];
  if (status === 202) {
    filtredUserAloneArray = searchResultData.filter((item) => item.id !== 2);
  } */
  console.log('searchResultData : ', searchResultData);
  /* console.log('filtredUserAloneArray : ', filtredUserAloneArray); */
  console.log('tableToUse : ', tableToUse);

  const userObject = {};

  if (searchResultData) {
    tableToUse.forEach((object) => {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty('user') === true) {
        userObject[object.user.id] = object.user;
      }
    });
  }

  const userArray = Object.values(userObject);
  console.log('userArray : ', userArray);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    dispatch(fetchSearch(input, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, page]);

  return (
    <div className="page__container">
      <h2 className="bigTitle">
        {tableToUse.length > 1 ? 'Profils' : 'Profil'}
      </h2>
      <div className="profil__container">
        {(!isSearchDataLoaded && 'Chargement du résultat...') ||
          (!searchResultData || tableToUse.length === 0
            ? 'Aucun résultat trouvé'
            : (status === 202 &&
                tableToUse.map((user) => (
                  <Link to={`/hub/${user.id}`} key={user.id}>
                    <ProfilResult
                      username={user.username}
                      avatar={`${baseUrl}/images/user/avatar/${user.avatar}`}
                    />
                  </Link>
                ))) ||
              userArray.map((user) => (
                <Link to={`/hub/${user.id}`} key={user.id}>
                  <ProfilResult
                    username={user.username}
                    avatar={`${baseUrl}/images/user/avatar/${user.avatar}`}
                  />
                </Link>
              )))}
      </div>
      <h2 className="bigTitle">
        {tableToUse.length > 1 && status === 200 ? 'Annonces' : 'Annonce'}
      </h2>
      {status === 204
        ? ''
        : tableToUse.length > 0 &&
          status === 200 && (
            <>
              <p className="numberResult">
                {tableToUse.length === 1
                  ? `${tableToUse.length} résultat trouvé`
                  : `${tableToUse.length} résultats trouvés`}
              </p>
              <p className="howMuchDisplay">
                Affichage : 1 - {tableToUse && tableToUse.length}
              </p>
            </>
          )}
      <div className="ads__container">
        <div className="ads">
          {(!isSearchDataLoaded && 'Chargement du résultat...') ||
            (!searchResultData || status === 202 || tableToUse.length === 0
              ? 'Aucun résultat trouvé'
              : (status === 202 && 'Aucun résultat trouvé') ||
                tableToUse.map((product) => (
                  <Link
                    to={`/${product.category.slug}/${product.ad.id}`}
                    key={product.ad.id}
                  >
                    <AddResult
                      title={product.ad.title}
                      price={product.ad.price}
                      image={`${baseUrl}/images/product/${product.picture}`}
                    />
                  </Link>
                )))}
        </div>
      </div>
      <div className="page__number__container">
        {pageNumber > 1 &&
          Array.from({ length: pageNumber }, (_, index) => (
            <Link
              to={`/recherche/${input}/${index + 1}`}
              key={index}
              className="page_number"
            >
              {index + 1}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
