/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './Transaction.scss';

import TransactionAddress from './TransactionAddress';

const Transaction = () => {
  return (
    <div className="transaction__container">
      <h1 className="transaction__title">Ma transaction</h1>
      <div className="transaction__product__container">
        <img
          className="transaction__product__image"
          src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="produit"
        />
        <div className="transaction__product__information__container">
          <p className="transaction__product__name__totalprice">
            Nom du produit
          </p>
          <p className="transaction__product__information__price">
            Informations
          </p>
          <p className="transaction__product__information__price">6€</p>
        </div>
        <input className="transaction__product__counter" type="number" />
        <div className="transaction__product__footer__container">
          <p className="transaction__product__name__totalprice">12€</p>
          <FontAwesomeIcon
            className="transaction__product__trash"
            icon={faTrashCan}
          />
        </div>
      </div>
      <TransactionAddress />
      <div className="transaction__terms__container">
        <input className="transaction__terms__input" type="checkbox" />
        <p className="transaction__terms__text">
          J'accepte les{' '}
          <span className="transaction__terms__span">
            conditions générales de vente
          </span>
        </p>
      </div>
      <div className="transaction__footer__container">
        <div className="transaction__footer__information">
          <p className="transaction__footer__element">Produits</p>
          <p className="transaction__footer__element">12€</p>
        </div>
        <div className="transaction__footer__information">
          <p className="transaction__footer__element">Livraison</p>
          <p className="transaction__footer__element">3,99€</p>
        </div>
      </div>
      <div className="transaction__total__container">
        <p className="transaction__total_element">Total</p>
        <p className="transaction__total_element">15,99€</p>
      </div>
      <button type="button" className="transaction__validation__button">
        Valider ma commande
      </button>
    </div>
  );
};

export default Transaction;
