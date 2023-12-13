import Cookies from 'js-cookie';
import './Description.scss';

const Description = () => {
  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  return (
    <section className="hub__description__container">
      <div className="hub__avatar__pseudo">
        <h2 className="hub__pseudo">{parsedUser.username}</h2>
        <img src={parsedUser.avatar} alt="" className="hub__avatar" />
      </div>
      <div className="hub__description__text">
        {parsedUser.description
          ? parsedUser.description
          : 'Modifier votre profil pour ajouter une description'}
      </div>
    </section>
  );
};

export default Description;
