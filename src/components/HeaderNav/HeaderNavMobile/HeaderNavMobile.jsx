import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faSquarePlus,
  faMagnifyingGlass,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { isHeaderNavOpen } from '../../../actions/headerNav';
import DropdownHub from './DropdownHub/DropdownHub';
import Form from './Form/Form';
import './HeaderNavMobile.scss';

const HeaderNavMobile = () => {
  const isHeaderNavOpenState = useSelector(
    (state) => state.headerNav.isHeaderNavOpen
  );
  const isUserLogged = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  return (
    <>
      {isHeaderNavOpenState && (
        <>
          <Link to="/">
            <FontAwesomeIcon className="nav__icons" icon={faHouse} />
          </Link>
          {isUserLogged && (
            <button type="button" className="header__mobile__icons">
              <Link to="/depot_annonce">
                <FontAwesomeIcon className="nav__icons" icon={faSquarePlus} />
              </Link>
            </button>
          )}
        </>
      )}
      {isHeaderNavOpenState ? (
        <button
          type="button"
          className="header__mobile__icons"
          onClick={() => {
            dispatch(isHeaderNavOpen());
          }}
        >
          <FontAwesomeIcon className="nav__icons" icon={faMagnifyingGlass} />
        </button>
      ) : (
        <button
          type="button"
          className="header__mobile__icons"
          onClick={() => {
            dispatch(isHeaderNavOpen());
          }}
        >
          <FontAwesomeIcon className="nav__icons" icon={faCircleArrowLeft} />
        </button>
      )}

      {!isHeaderNavOpenState && <Form />}
      {isHeaderNavOpenState && <DropdownHub />}
    </>
  );
};

export default HeaderNavMobile;
