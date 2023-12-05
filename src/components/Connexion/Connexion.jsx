import './Connexion.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Connexion = () => {
  return (
    <div className="connexion__container">
      <h1 className="connexion__title">Bonjour !</h1>
      <p className="connexion__text">
        Connectez-vous pour découvrir nos annonces.
      </p>
      <form className="connexion__form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" className="connexion__inputs" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="connexion__inputs" />
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
  );
};
export default Connexion;
