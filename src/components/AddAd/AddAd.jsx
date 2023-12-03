/* eslint-disable react/no-unescaped-entities */
import { Button, TextArea, Checkbox, Form } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import './AddAd.scss';

const AddAd = () => {
  const stateOptions = [
    { key: 1, text: 'Neuf', value: 'neuf' },
    { key: 2, text: 'Très bon', value: 'tres-bon' },
    { key: 3, text: 'Bon', value: 'bon' },
    { key: 4, text: 'Assez bon', value: 'assez-bon' },
    { key: 5, text: 'Mauvais', value: 'mauvais' },
  ];
  return (
    <>
      <h2 className="add__ad__page__title">Déposer une annonce</h2>
      <section className="add__ad__container">
        <Form>
          <Form.Field>
            <label htmlFor="ad-title">Titre de l'annonce :</label>
            <input type="text" placeholder="Figurine SpiderMan" />
          </Form.Field>
          <Form.TextArea
            label="Description :"
            placeholder="Entrez une description du produit..."
          />
          <Form.Button className="button__file" type="file" label="Photos :">
            Parcourir
          </Form.Button>
          <Form.Select
            label="État :"
            placeholder="Neuf"
            options={stateOptions}
          />

          <Form.Field>
            <label htmlFor="ad-title">Catégorie :</label>
            <input type="text" placeholder="Figurine" />
          </Form.Field>

          <Form.Field>
            <Checkbox label="Afficher mon mail" className="checkbox__add__ad" />
            <Checkbox
              label="Afficher mon numéro de téléphone"
              className="checkbox__add__ad"
            />
            <Checkbox
              label="Ne pas afficher mes coordonnées"
              className="checkbox__add__ad"
            />
          </Form.Field>
          <Form.Group className="wrapper__cancel__publish__buttons">
            <Form.Button type="button">Annuler</Form.Button>
            <Form.Button type="submit">Publier</Form.Button>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default AddAd;
