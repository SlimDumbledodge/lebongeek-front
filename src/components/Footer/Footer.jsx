import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardQuestion,
  faEnvelope,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const FooterDesktop = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Link to="/faq">
          <div className="footer__item__wrapper">
            <FontAwesomeIcon
              className="nav__icons"
              icon={faClipboardQuestion}
            />
            F.A.Q.
          </div>
        </Link>

        <Link to="/contact">
          <div className="footer__item__wrapper">
            <FontAwesomeIcon className="nav__icons" icon={faEnvelope} />
            Contact
          </div>
        </Link>

        <Link to="/mentions-legales">
          <div className="footer__item__wrapper">
            <FontAwesomeIcon className="nav__icons" icon={faScaleBalanced} />
            <span>Mentions</span> <span>légales</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default FooterDesktop;
