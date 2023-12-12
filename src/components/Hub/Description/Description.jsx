import Cookies from 'js-cookie';
import './Description.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
          ? 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
          : 'Modifier votre profil pour ajouter une description'}
      </div>
      <div className="modify_profile">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </section>
  );
};

export default Description;
