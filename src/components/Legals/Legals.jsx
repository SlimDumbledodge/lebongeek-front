/* eslint-disable react/no-unescaped-entities */
import './Legals.scss';

const Legals = () => {
  return (
    <div className="legals__container">
      <h1 className="legals__title">Mentions légales</h1>
      <div className="legals__sentences__container">
        <div className="legals__sentence">
          <p className="legals__sentences__title">Identité du Site :</p>
          <p className="legals__content">
            Le Bon Geek est exploité par GeekyTech SARL.
          </p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">Propriétaire du Site :</p>
          <p className="legals__content">GeekyTech SARL</p>
          <p className="legals__content">
            Adresse : 123 Avenue des Brocanteurs, 75000 Paris, France
          </p>
          <p className="legals__content">Téléphone : +33 01 23 45 67 89</p>
          <p className="legals__content">E-mail : contact@lebongeek.com</p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">
            Responsabilités et Conditions d'Utilisation :
          </p>
          <p className="legals__content line__height__content">
            En utilisant Le Bon Geek, les utilisateurs acceptent les conditions
            générales d'utilisation. Le Bon Geek décline toute responsabilité
            quant à l'utilisation par les utilisateurs d'images ou de créations
            protégées par le droit d'auteur sans autorisation préalable. Les
            utilisateurs assument l'entière responsabilité du contenu partagé et
            s'engagent à respecter les lois relatives aux droits d'auteur et à
            la propriété intellectuelle.
          </p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">Propriété Intellectuelle :</p>
          <p className="legals__content line__height__content">
            GeekyTech SARL détient les droits d'auteur et la propriété
            intellectuelle du contenu contenu qu’elle propose sur Le Bon Geek.
            Cependant, en ce qui concerne les contenus publiés par les
            utilisateurs, ces derniers conservent tous les droits d'auteur et la
            propriété intellectuelle sur leurs propres créations. En publiant du
            contenu sur la plateforme, les utilisateurs accordent à Le Bon Geek
            une licence non exclusive, mondiale, libre de redevance et
            transférable pour utiliser, afficher et distribuer ce contenu dans
            le cadre du fonctionnement et de la promotion de la plateforme.
          </p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">
            Protection des Données Personnelles :
          </p>
          <p className="legals__content line__height__content">
            Consultez notre Politique de Confidentialité pour plus
            d'informations sur la collecte et l'utilisation des données
            personnelles des utilisateurs ainsi que sur l'utilisation des
            cookies.
          </p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">Procédures Légales :</p>
          <p className="legals__content line__height__content">
            En cas de litige, la loi applicable est celle en vigueur en France.
            Tout litige relatif à l'utilisation de Le Bon Geek sera soumis à la
            juridiction des tribunaux compétents de Paris.
          </p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">Autres Informations :</p>
          <p className="legals__content line__height__content">
            GeekyTech SARL est enregistrée au Registre du Commerce et des
            Sociétés de Paris sous le numéro 123456789. Capital social : 50 000
            euros.
          </p>
        </div>
        <div className="legals__sentence">
          <p className="legals__sentences__title">Hébergeur du site :</p>
          <p className="legals__content">
            GeekyHost Ltd., Adresse : 456 Rue des Serveurs, 69000 Lyon, France
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legals;
