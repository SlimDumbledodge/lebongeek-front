/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Cookies from 'js-cookie';

import { Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';
import Description from './Description/Description';
import Inventory from './Inventory/Inventory';
import './Hub.scss';

import baseUrl from '../../assets/baseUrl';
import Loader from '../Loader/Loader';
import { deleteAccount } from '../../actions/deleteAccount';
import { clearCookie } from '../../actions/login';
import {
  closeFailedMessage,
  closeSuccessFullMessage,
} from '../../actions/popupMessages';

const Hub = () => {
  const currentUser = Cookies.get('user');
  const isSuccessfullMessageOpen = useSelector(
    (state) => state.popupMessages.isSuccessfullMessageOpen
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;
  const isUserDataLoaded = useSelector((state) => state.hub.isUserDataLoaded);
  const isUserLogged = useSelector((state) => state.login.isCookieFilled);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!isUserDataLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Banner banner={`${baseUrl}/images/user/banner/${parsedUser.banner}`} />

      <Description
        username={parsedUser.username}
        avatar={`${baseUrl}/images/user/avatar/${parsedUser.avatar}`}
        description={parsedUser.description}
      />
      <div className="hub__wrapper__buttons">
        <Link to="/modifier-mon-profil">
          <Button className="hub__buttons" id="hub__edit__hub">
            Modifier mon profil
          </Button>
        </Link>
        <Link to="/ajouter-un-produit">
          <Button className="hub__buttons" id="hub__add__product">
            Ajouter un produit à l'inventaire
          </Button>
        </Link>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Vous allez supprimer votre compte !
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Si vous confirmez, toutes vos données seront supprimées. Êtes-vous
            sur de vouloir supprimer votre compte ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Annuler
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteAccount());

              dispatch(clearCookie());
            }}
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

      {isSuccessfullMessageOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__success"
            severity="success"
            onClose={() => {
              dispatch(closeSuccessFullMessage());
            }}
          >
            La création de l'annonce à réussi
          </Alert>
        </Stack>
      )}
      <Inventory product={parsedUser.product} />
      <div id="hub__delete__account__container">
        <button
          type="button"
          id="hub__delete__account"
          onClick={handleClickOpen}
        >
          Supprimer mon profil
        </button>
      </div>
    </>
  );
};

export default Hub;
