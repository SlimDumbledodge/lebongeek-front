import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { switchScreenResponsive } from '../../actions/responsive';
import HeaderNavDesktop from './HeaderNavDesktop/HeaderNavDesktop';
import HeaderNavMobile from './HeaderNavMobile/HeaderNavMobile';

import './HeaderNav.scss';

const HeaderNav = () => {
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
    <header className="header">
      <nav className="wrapper__icons">
        {isMobile ? <HeaderNavMobile /> : <HeaderNavDesktop />}
      </nav>
    </header>
  );
};

export default HeaderNav;
