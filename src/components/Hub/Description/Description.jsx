import PropTypes from 'prop-types';

import './Description.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Description = ({ username, avatar, description }) => {
  return (
    <section className="hub__description__container">
      <div className="hub__avatar__pseudo">
        <h2 className="hub__pseudo">{username}</h2>
        <img src={avatar} alt="" className="hub__avatar" />
      </div>
      <div className="hub__description__text">
        {description || 'Modifier votre profil pour ajouter une description'}
      </div>
      <div className="modify_profile">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </section>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Description.defaultProps = {
  description: null,
};

export default Description;
