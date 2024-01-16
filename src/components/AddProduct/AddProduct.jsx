/* eslint-disable react/no-unescaped-entities */
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import './AddProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductSendRequest,
  changeAddProductCategory,
  changeAddProductCategoryValue,
  changeAddProductImage,
  changeAddProductSerialNumber,
  changeAddProductTitle,
  changeAddProductYear,
} from '../../actions/addProduct';
import {
  closeFailedMessage,
  closeSuccessFullMessage,
} from '../../actions/popupMessages';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productTitleValue = useSelector(
    (state) => state.addProduct.productTitle
  );
  const productYearValue = useSelector((state) => state.addProduct.productYear);
  const productSerialNumberValue = useSelector(
    (state) => state.addProduct.productSerialNumber
  );

  const categories = useSelector((state) => state.category.listCategories);
  const categoriesOptions = categories.map((category) => ({
    key: category.id,
    text: category.name,
    value: category.name.toLowerCase(),
  }));

  const addAdCategoryValue = useSelector(
    (state) => state.addProduct.productCategoryValue
  );

  const isSuccessfullMessageOpen = useSelector(
    (state) => state.popupMessages.isSuccessfullMessageOpen
  );
  const isFailedMessageOpen = useSelector(
    (state) => state.popupMessages.isFailedMessageOpen
  );

  return (
    <div className="add__product__container">
      {isSuccessfullMessageOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__success"
            severity="success"
            onClose={() => {
              dispatch(closeSuccessFullMessage());
            }}
          >
            Produit créer avec succès !
          </Alert>
        </Stack>
      )}
      {isFailedMessageOpen && (
        <Stack className="register__popup__container">
          <Alert
            id="register__popup__message__fail"
            severity="error"
            onClose={() => {
              dispatch(closeFailedMessage());
            }}
          >
            Erreur sur la création du produit
          </Alert>
        </Stack>
      )}
      <h2 className="add__product__title__section">
        Ajouter un produit à l'inventaire
      </h2>
      <Form
        className="add__product__form"
        onSubmit={() => {
          dispatch(addProductSendRequest());
        }}
      >
        <Form.Field
          required="require"
          control={Input}
          label="Nom du produit"
          type="text"
          placeholder="Figurine SpiderMan - 1988"
          value={productTitleValue}
          onChange={(event, data) => {
            dispatch(changeAddProductTitle(data.value));
          }}
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Année de sortie :"
            type="number"
            min="1900"
            max="2024"
            placeholder="1988"
            value={productYearValue}
            onChange={(event, data) => {
              dispatch(changeAddProductYear(data.value));
            }}
          />
          <Form.Field
            control={Input}
            label="Numéro de série :"
            type="number"
            value={productSerialNumberValue}
            onChange={(event, data) => {
              dispatch(changeAddProductSerialNumber(data.value));
            }}
          />
        </Form.Group>
        <Form.Select
          required="require"
          label="Catégorie :"
          placeholder="Figurine"
          options={categoriesOptions}
          value={addAdCategoryValue}
          onChange={(event, data) => {
            dispatch(changeAddProductCategoryValue(data.value));
            const currentCategory = categoriesOptions.find(
              (category) => data.value === category.value
            );
            dispatch(changeAddProductCategory(currentCategory.key));
          }}
        />

        <Form.Field>
          <label htmlFor="upload-photo">Photo :</label>
          <input
            type="file"
            id="upload-photo"
            className="add__product__piture__button"
            onChange={(event) => {
              const file = event.target.files[0];
              const formData = new FormData();
              formData.append('image', file);
              console.log(formData.get('image'));
              dispatch(changeAddProductImage(formData.get('image')));
            }}
          />
        </Form.Field>
        <Form.Group className="add__ad__wrapper__cancel__publish__buttons">
          <Form.Button
            id="add__ad__cancel__button"
            onClick={() => {
              navigate('/hub');
            }}
          >
            Annuler
          </Form.Button>
          <Form.Button className="edithub__confirm__button" type="submit">
            Confirmer
          </Form.Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddProduct;
