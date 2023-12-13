import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './EditHub.scss';
import { Form, Input, TextArea } from 'semantic-ui-react';
import {
  changeEdithubDescription,
  changeEdithubEmail,
  changeEdithubFirstname,
  changeEdithubLastname,
  changeEdithubPhoneNumber,
  changeEdithubUsername,
  saveEdithubChanges,
} from '../../actions/edithub';

const EditHub = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameValue = useSelector((state) => state.edithub.username);
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
          navigate('/connexion');
        }}
      >
        <Form.Field
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
            label="Téléphone"
            type="number"
            value={phoneNumberValue}
            onChange={(event, data) => {
              dispatch(changeEdithubPhoneNumber(data.value));
            }}
            placeholder="01010101"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
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
        <Form.Button id="edithub__confirm__button" type="submit">
          Confirmer
        </Form.Button>
      </Form>
    </div>
  );
};
export default EditHub;
