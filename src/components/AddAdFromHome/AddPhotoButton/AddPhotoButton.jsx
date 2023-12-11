import './AddPhotoButton.scss';
import { Form } from 'semantic-ui-react';

const AddPhotoButton = () => {
  return (
    <Form.Button className="add__ad__button__file" type="file" label="Photos :">
      Parcourir
    </Form.Button>
  );
};

export default AddPhotoButton;
