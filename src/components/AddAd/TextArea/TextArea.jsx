import './TextArea.scss';
import { Form } from 'semantic-ui-react';

function TextArea() {
  return (
    <Form.TextArea
      label="Description :"
      placeholder="Entrez une description du produit..."
    />
  );
}

export default TextArea;
