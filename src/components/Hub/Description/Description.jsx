import Cookies from 'js-cookie';
import './Description.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import baseUrl from '../../../assets/baseUrl';

const Description = () => {
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  return (
    <section className="hub__description__container">
      <div className="hub__avatar__pseudo">
        <h2 className="hub__pseudo">{parsedUser.username}</h2>
        <img
          src={`${baseUrl}/images/user/avatar/${parsedUser.avatar}`}
          alt=""
          className="hub__avatar"
        />
      </div>
      <div className="hub__description__text">
        {parsedUser.description
          ? parsedUser.description
          : 'Modifier votre profil pour ajouter une description'}
      </div>
      <div className="modify_profile">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </section>
  );
};

export default Description;
