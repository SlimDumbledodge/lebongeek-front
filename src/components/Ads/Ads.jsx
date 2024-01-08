import Cookies from 'js-cookie';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import baseUrl from '../../assets/baseUrl';

import { switchScreenResponsive } from '../../actions/responsive';
import { adsFilter, fetchAdsCategories } from '../../actions/ads';

import './Ads.scss';

import Ad from './Ad';
import AdsFilter from './AdsFilter/AdsFilter';

const Ads = () => {
  const { slug } = useParams();

  const table = ['desktop', 'mobile'];

  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.responsive.isMobile);
  const isFilterOpen = useSelector((state) => state.ads.isAdsFilterOpen);
  const adsCategory = useSelector((state) => state.ads.listAdsCategories);
  const categoriesList = useSelector((state) => state.category.listCategories);

  const isCookieFilled = useSelector((state) => state.login.isCookieFilled);
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : '';

  const currentCategory = categoriesList.find(
    (category) => category.slug === slug
  );

  let tableToUse = [];

  if (isCookieFilled) {
    tableToUse = adsCategory.filter(
      (item) => item.ad && item.ad.user.id !== parsedUser.id
    );
  }
  if (isCookieFilled !== true) {
    tableToUse = adsCategory.filter((item) => item.ad);
  }

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
          {tableToUse.length === 0
            ? 'Aucune annonce'
            : tableToUse.map((product) => {
                return (
                  <Link to={`/${slug}/${product.ad.id}`} key={product.ad.id}>
                    <Ad
                      title={product.ad.title}
                      price={product.ad.price}
                      image={`${baseUrl}/images/product/${product.picture}`}
                    />
                  </Link>
                );
              })}
        </div>
      </div>
      {isFilterOpen && isMobile ? <AdsFilter type={table[1]} /> : ''}
    </>
  );
};

export default Ads;
