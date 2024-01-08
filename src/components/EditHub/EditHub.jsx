import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './EditHub.scss';
import { Form, Input, TextArea } from 'semantic-ui-react';
import {
  changeEdithubDescription,
  changeEdithubEmail,
  changeEdithubFirstname,
  changeEdithubLastname,
  changeEdithubPassword,
  changeEdithubPhoneNumber,
  changeEdithubUsername,
  saveEdithubChanges,
  changeEdithubAvatar,
  changeEdithubBanner,
  saveEdithubAvatar,
  saveEdithubBanner,
} from '../../actions/edithub';
import { clearCookie } from '../../actions/login';
// import { changeFormData, changeUploadedImage } from '../../actions/uploadImage';

const EditHub = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameValue = useSelector((state) => state.edithub.username);
  const passwordValue = useSelector((state) => state.edithub.password);
  const emailValue = useSelector((state) => state.edithub.email);
  const phoneNumberValue = useSelector((state) => state.edithub.phoneNumber);
  const firstnameValue = useSelector((state) => state.edithub.firstname);
  const lastnameValue = useSelector((state) => state.edithub.lastname);
  const descriptionValue = useSelector((state) => state.edithub.description);

  return (
    <div className="edithub__container">
      <h2 className="edithub__title__section">Modifier mon profil</h2>
      <Form
        className="edithub__form"
        onSubmit={() => {
          dispatch(saveEdithubChanges());
        }}
      >
        <Form.Field
          required="require"
          control={Input}
          label="Pseudo"
          value={usernameValue}
          onChange={(event, data) => {
            dispatch(changeEdithubUsername(data.value));
          }}
          type="text"
          placeholder="LilDinguo"
        />

        <Form.Group widths="equal">
          <Form.Field
            required="require"
            control={Input}
            label="Email"
            value={emailValue}
            onChange={(event, data) => {
              dispatch(changeEdithubEmail(data.value));
            }}
            type="email"
            placeholder="joe@schmoe.com"
          />
          <Form.Field
            control={Input}
            required="require"
            label="Téléphone"
            type="number"
            value={phoneNumberValue}
            onChange={(event, data) => {
              dispatch(changeEdithubPhoneNumber(data.value));
            }}
            placeholder="01010101"
          />
          <Form.Field
            control={Input}
            required="require"
            label="Mot de passe"
            min="8"
            type="password"
            value={passwordValue}
            onChange={(event, data) => {
              dispatch(changeEdithubPassword(data.value));
            }}
            placeholder=""
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required="require"
            control={Input}
            value={firstnameValue}
            onChange={(event, data) => {
              dispatch(changeEdithubFirstname(data.value));
            }}
            label="Prénom"
            placeholder="Jean"
          />
          <Form.Field
            control={Input}
            required="require"
            value={lastnameValue}
            onChange={(event, data) => {
              dispatch(changeEdithubLastname(data.value));
            }}
            label="Nom"
            placeholder="Dubois"
          />
        </Form.Group>
        <Form.Field />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          value={descriptionValue}
          onChange={(event, data) => {
            dispatch(changeEdithubDescription(data.value));
          }}
          label="Description"
          placeholder="Description..."
        />
        <Form.Button className="edithub__confirm__button" type="submit">
          Confirmer
        </Form.Button>
      </Form>
      <Form
        className="edithub__form"
        onSubmit={() => {
          dispatch(saveEdithubAvatar());
        }}
      >
        <Form.Field>
          <label htmlFor="upload-photo">Avatar :</label>
          <input
            type="file"
            id="upload-photo"
            className="add__product__piture__button"
            onChange={(event) => {
              const file = event.target.files[0];
              const formData = new FormData();
              formData.append('image', file);
              console.log(formData.get('image'));
              dispatch(changeEdithubAvatar(formData.get('image')));
            }}
          />
        </Form.Field>
        <Form.Button className="edithub__confirm__button" type="submit">
          Confirmer
        </Form.Button>
      </Form>
      <Form
        className="edithub__form"
        onSubmit={() => {
          dispatch(saveEdithubBanner());
        }}
      >
        <Form.Field>
          <label htmlFor="upload-photo">Bannière :</label>
          <input
            type="file"
            id="upload-photo2"
            className="add__product__piture__button"
            onChange={(event) => {
              const fileBis = event.target.files[0];
              const formDataBis = new FormData();
              formDataBis.append('image', fileBis);
              console.log(formDataBis.get('image'));
              dispatch(changeEdithubBanner(formDataBis.get('image')));
            }}
          />
        </Form.Field>
        <Form.Button className="edithub__confirm__button" type="submit">
          Confirmer
        </Form.Button>
      </Form>
    </div>
  );
};
export default EditHub;
