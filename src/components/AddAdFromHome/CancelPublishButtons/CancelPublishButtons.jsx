import './CancelPublishButtons.scss';
import { Form } from 'semantic-ui-react';

function CancelPublish() {
  return (
    <Form.Group className="add__ad__wrapper__cancel__publish__buttons">
      <Form.Button type="button" className="add__ad__cancel__button">
        Annuler
      </Form.Button>
      <Form.Button type="submit" className="add__ad__publish__button">
        Publier
      </Form.Button>
    </Form.Group>
  );
}

export default CancelPublish;
