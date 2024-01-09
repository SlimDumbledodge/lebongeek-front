/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Cookies from 'js-cookie';
import { Button, Form, FormField, Input, Select } from 'semantic-ui-react';
import './EditAd.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeEditadTitleValue,
  changeEditadDescription,
  changeEditadState,
  changeEditadCategory,
  changeEditadCategoryValue,
  changeEditadPrice,
  changeEditadLocation,
  changeEditadYear,
  changeEditadSerialNumber,
  changeEditadImage,
  sendEditad,
  saveEditadData,
} from '../../actions/editAd';

const EditAd = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Il s'agit de l'id de l'Ad
  const navigate = useNavigate();

  const categories = useSelector((state) => state.category.listCategories);
  const categoriesOptions = categories.map((category) => ({
    key: category.id,
    text: category.name,
    value: category.name.toLowerCase(),
  }));

  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : '';

  const statesOptions = [
    { key: 1, text: 'Neuf', value: 1 },
    { key: 2, text: 'Très bon', value: 2 },
    { key: 3, text: 'Bon', value: 3 },
    { key: 4, text: 'Assez bon', value: 4 },
    { key: 5, text: 'Mauvais', value: 5 },
  ];

  const currentProduct =
    parsedUser &&
    parsedUser.product.find((product) => product.ad.id === id * 1);
  const currentAd = currentProduct && currentProduct.ad;

  const idProduct = currentProduct.id; // Il s'agit de l'id du Product

  const editAdTitle = useSelector((state) => state.editAd.editAdTitle);
  const editAdDescription = useSelector(
    (state) => state.editAd.editAdDescription
  );
  const editAdState = useSelector((state) => state.editAd.editAdState);
  const editAdCategoryValue = useSelector(
    (state) => state.editAd.editAdCategoryValue
  );
  const editAdPrice = useSelector((state) => state.editAd.editAdPrice);
  const editAdLocation = useSelector((state) => state.editAd.editAdLocation);
  const editAdYear = useSelector((state) => state.editAd.editAdYear);
  const editAdSerialNumber = useSelector(
    (state) => state.editAd.editAdSerialNumber
  );

  useEffect(() => {
    if (currentAd) {
      dispatch(saveEditadData(currentProduct, currentAd));
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <h2 className="add__ad__page__title">Modifier mon annonce</h2>
      <section className="add__ad__container">
        <Form
          onSubmit={() => {
            dispatch(sendEditad(idProduct, id));
          }}
        >
          <FormField
            required="require"
            id="form-input-control-error-email"
            control={Input}
            label="Titre de l'annonce"
            placeholder="Figurine SpiderMan"
            value={editAdTitle}
            onChange={(event, data) => {
              dispatch(changeEditadTitleValue(data.value));
            }}
          />
          <Form.Field>
            <label htmlFor="upload-photo">Photo : </label>
            <input
              type="file"
              id="upload-photo"
              className="add__ad__button__file"
              onChange={(event) => {
                const file = event.target.files[0];
                const formData = new FormData();
                formData.append('image', file);
                console.log(formData.get('image'));
                dispatch(changeEditadImage(formData.get('image')));
              }}
            />
          </Form.Field>
          <Form.TextArea
            label="Description :"
            required="require"
            placeholder="Entrez une description du produit..."
            value={editAdDescription}
            onChange={(event, data) => {
              dispatch(changeEditadDescription(data.value));
            }}
          />
          <Form.Group widths="equal">
            <Form.Input
              required="require"
              type="number"
              label="Prix :"
              placeholder="30"
              value={editAdPrice}
              onChange={(event, data) => {
                dispatch(changeEditadPrice(data.value));
              }}
            />
            <Form.Input
              label="Ville :"
              required="require"
              placeholder="Paris"
              value={editAdLocation}
              onChange={(event, data) => {
                dispatch(changeEditadLocation(data.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Année de sortie :"
              placeholder="1988"
              type="number"
              value={editAdYear}
              onChange={(event, data) => {
                dispatch(changeEditadYear(data.value));
              }}
            />
            <Form.Input
              label="Numéro de série :"
              placeholder="048940516"
              type="number"
              value={editAdSerialNumber}
              onChange={(event, data) => {
                dispatch(changeEditadSerialNumber(data.value));
              }}
            />
          </Form.Group>
          <Form.Field
            control={Select}
            required="require"
            label="État :"
            placeholder="Neuf"
            options={statesOptions}
            value={editAdState}
            onChange={(event, data) => {
              dispatch(changeEditadState(data.value));
            }}
          />
          <Form.Field
            control={Select}
            label="Catégorie :"
            required="require"
            placeholder="Figurine"
            options={categoriesOptions}
            value={editAdCategoryValue}
            onChange={(event, data) => {
              dispatch(changeEditadCategoryValue(data.value));
              const currentCategory = categoriesOptions.find(
                (category) => data.value === category.value
              );
              dispatch(changeEditadCategory(currentCategory.key));
            }}
          />
          <Form.Group className="add__ad__wrapper__cancel__publish__buttons">
            <Form.Button type="button" className="add__ad__cancel__button">
              Annuler
            </Form.Button>
            <Form.Button type="submit" className="add__ad__publish__button">
              Modifier
            </Form.Button>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default EditAd;
