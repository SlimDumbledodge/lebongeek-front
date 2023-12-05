/* eslint-disable react/no-unescaped-entities */
import './AdTitle.scss';
import { Form } from 'semantic-ui-react';

function AdTitle() {
  return (
    <Form.Field>
      <label htmlFor="ad-title">Titre de l'annonce :</label>
      <input type="text" placeholder="Figurine SpiderMan" />
    </Form.Field>
  );
}

export default AdTitle;
