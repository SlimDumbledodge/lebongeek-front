import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

import './Dropdown.scss';

function DropdownHub() {
  return (
    <Dropdown
      text={<FontAwesomeIcon className="nav__icons" icon={faCircleUser} />}
    >
      <Dropdown.Menu id="header__mobile__dropdown__hub">
      <Dropdown.Item text="Se connecter" as={Link} to="/connexion" />
        <Dropdown.Item text="Hub" as={Link} to="/hub" />
        <Dropdown.Item>
          Se déconnecter <FontAwesomeIcon icon={faArrowRightToBracket} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownHub;
