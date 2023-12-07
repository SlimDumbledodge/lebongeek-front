import './Content.scss';
import React from 'react';
import { Button, Image, Label } from 'semantic-ui-react';

import { useEffect, useState } from 'react';


import { Link } from 'react-router-dom';

const Content = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [adDetails, setAdDetails] = useState(null);

  // récupérer les détails de l'utilisateur
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          'http://matthieu-le-floch.vpnuser.lan:8080/api/8/users'
        );
        if (response.ok) {
          const userData = await response.json();
          setUserDetails(userData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, []);

  // récupérer les détails de l'annonce une fois que les détails de l'utilisateur sont récupérés
  useEffect(() => {
    if (userDetails && userDetails.userId) {
      const fetchAdDetails = async () => {
        try {
          const adResponse = await fetch(
            `http://matthieu-le-floch.vpnuser.lan:8080/api/12/products?userId=${userDetails.userId}`
          );
          if (adResponse.ok) {
            const adData = await adResponse.json();
            setAdDetails(adData);
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchAdDetails();
    }
  }, [userDetails]);

  return (
    <div className="ad__details__container">
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="mini"
        circular
        inline
      />

      {userDetails && (
        <>
          <span className="ad__details__pseudo">{userDetails.username}</span>
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
          <Label
            content={userDetails.email}
            icon="mail"
            id="ad__details__mail"
          />
          <Label content={userDetails.phone_number} icon="phone" />
          <section>
            <p className="ad__details__description">
              {adDetails && adDetails.description
                ? adDetails.description
                : 'Description non disponible'}
            </p>
          </section>
          <Label id="ad__details__state__tag">Neuf</Label>
          <Button size="mini" className="ad__details__button__buy">
            Acheter
          </Button>
        </>
      )}

      <span className="ad__details__pseudo">LilDinguo99</span>
      <Button className="ad__details__button__profil" size="mini">
        Voir le profil
      </Button>
      <img
        src="https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/red-blue-yellow-smoke-abstract-header-800x200.jpg"
        alt=""
        className="ad__details__picture"
      />
      <Label
        content="Mail : sdsqfqsfsd@gmail.com"
        icon="mail"
        id="ad__details__mail"
      />
      <Label content="Tél. : 01 01 01 01 01" icon="phone" />
      <section>
        <p className="ad__details__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          rerum natus, quae ipsum unde dolorum reprehenderit voluptates, in
          distinctio dicta atque tempora, eum porro excepturi harum minus
          architecto repellendus impedit.
        </p>
      </section>
      <Label id="ad__details__state__tag">Neuf</Label>
      <Button size="mini" className="ad__details__button__buy">
        <Link className="transaction__page__link" to="/transaction">
          Acheter
        </Link>
      </Button>

    </div>
  );
};

export default Content;
