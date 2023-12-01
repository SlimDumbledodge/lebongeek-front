import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardQuestion,
  faEnvelope,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

const FooterDesktop = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a href="faq">
          <div className="footer__item__wrapper">
            <FontAwesomeIcon
              className="nav__icons"
              icon={faClipboardQuestion}
            />
            F.A.Q.
          </div>
        </a>

        <a href="contact">
          <div className="footer__item__wrapper">
            <FontAwesomeIcon className="nav__icons" icon={faEnvelope} />
            Contact
          </div>
        </a>

        <a href="mentions_legales">
          <div className="footer__item__wrapper">
            <FontAwesomeIcon className="nav__icons" icon={faScaleBalanced} />
            <span>Mentions</span> <span>légales</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default FooterDesktop;
