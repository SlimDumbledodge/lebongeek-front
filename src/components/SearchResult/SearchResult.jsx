import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { switchScreenResponsive } from '../../actions/responsive';
import { adsFilter } from '../../actions/ads';
import { fetchSearch } from '../../actions/search';

import './SearchResult.scss';

import AddResult from './AddResult';
import ProfilResult from './ProfilResult';
import SearchFilter from './SearchFilter/SearchFilter';

import baseUrl from '../../assets/baseUrl';

const SearchResult = () => {
  const { input, page } = useParams();

  const table = ['desktop', 'mobile'];

  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.responsive.isMobile);
  const isFilterOpen = useSelector((state) => state.ads.isAdsFilterOpen);
  const searchResultData = useSelector((state) => state.search.searchResult);
  const numberResultFromState = useSelector((state) => state.search.message);
  const status = useSelector((state) => state.search.status);
  const isSearchDataLoaded = useSelector(
    (state) => state.search.isSearchDataLoaded
  );

  const numberResult = parseInt(numberResultFromState, 10);

  const pageNumber = Math.ceil(numberResult / 9);

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    dispatch(fetchSearch(input, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, page]);

  return (
    <div className="page__container">
      <h2 className="bigTitle">{numberResult > 1 ? 'Profils' : 'Profil'}</h2>
      <div className="profil__container">
        {(!isSearchDataLoaded && 'Chargement du résultat...') ||
          (!searchResultData && 'Aucun résultat trouvé') ||
          (status === 202 &&
            searchResultData.map((user) => (
              <Link to={`/hub/${user.id}`} key={user.id}>
                <ProfilResult
                  username={user.username}
                  avatar={`${baseUrl}/images/user/avatar/${user.avatar}`}
                />
              </Link>
            ))) ||
          searchResultData.map((product) => (
            <Link to={`/hub/${product.user.id}`} key={product.ad.id}>
              <ProfilResult
                username={product.user.username}
                avatar={`${baseUrl}/images/user/avatar/${product.user.avatar}`}
              />
            </Link>
          ))}
      </div>
      <h2 className="bigTitle">{numberResult > 1 ? 'Annonces' : 'Annonce'}</h2>
      {numberResult > 0 && (
        <>
          <p className="numberResult">
            {numberResult === 1
              ? `${numberResult} résultat trouvé`
              : `${numberResult} résultats trouvés`}
          </p>
          <p className="howMuchDisplay">
            Affichage : 1 - {searchResultData && searchResultData.length}
          </p>
        </>
      )}
      <h2 className="categoryTitle">Nom de catégorie</h2>
      <div className="ads__container">
        {isMobile ? '' : <SearchFilter type={table[0]} />}
        {isMobile ? (
          <button
            type="button"
            className="ads__filter__button"
            onClick={() => {
              dispatch(adsFilter());
            }}
          >
            Filtrer
          </button>
        ) : (
          ''
        )}
        <div className="ads">
          {(!isSearchDataLoaded && 'Chargement du résultat...') ||
            (!searchResultData && 'Aucun résultat trouvé') ||
            (status === 202 && 'Aucun résultat trouvé') ||
            searchResultData.map((product) => (
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
            ))}
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
      {isFilterOpen && isMobile ? <SearchFilter type={table[1]} /> : ''}
    </div>
  );
};

export default SearchResult;
