import { Checkbox, Form } from 'semantic-ui-react';
import './Checkboxs.scss';

const Checkboxs = () => {
  return (
    <Form.Field>
      <Checkbox label="Afficher mon mail" className="add__ad__checkbox" />
      <Checkbox
        label="Afficher mon numéro de téléphone"
        className="add__ad__checkbox"
      />
      <Checkbox
        label="Ne pas afficher mes coordonnées"
        className="add__ad__checkbox"
      />
    </Form.Field>
  );
};

export default Checkboxs;
