import PropTypes from 'prop-types';

import './Banner.scss';

const Banner = ({ banner }) => {
  return <img src={banner} alt="" className="hub__banner" />;
};

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
};

export default Banner;
