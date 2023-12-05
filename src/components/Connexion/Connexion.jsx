import './Connexion.scss';
import React from 'react';

import { Link } from 'react-router-dom';

const Connexion = () => {
  return (
    <div className="connexion__container">
      <h1 className="title">Bonjour!</h1>
      <div className="connexion__text">
        Connectez-vous pour découvrir nos annonces.
      </div>
      <form className="connexion__form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" />
        </div>
        <button className="sign_in_button" type="submit">
          Se connecter
        </button>
        <div className="register__text">
          Envie de nous rejoindre?
          <span className="register"> Créer un compte</span>
        </div>
      </form>
    </div>
  );
};

export default Connexion;
