import { Button, Image, Label } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AnnonceProduit = () => {
  const { adId } = useParams(); // Récupérer l'ID de l'annonce depuis l'URL
  const [user, setUser] = useState(null);
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  const endPoint = 'http://matthieu-le-floch.vpnuser.lan:8080/api/ads'; // endpoint pour les annonces

  useEffect(() => {
    const fetchAdAndUser = async () => {
      try {
        // Récupérer les informations de l'annonce avec l'ID de l'annonce
        const adResponse = await axios.get(`${endPoint}/${adId}`);
        setAd(adResponse.data); // Mettre à jour l'état de l'annonce

        // Récupérer les informations de l'utilisateur lié à cette annonce
        const userResponse = await axios.get(`${endPoint}/${adId}/user`);
        setUser(userResponse.data); // Mise à jour l'état de l'utilisateur

        setLoading(false);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des informations : ',
          error
        );
        setLoading(false);
      }
    };

    fetchAdAndUser(); // Récupérer les données
  }, [endPoint, adId]);

  return (
    <div className="ad__details__container">
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="mini"
            circular
            inline
          />

          {user && (
            <>
              <span className="ad__details__pseudo">{user.username}</span>
              <Button className="ad__details__button__profil" size="mini">
                <Link to="/hub" className="profil_link">
                  Voir le profil
                </Link>
              </Button>
              <img
                src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
                alt=""
                className="ad__details__picture"
              />
              <Label content={user.email} icon="mail" id="ad__details__mail" />
              <Label content={user.phone_number} icon="phone" />
              <section>
                <p className="ad__details__description">
                  {ad && ad.description
                    ? ad.description
                    : 'Description non disponible'}
                </p>
              </section>
              <Label id="ad__details__state__tag">Neuf</Label>
              <Button size="mini" className="ad__details__button__buy">
                Acheter
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AnnonceProduit;
