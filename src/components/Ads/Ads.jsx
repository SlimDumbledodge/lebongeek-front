import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { switchScreenResponsive } from '../../actions/responsive';
import { adsFilter } from '../../actions/ads';

import './Ads.scss';

import Ad from './Ad';
import AdsFilter from './AdsFilter/AdsFilter';

const Ads = () => {
  const table = ['desktop', 'mobile'];

  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.responsive.isMobile);
  const isFilterOpen = useSelector((state) => state.ads.isAdsFilterOpen);
  const adsCategory = useSelector((state) => state.ads.listAdsCategories);
  const categoryName = useSelector((state) => state.category.categoryName);
  const categorySlug = useSelector((state) => state.category.categorySlug);

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="categoryTitle">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      <div className="ads__container">
        {isMobile ? '' : <AdsFilter type={table[0]} />}
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
          {adsCategory.map((ad) =>
            ad.products.map((product) => (
              <Link to={`/${categorySlug}/${ad.id}`} key={product.id}>
                <Ad
                  title={product.title}
                  price={ad.price}
                  key={product.id}
                  image={product.picture}
                />
              </Link>
            ))
          )}
        </div>
      </div>
      {isFilterOpen && isMobile ? <AdsFilter type={table[1]} /> : ''}
    </>
  );
};

export default Ads;
