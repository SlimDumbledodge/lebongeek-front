import { Link } from 'react-router-dom';

import Form from './Form/Form';
import DropdownHub from './DropdownHub/DropdownHub';

import './HeaderNavDesktop.scss';

const HeaderNavDesktop = () => {
  return (
    <>
      <Link to="/" className="header__desktop__logo">
        <img className="logo" src="src/assets/le bon geek.svg" alt="logo" />
      </Link>
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
