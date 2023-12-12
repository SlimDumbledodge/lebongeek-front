import './Description.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
  return (
    <section className="hub__description__container">
      <div className="hub__avatar__pseudo">
        <h2 className="hub__pseudo">PSEUDO</h2>
        <img
          src="src/assets/images/avatar.jpg"
          alt=""
          className="hub__avatar"
        />
      </div>
      <div className="hub__description__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </div>
      <div className="modify_profile">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </section>
  );
};

export default Description;
