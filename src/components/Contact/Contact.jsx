import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact__container">
      <h1 className="contact__title">Contact</h1>
      <form
        className="contact__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            className="register__inputs"
            value={usernameValue}
            onChange={(event) => {
              dispatch(changeRegisterUsername(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="register__inputs"
            value={emailValue}
            onChange={(event) => {
              dispatch(changeRegisterEmail(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="register__inputs"
            value={passwordValue}
            onChange={(event) => {
              dispatch(changeRegisterPassword(event.target.value));
            }}
          />
        </div>
        <button className="register__sign__in__button" type="submit">
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default Contact;
