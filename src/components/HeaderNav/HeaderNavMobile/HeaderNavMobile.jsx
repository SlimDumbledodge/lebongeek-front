import { useSelector, useDispatch } from 'react-redux';
import './HeaderNavMobile.scss';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faSquarePlus,
  faMagnifyingGlass,
  faCircleUser,
  faCircleArrowLeft,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { hide } from '../../../actions/headerNav';

const HeaderNavMobile = () => {
  const dropDownStyle = {
    right: '-15px',
    left: 'auto',
    top: '25px',
  };
  const isOpen = useSelector((state) => state.headerNav.isOpen);
  const dispatch = useDispatch();
  const countryOptions = [
    { key: 'jv', value: 'jv', text: 'Jeux-vidéo' },
    { key: 'jdr', value: 'jdr', text: 'JDR' },
    { key: 'fig', value: 'fig', text: 'Figurine' },
  ];
  const styleDropDownSearch = {
    width: '250px',
  };

  return (
    <>
      {isOpen && (
        <>
          <a href="/">
            <FontAwesomeIcon className="nav__icons" icon={faHouse} />
          </a>
          <button type="button" className="add__ad__mobile">
            <FontAwesomeIcon className="nav__icons" icon={faSquarePlus} />
          </button>
        </>
      )}
      {isOpen ? (
        <button
          type="button"
          className="add__ad__mobile"
          onClick={() => {
            dispatch(hide());
          }}
        >
          <FontAwesomeIcon className="nav__icons" icon={faMagnifyingGlass} />
        </button>
      ) : (
        <button
          type="button"
          className="add__ad__mobile"
          onClick={() => {
            dispatch(hide());
          }}
        >
          <FontAwesomeIcon className="nav__icons" icon={faCircleArrowLeft} />
        </button>
      )}

      {!isOpen && (
        <form action="">
          <Dropdown
            clearable
            fluid
            search
            selection
            icon="search"
            style={styleDropDownSearch}
            options={countryOptions}
            placeholder="Select Country"
          />
        </form>
      )}
      {isOpen && (
        <Dropdown
          text={<FontAwesomeIcon className="nav__icons" icon={faCircleUser} />}
        >
          <Dropdown.Menu style={dropDownStyle}>
            <Dropdown.Item text="Se connecter" />
            <Dropdown.Item text="Hub" as={Link} to="/hub" />
            <Dropdown.Item>
              Se déconnecter <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default HeaderNavMobile;
