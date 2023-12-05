import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './Register.scss';
import {
  changeInputUsername,
  changeInputEmail,
  changeInputPassword,
  changeInputFirstname,
  changeInputLastname,
  changeInputPhone,
  createUser,
  closeCreateUserSuccessfullyPopUp,
  closeCreateUserFailedPopUp,
} from '../../actions/user';

const Register = () => {
  const dispatch = useDispatch();
  const usernameValue = useSelector((state) => state.user.username);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const firstnameValue = useSelector((state) => state.user.firstname);
  const lastnameValue = useSelector((state) => state.user.lastname);
  const phoneValue = useSelector((state) => state.user.phone);
  const isCreateUserSuccessfullyPopUpOpen = useSelector(
    (state) => state.user.isCreateUserSuccessfullyPopUpOpen
  );
  const isCreateUserFailedPopUpOpen = useSelector(
    (state) => state.user.isCreateUserFailedPopUpOpen
  );

  return (
    <>
      {isCreateUserSuccessfullyPopUpOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__success"
            severity="success"
            onClose={() => {
              dispatch(closeCreateUserSuccessfullyPopUp());
            }}
          >
            Utilisateur crée avec succès !
          </Alert>
        </Stack>
      )}
      {isCreateUserFailedPopUpOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__fail"
            severity="error"
            onClose={() => {
              dispatch(closeCreateUserFailedPopUp());
            }}
          >
            La création du compte à échoué !
          </Alert>
        </Stack>
      )}
      <div className="register__container">
        <h1 className="register__title">Bonjour !</h1>
        <p className="register__text">
          Crée un compte pour découvrir nos annonces.
        </p>
        <form
          className="register__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(createUser());
          }}
        >
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              className="register__inputs"
              value={usernameValue}
              onChange={(event) => {
                dispatch(changeInputUsername(event.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="register__inputs"
              value={emailValue}
              onChange={(event) => {
                dispatch(changeInputEmail(event.target.value));
              }}
            />
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="register__inputs"
              value={passwordValue}
              onChange={(event) => {
                dispatch(changeInputPassword(event.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              className="register__inputs"
              value={firstnameValue}
              onChange={(event) => {
                dispatch(changeInputFirstname(event.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="register__inputs"
              value={lastnameValue}
              onChange={(event) => {
                dispatch(changeInputLastname(event.target.value));
              }}
            />
          </div>

          <div>
            <label htmlFor="tel">Numéro de Tél.</label>
            <input
              type="text"
              className="register__inputs"
              value={phoneValue}
              onChange={(event) => {
                dispatch(changeInputPhone(event.target.value));
              }}
            />
          </div>

          <button className="register__sign__in__button" type="submit">
            Crée mon compte
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
