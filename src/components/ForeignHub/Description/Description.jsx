import PropTypes from 'prop-types';

import './Description.scss';

const Description = ({ username, avatar, description }) => {
  return (
    <section className="hub__description__container">
      <div className="hub__avatar__pseudo">
        <h2 className="hub__pseudo">{username}</h2>
        <img src={avatar} alt="" className="hub__avatar" />
      </div>
      <div className="hub__description__text">
        {description || 'Pas de description'}
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
