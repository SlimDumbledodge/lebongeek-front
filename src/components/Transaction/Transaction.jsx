/* eslint-disable react/no-unescaped-entities */

import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { buy, fetchTransaction } from '../../actions/transaction';
import { fetchAd } from '../../actions/ads';

import baseUrl from '../../assets/baseUrl';

import './Transaction.scss';

import TransactionAddress from './TransactionAddress';

const Transaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const isTransactionDone = useSelector(
    (state) => state.transaction.isTransactionDone
  );
  const ad = useSelector((state) => state.ads.oneAd);
  const adLoaded = useSelector((state) => state.ads.adLoaded);

  const { products } = ad;

  const product = ad && products && products[0];

  const counterValue = 1;
  const livraison = 3.99;

  useEffect(() => {
    dispatch(fetchAd(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (adLoaded && !ad && !products && !product) {
    return <div>Chargement de la transaction...</div>;
  }

  return (
    <div className="transaction__container">
      <h1 className="transaction__title">Ma transaction</h1>
      {!adLoaded && ad && (
        <>
          <div className="transaction__product__container">
            <img
              className="transaction__product__image"
              src={`${baseUrl}/images/product/${product?.picture}` || ''}
              alt="produit"
            />
            <div className="transaction__product__information__container">
              <p className="transaction__product__name__totalprice">
                {ad.title}
              </p>
              <p className="transaction__product__information__price">
                {(ad?.description && ad.description.substr(0, 75)) || ''}
              </p>
              <p className="transaction__product__information__price">
                {ad.price} €
              </p>
            </div>
            <input
              className="transaction__product__counter"
              type="number"
              value={counterValue}
              readOnly
            />
            <div className="transaction__product__footer__container">
              <p className="transaction__product__name__totalprice">
                {counterValue * ad.price} €
              </p>
            </div>
          </div>
          <form
            className="transaction__form"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(buy());
              dispatch(fetchTransaction(id));
              setTimeout(() => {
                navigate('/');
                dispatch(buy());
              }, 5000);
            }}
          >
            <TransactionAddress />
            <div className="transaction__terms__container">
              <input
                className="transaction__terms__input"
                type="checkbox"
                required
              />
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
                <p className="transaction__footer__element">
                  {counterValue * ad.price} €
                </p>
              </div>
              <div className="transaction__footer__information">
                <p className="transaction__footer__element">Livraison</p>
                <p className="transaction__footer__element">{livraison} €</p>
              </div>
            </div>
            <div className="transaction__total__container">
              <p className="transaction__total_element">Total</p>
              <p className="transaction__total_element">
                {counterValue * ad.price + livraison} €
              </p>
            </div>
            <button type="submit" className="transaction__validation__button">
              Valider ma commande
            </button>
          </form>
        </>
      )}
      {isTransactionDone && (
        <>
          <div className="transaction__popup">
            Le vendeur à reçu votre demande. Une fois la vente confirmé, la
            livraison aura lieu.{' '}
            <span> Vous allez être redirigé dans 5 secondes.</span>
          </div>
          <div className="transaction__opacity" />
        </>
      )}
    </div>
  );
};

export default Transaction;
