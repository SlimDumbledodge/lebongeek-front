import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './Register.scss';
import {
  changeRegisterUsername,
  changeRegisterEmail,
  changeRegisterPassword,
  changeRegisterFirstname,
  changeRegisterLastname,
  changeRegisterPhone,
  createRegisterUser,
  closeRegisterSuccessfullyPopup,
  closeRegisterFailedPopup,
  clearRegisterInputs,
} from '../../actions/register';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const phoneRef = useRef(null);

  const usernameValue = useSelector((state) => state.register.registerUsername);
  const emailValue = useSelector((state) => state.register.registerEmail);
  const passwordValue = useSelector((state) => state.register.registerPassword);
  const firstnameValue = useSelector(
    (state) => state.register.registerFirstname
  );
  const lastnameValue = useSelector((state) => state.register.RegisterLastname);
  const phoneValue = useSelector((state) => state.register.RegisterPhone);
  const isRegiterSuccessfullyPopupOpen = useSelector(
    (state) => state.register.isRegisterSuccessfullyPopupOpen
  );
  const isRegisterFailedPopupOpen = useSelector(
    (state) => state.register.isRegisterFailedPopupOpen
  );

  useEffect(() => {
    if (isRegiterSuccessfullyPopupOpen) {
      navigate('/connexion');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegiterSuccessfullyPopupOpen]);

  return (
    <>
      {isRegiterSuccessfullyPopupOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__success"
            severity="success"
            onClose={() => {
              dispatch(closeRegisterSuccessfullyPopup());
            }}
          >
            Utilisateur crée avec succès !
          </Alert>
        </Stack>
      )}
      {isRegisterFailedPopupOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__fail"
            severity="error"
            onClose={() => {
              dispatch(closeRegisterFailedPopup());
            }}
          >
            La création du compte à échoué !
          </Alert>
        </Stack>
      )}
      <div className="register__container">
        <h1 className="register__title">Bonjour !</h1>
        <p className="register__text">
          Créez un compte pour découvrir nos annonces.
        </p>
        <form
          className="register__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(createRegisterUser());
            dispatch(clearRegisterInputs());
          }}
        >
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              ref={usernameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
              type="password"
              className="register__inputs"
              value={passwordValue}
              onChange={(event) => {
                dispatch(changeRegisterPassword(event.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input
              ref={firstnameRef}
              type="text"
              className="register__inputs"
              value={firstnameValue}
              onChange={(event) => {
                dispatch(changeRegisterFirstname(event.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              ref={lastnameRef}
              type="text"
              className="register__inputs"
              value={lastnameValue}
              onChange={(event) => {
                dispatch(changeRegisterLastname(event.target.value));
              }}
            />
          </div>

          <div>
            <label htmlFor="tel">Numéro de Tél.</label>
            <input
              ref={phoneRef}
              type="text"
              className="register__inputs"
              value={phoneValue}
              onChange={(event) => {
                dispatch(changeRegisterPhone(event.target.value));
              }}
            />
          </div>

          <button className="register__sign__in__button" type="submit">
            Créer mon compte
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
