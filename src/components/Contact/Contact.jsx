/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';

import {
  changeObjectValue,
  changeContentValue,
  clearMessageInputs,
  sendMessage,
} from '../../actions/contact';

import './Contact.scss';

const Contact = () => {
  const dispatch = useDispatch();

  const object = useSelector((state) => state.contact.inputObject);
  const content = useSelector((state) => state.contact.inputContent);
  const isMessageSent = useSelector((state) => state.contact.isMessageSent);

  return (
    <div className="contact__container">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__message__container">
        {isMessageSent && (
          <p className="contact__message__right">Votre message a été envoyé!</p>
        )}
        {isMessageSent === false && (
          <p className="contact__message__wrong">
            Une erreur à eu lieu lors de l'envoi
          </p>
        )}
      </div>
      <form
        className="contact__form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(sendMessage());
          dispatch(clearMessageInputs());
        }}
      >
        <div className="input__container">
          <label htmlFor="objet">Objet</label>
          <input
            type="text"
            className="contact__input"
            value={object}
            onChange={(event) => {
              dispatch(changeObjectValue(event.target.value));
            }}
          />
        </div>
        <div className="input__container">
          <label htmlFor="content">Message</label>
          <input
            type="text"
            className="contact__input"
            value={content}
            onChange={(event) => {
              dispatch(changeContentValue(event.target.value));
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
