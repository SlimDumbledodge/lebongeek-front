import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { switchScreenResponsive } from '../../actions/responsive';

import './Ads.scss';

import Ad from './Ad';
import AdsFilter from './AdsFilter/AdsFilter';

const Ads = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.responsive.isMobile);

  const handleResize = () => {
    dispatch(switchScreenResponsive(window.innerWidth < 1024));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ads__container">
      {isMobile ? '' : <AdsFilter />}
      {isMobile ? (
        <button type="button" className="ads__filter__button">
          Filtrer
        </button>
      ) : (
        ''
      )}
      <div className="ads">
        <Ad />
        <Ad />
        <Ad />
        <Ad />
      </div>
    </div>
  );
};

export default Ads;
