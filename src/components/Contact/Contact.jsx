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
            className="contact__input"
            value={usernameValue}
            onChange={(event) => {
              dispatch(changeRegisterUsername(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="objet">Objet</label>
          <input
            type="text"
            className="contact__input"
            value={emailValue}
            onChange={(event) => {
              dispatch(changeRegisterEmail(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            className="contact__input"
            value={passwordValue}
            onChange={(event) => {
              dispatch(changeRegisterPassword(event.target.value));
            }}
          />
        </div>
        <button className="contact__form__button" type="submit">
          Envoyer mon message
        </button>
      </form>
    </div>
  );
};

export default Contact;
