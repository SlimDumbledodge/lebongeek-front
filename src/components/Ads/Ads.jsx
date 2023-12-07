import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="categoryTitle">{categoryName}</h1>
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
              <Ad
                title={product.title}
                price={ad.price}
                key={ad.id}
                image={product.picture}
              />
            ))
          )}
        </div>
      </div>
      {isFilterOpen && isMobile ? <AdsFilter type={table[1]} /> : ''}
    </>
  );
};

export default Ads;
