import './Title.scss';
import { useEffect, useState } from 'react';

const Title = () => {
  // affichage dynamique du titre de l'annonce
  const [adTitle, setAdTitle] = useState('');

  // requête au chargement du composant
  useEffect(() => {
    // fonction asynchrone pour récupérer les données de l'annonce
    const fetchAdDetails = async () => {
      try {
        // requête GET pour récupérer les données de l'annonce
        const response = await fetch(
          'http://matthieu-le-floch.vpnuser.lan:8080/api/12/products'
        );
        if (response.ok) {
          // récupérer les données de la réponse
          const adData = await response.json();
          // mettre à jour le state avec le titre de l'annonce
          if (adData && adData.title) {
            setAdTitle(adData.title);
          }
        }
      } catch (error) {
        console.error(error); // afficher l'erreur dans la console
      }
    };

    // appel de la fonction pour récupérer les détails de l'annonce
    fetchAdDetails();
  }, []); //  tableau vide []  cette fonction s'exécutera une seule fois au chargement du composant

  return <h2 className="ad__details__title">{adTitle}</h2>;
};

export default Title;
