import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { switchScreenResponsive } from '../../actions/responsive';
import { adsFilter } from '../../actions/ads';
import { fetchSearch } from '../../actions/search';

import './SearchResult.scss';

import Result from './Result';
import SearchFilter from './SearchFilter/SearchFilter';

const SearchResult = () => {
  const { input, page } = useParams();

  const table = ['desktop', 'mobile'];

  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.responsive.isMobile);
  const isFilterOpen = useSelector((state) => state.ads.isAdsFilterOpen);
  const searchResultData = useSelector((state) => state.search.searchResult);
  const isSearchDataLoaded = useSelector(
    (state) => state.search.isSearchDataLoaded
  );

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    dispatch(fetchSearch(input, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, page]);

  return (
    <>
      <h1 className="categoryTitle">Nom de catégorie</h1>
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
            searchResultData.map((product) => (
              <Link
                to={`/${product.category.slug}/${product.ad.id}`}
                key={product.ad.id}
              >
                <Result
                  title={product.ad.title}
                  price={product.ad.price}
                  image={product.picture}
                />
              </Link>
            ))}
        </div>
      </div>
      {isFilterOpen && isMobile ? <SearchFilter type={table[1]} /> : ''}
    </>
  );
};

export default SearchResult;
