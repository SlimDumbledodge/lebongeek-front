import './Register.scss';

const Register = () => {
  return (
    <div className="register__container">
      <h1 className="register__title">Bonjour !</h1>
      <p className="register__text">
        Crée un compte pour découvrir nos annonces.
      </p>
      <form className="register__form">
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <input type="text" className="register__inputs" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" className="register__inputs" required />
        </div>
        <div>
          <label htmlFor="tel">Numéro de Tél.</label>
          <input type="text" className="register__inputs" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="register__inputs" required />
        </div>
        <button className="register__sign__in__button" type="submit">
          Crée mon compte
        </button>
      </form>
    </div>
  );
};

export default Register;
