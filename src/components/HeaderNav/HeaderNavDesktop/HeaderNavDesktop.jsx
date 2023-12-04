<<<<<<< HEAD
=======
import './HeaderNavDesktop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'semantic-ui-react';

import {
  faCircleUser,
  faArrowRightToBracket,
  faDice,
} from '@fortawesome/free-solid-svg-icons';
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
import { Link } from 'react-router-dom';

import Form from './Form/Form';
import DropdownHub from './DropdownHub/DropdownHub';

import './HeaderNavDesktop.scss';

const HeaderNavDesktop = () => {
  return (
    <>
<<<<<<< HEAD
      <Link to="/" className="header__desktop__logo">
        LeBonGeek
      </Link>
=======
      <a href="/" className="logo">
        LeBonGeek <FontAwesomeIcon icon={faDice} />
      </a>
>>>>>>> 836745cd59c9a659e8cc46d765298a204af327e7
      <Link to="/depot_annonce">
        <button type="button" className="header__desktop__add__ad__button">
          Déposer une annonce +
        </button>
      </Link>

      <Form />
      <DropdownHub />
    </>
  );
};

export default HeaderNavDesktop;
