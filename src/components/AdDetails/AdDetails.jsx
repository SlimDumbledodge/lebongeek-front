/* eslint-disable prettier/prettier */

import { useEffect } from 'react';
import { Button, Image, Label } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { fetchAd } from '../../actions/ads';

import './AdDetails.scss';

const AdDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const ad = useSelector((state) => state.ads.oneAd);
  const adLoaded = useSelector((state) => state.ads.adLoaded);

  const { user } = ad;

  const statesOptions = [
    { key: 1, text: 'Neuf', value: 1 },
    { key: 2, text: 'Très bon', value: 2 },
    { key: 3, text: 'Bon', value: 3 },
    { key: 4, text: 'Assez bon', value: 4 },
    { key: 5, text: 'Mauvais', value: 5 },
  ];

  const currentState = statesOptions.find((state) => ad.state === state.value);

  useEffect(() => {
    dispatch(fetchAd(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return !adLoaded && ad && user && currentState ? (
      ad.products.map((product) => (
        <div key={ad.id} className="ad__details__container">
          <h2 className="ad__details__title">{product.title}</h2>
          <Image src={user.avatar} size="mini" circular inline />
          <span className="ad__details__pseudo">{user.username}</span>
          <Button className="ad__details__button__profil" size="mini">
            <Link to={`/hub/${user.id}`} className="profil_link">
              Voir le profil
            </Link>
          </Button>
          <img src={product.picture} alt="" className="ad__details__picture" />
          <Label content={user.email} icon="mail" id="ad__details__mail" />
          <Label content={user.phone_number} icon="phone" />
          <section>
            <p className="ad__details__description">
              {ad.description === null
                ? 'Description non disponible'
                : ad.description}
            </p>
          </section>
          <Label id="ad__details__state__tag">{currentState.text}</Label>
          <Link to={`/transaction/${ad.id}`}>
            <Button size="mini" className="ad__details__button__buy">
              Acheter
            </Button>
          </Link>
        </div>
      ))
    ) : 'Chargement...';
};

export default AdDetails;
