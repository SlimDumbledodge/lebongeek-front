import './Banner.scss';

import Cookies from 'js-cookie';

import baseUrl from '../../../assets/baseUrl';

const Banner = () => {
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  return (
    <img
      src={`${baseUrl}/images/user/banner/${parsedUser.banner}`}
      alt=""
      className="hub__banner"
    />
  );
};

export default Banner;
