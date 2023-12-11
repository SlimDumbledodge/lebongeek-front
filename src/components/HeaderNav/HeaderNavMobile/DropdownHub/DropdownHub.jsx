import { Dropdown } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { clearCookie } from '../../../../actions/login';

function DropdownHub() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLogged = useSelector((state) => state.login.isCookieFilled);
  return (
    <Dropdown
      text={<FontAwesomeIcon className="nav__icons" icon={faCircleUser} />}
    >
      <Dropdown.Menu id="header__mobile__dropdown__hub">
        <Dropdown.Item text="Se connecter" as={Link} to="/connexion" />

        {isUserLogged && <Dropdown.Item text="Hub" as={Link} to="/hub" />}
        {isUserLogged && (
          <Dropdown.Item
            onClick={() => {
              dispatch(clearCookie());
              window.location.reload();
              navigate('/connexion');
            }}
          >
            Se déconnecter <FontAwesomeIcon icon={faArrowRightToBracket} />
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownHub;
