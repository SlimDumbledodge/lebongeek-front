import './Content.scss';
import React from 'react';
import { Button, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="ad__details__container">
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="mini"
        circular
        inline
      />
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
