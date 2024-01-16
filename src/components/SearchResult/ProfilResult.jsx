/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const ProfilResult = ({ username, avatar }) => {
  return (
    <button type="button" className="profil">
      <img src={avatar} alt="Une annonce" className="profil__avatar" />
      <p className="profil__username">{username}</p>
    </button>
  );
};

ProfilResult.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfilResult;
