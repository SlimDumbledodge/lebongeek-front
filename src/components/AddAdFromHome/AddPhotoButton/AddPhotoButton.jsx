import React from 'react';
import { Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { uploadImageRequest } from '../../../actions/uploadImage';

const AddPhotoButton = () => {
  const dispatch = useDispatch();
  const formData = new FormData();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    console.log(formData.append('image', file));

    // dispatch(uploadImageRequest(formData));
  };

  console.log(formData);

  return (
    <Form>
      <Form.Field>
        <label htmlFor="upload-photo">Parcourir :</label>
        <input
          type="file"
          id="upload-photo"
          className="add__ad__button__file"
          onChange={handleFileUpload}
        />
      </Form.Field>
    </Form>
  );
};

export default AddPhotoButton;
