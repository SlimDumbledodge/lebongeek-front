/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import {
  changeLoginPassword,
  changeLoginUsername,
  closeLoginFailedPopup,
  closeLoginSuccessFullyPopup,
  loginUser,
} from '../../actions/login';

import './Connexion.scss';

const Connexion = () => {
  const dispatch = useDispatch();
  const usernameValue = useSelector((state) => state.login.LoginUsername);
  const passwordValue = useSelector((state) => state.login.LoginPassword);

  const isSuccessfullyLoginPopupOpen = useSelector(
    (state) => state.login.isSuccessfullyLoginPopupOpen
  );
  const isFailedLoginPopupOpen = useSelector(
    (state) => state.login.isFailedLoginPopupOpen
  );
  return (
    <>
      {isSuccessfullyLoginPopupOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__success"
            severity="success"
            onClose={() => {
              dispatch(closeLoginSuccessFullyPopup());
            }}
          >
            Connecter avec succès !
          </Alert>
        </Stack>
      )}
      {isFailedLoginPopupOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__fail"
            severity="error"
            onClose={() => {
              dispatch(closeLoginFailedPopup());
            }}
          >
            Nom d'utilisateur ou mot de passe incorrect !
          </Alert>
        </Stack>
      )}

      <div className="connexion__container">
        <h1 className="connexion__title">Bonjour !</h1>
        <p className="connexion__text">
          Connectez-vous pour découvrir nos annonces.
        </p>
        <form
          className="connexion__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(loginUser());
          }}
        >
          <div>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              className="connexion__inputs"
              value={usernameValue}
              onChange={(event) => {
                dispatch(changeLoginUsername(event.target.value));
              }}
            />
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="connexion__inputs"
              value={passwordValue}
              onChange={(event) => {
                dispatch(changeLoginPassword(event.target.value));
              }}
            />
          </div>
          <button className="connexion__sign__in__button" type="submit">
            Se connecter
          </button>

          <p className="connexion__register__text">
            Envie de nous rejoindre ?
            <Link className="connexion__register__link" to="cree_un_compte">
              Crée un compte
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Connexion;
