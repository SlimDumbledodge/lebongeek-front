import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

import './DropdownHub.scss';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../actions/authentification';

const DropdownHub = () => {
  const dispatch = useDispatch();
  return (
    <Dropdown
      text={<FontAwesomeIcon className="nav__icons" icon={faCircleUser} />}
    >
      <Dropdown.Menu id="header__desktop__dropdown__hub">
        <Dropdown.Item text="Se connecter" as={Link} to="/connexion" />
        <Dropdown.Item text="Hub" as={Link} to="/hub" />
        <Dropdown.Item
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Se déconnecter <FontAwesomeIcon icon={faArrowRightToBracket} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownHub;
