/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import './Faq.scss';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq__container">
      <h1 className="faq__title">F.A.Q</h1>
      <h2 className="faq__little__title">Questions générales</h2>
      <div className="faq__senteces__container">
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            onClick={() => {
              setActiveIndex(0);
            }}
          >
            <Icon name="dropdown" />
            Qu'est-ce que Le Bon Geek ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Le Bon Geek est une plateforme en ligne dédiée à la vente
              d'articles geeks d'occasion entre particuliers. Nous offrons un
              espace où les passionnés de produits geek peuvent acheter et
              vendre des articles tels que des jeux vidéo, des figurines, des
              produits high-tech, etc, ainsi que gérer leurs collections via un
              système de gestion d’inventaire.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            onClick={() => {
              setActiveIndex(1);
            }}
          >
            <Icon name="dropdown" />
            Quels types d'articles puis-je trouver sur Le Bon Geek ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Vous pouvez trouver une large variété d'articles tels que des
              figurines, des jeux de plateau, des comics, des jeux vidéo, des
              produits dérivés, des accessoires de collection, des jeux de
              plateau et bien plus encore.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            onClick={() => {
              setActiveIndex(2);
            }}
          >
            <Icon name="dropdown" />
            Comment puis-je vendre Le Bon Geek ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Pour vendre sur Le Bon Geek, vous devez vous inscrire gratuitement
              sur la plateforme. Une fois inscrit, vous pourrez publier des
              annonces décrivant vos articles avec des détails précis, des
              photos, un état et un prix. Les acheteurs intéressés pourront les
              acquérir d’un simple clic!
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
      <h2 className="faq__little__title">
        Gestion de la Collection et du Profil Utilisateur (HUB)
      </h2>
      <div className="faq__senteces__container">
        <Accordion>
          <Accordion.Title
            active={activeIndex === 3}
            onClick={() => {
              setActiveIndex(3);
            }}
          >
            <Icon name="dropdown" />
            Qu'est-ce que le HUB sur Le Bon Geek?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Le HUB est votre profil utilisateur personnalisé sur Le Bon Geek,
              où vous pouvez via un système d’inventaire gérer votre collection
              d'articles. C'est un espace centralisé où vous pouvez répertorier,
              organiser et suivre et mettre en vente de façon instantanée les
              articles que vous possédez.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 4}
            onClick={() => {
              setActiveIndex(4);
            }}
          >
            <Icon name="dropdown" />
            Comment puis-je modifier mon profil (HUB) sur Le Bon Geek ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
              Pour modifier votre profil, connectez-vous à votre compte et
              rendez-vous dans votre HUB. Vous pourrez ensuite changer votre
              description et votre avatar, via le bouton “modifier mon profil”.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
      <h2 className="faq__little__title">Ventes et Achats</h2>
      <div className="faq__senteces__container">
        <Accordion>
          <Accordion.Title
            active={activeIndex === 5}
            onClick={() => {
              setActiveIndex(5);
            }}
          >
            <Icon name="dropdown" />
            Puis-je négocier le prix avec le vendeur ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
              Oui, les négociations de prix entre l'acheteur et le vendeur sont
              tout à fait possibles.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 6}
            onClick={() => {
              setActiveIndex(6);
            }}
          >
            <Icon name="dropdown" />
            Comment puis-je améliorer la visibilité de mon annonce sur Le Bon
            Geek?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              Pour augmenter la visibilité de votre annonce, assurez-vous de
              fournir une description détaillée, des photos de qualité et un
              prix compétitif. Nous ne proposons pas pour le moment d’options
              payantes pour booster vos annonces.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
