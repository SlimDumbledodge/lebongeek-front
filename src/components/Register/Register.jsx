import { useDispatch } from 'react-redux';
import './Register.scss';
import { createUser } from '../../actions/authentification';

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="register__container">
      <h1 className="register__title">Bonjour !</h1>
      <p className="register__text">
        Crée un compte pour découvrir nos annonces.
      </p>
      <form
        className="register__form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(createUser());
        }}
      >
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <input type="text" className="register__inputs" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" className="register__inputs" />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input type="text" className="register__inputs" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="register__inputs" />
        </div>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" className="register__inputs" />
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" className="register__inputs" />
        </div>

        <div>
          <label htmlFor="tel">Numéro de Tél.</label>
          <input type="text" className="register__inputs" />
        </div>

        <button className="register__sign__in__button" type="submit">
          Crée mon compte
        </button>
      </form>
    </div>
  );
};

export default Register;
