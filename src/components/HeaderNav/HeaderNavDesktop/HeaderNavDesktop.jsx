import './HeaderNavDesktop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'semantic-ui-react';
import {
  faCircleUser,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const HeaderNavDesktop = () => {
  const dropDownStyle = {
    right: '-15px',
    left: 'auto',
  };
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
      <a href="/" className="logo">
        LeBonGeek
      </a>
      <button type="button" className="add__ad__desktop">
        Déposer une annonce +
      </button>
      <form action="">
        <Dropdown
          clearable
          fluid
          search
          selection
          icon="search"
          style={styleDropDownSearch}
          options={countryOptions}
          placeholder="Jeux-vidéo..."
        />
      </form>

      <Dropdown
        text={<FontAwesomeIcon className="nav__icons" icon={faCircleUser} />}
      >
        <Dropdown.Menu style={dropDownStyle}>
          <Dropdown.Item text="Se connecter" />
          <Dropdown.Item text="Hub" />
          <Dropdown.Item>
            Se déconnecter <FontAwesomeIcon icon={faArrowRightToBracket} />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default HeaderNavDesktop;
