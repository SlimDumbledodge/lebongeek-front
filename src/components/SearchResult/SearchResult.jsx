import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { switchScreenResponsive } from '../../actions/responsive';
import { adsFilter, fetchAdsCategories } from '../../actions/ads';

import './SearchResult.scss';

import Result from './Result';
import SearchFilter from './SearchFilter/SearchFilter';

const SearchResult = () => {
  const { slug } = useParams();

  const table = ['desktop', 'mobile'];

  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.responsive.isMobile);
  const isFilterOpen = useSelector((state) => state.ads.isAdsFilterOpen);
  const adsCategory = useSelector((state) => state.ads.listAdsCategories);
  const categoriesList = useSelector((state) => state.category.listCategories);

  const currentCategory = categoriesList.find(
    (category) => category.slug === slug
  );

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    dispatch(fetchAdsCategories(currentCategory.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory.id]);

  return (
    <>
      <h1 className="categoryTitle">
        {currentCategory.name.charAt(0).toUpperCase() +
          currentCategory.name.slice(1)}
      </h1>
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
          {adsCategory.map((product) => (
            <Link to={`/${slug}/${product.ad.id}`} key={product.id}>
              <Result
                title={product.title}
                price={product.ad.price}
                key={product.ad.id}
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
