import { Button, Form, Input, Select } from 'semantic-ui-react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import './TransformProductInAd.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTransformProductInAdDescription,
  changeTransformProductInAdLocation,
  changeTransformProductInAdPrice,
  changeTransformProductInAdTitle,
  changeTransformProductInAdState,
  requestTransformProductInAd,
} from '../../actions/transformProductInAd';
import { closeSuccessFullMessage } from '../../actions/popupMessages';

const TransformProductInAd = () => {
  const dispatch = useDispatch();

  const adTitleValue = useSelector(
    (state) => state.transformProductInAd.transformProductInAdTitle
  );

  const adDescriptionValue = useSelector(
    (state) => state.transformProductInAd.transformProductInAdDescription
  );

  const adLocationValue = useSelector(
    (state) => state.transformProductInAd.transformProductInAdLocation
  );
  const adPriceValue = useSelector(
    (state) => state.transformProductInAd.transformProductInAdPrice
  );

  const adStateValue = useSelector(
    (state) => state.transformProductInAd.transformProductInAdState
  );

  const isSuccessfullMessageOpen = useSelector(
    (state) => state.popupMessages.isSuccessfullMessageOpen
  );

  const statesOptions = [
    { key: 1, text: 'Neuf', value: 1 },
    { key: 2, text: 'Très bon', value: 2 },
    { key: 3, text: 'Bon', value: 3 },
    { key: 4, text: 'Assez bon', value: 4 },
    { key: 5, text: 'Mauvais', value: 5 },
  ];

  const { id } = useParams();

  return (
    <div className="transform__product__ad__container">
      {isSuccessfullMessageOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__success"
            severity="success"
            onClose={() => {
              dispatch(closeSuccessFullMessage());
            }}
          >
            Annonce créer avec succès !
          </Alert>
        </Stack>
      )}
      <h2 className="transform__product__ad__title__section">
        Vendre mon produit
      </h2>
      <Form
        className="transform__product__ad__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(requestTransformProductInAd(id));
        }}
      >
        <Form.Field
          required="require"
          control={Input}
          label="Titre de l'annonce"
          type="text"
          placeholder="Figurine SpiderMan - 1988"
          value={adTitleValue}
          onChange={(event, data) => {
            dispatch(changeTransformProductInAdTitle(data.value));
          }}
        />

        <Form.Group widths="equal">
          <Form.Field
            required="require"
            control={Input}
            label="Ville :"
            type="text"
            placeholder="Paris"
            value={adLocationValue}
            onChange={(event, data) => {
              dispatch(changeTransformProductInAdLocation(data.value));
            }}
          />
          <Form.Field
            required="require"
            control={Input}
            label="Prix :"
            type="number"
            placeholder="30"
            value={adPriceValue}
            onChange={(event, data) => {
              dispatch(changeTransformProductInAdPrice(data.value));
            }}
          />
        </Form.Group>

        <Form.Field
          required="require"
          control={Select}
          label="État :"
          placeholder="Neuf"
          options={statesOptions}
          value={adStateValue}
          onChange={(event, data) => {
            dispatch(changeTransformProductInAdState(data.value));
          }}
        />
        <Form.TextArea
          label="Description :"
          placeholder="Entrez une description du produit..."
          value={adDescriptionValue}
          onChange={(event, data) => {
            dispatch(changeTransformProductInAdDescription(data.value));
          }}
        />

        <Button id="transform__product__ad__confirm__button" type="submit">
          Confirmer
        </Button>
      </Form>
    </div>
  );
};

export default TransformProductInAd;
