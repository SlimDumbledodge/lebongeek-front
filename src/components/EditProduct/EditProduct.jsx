/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Cookies from 'js-cookie';
import { Button, Form, Input } from 'semantic-ui-react';
import './EditProduct.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeEditProductCategory,
  changeEditProductCategoryValue,
  changeEditProductImage,
  changeEditProductName,
  changeEditProductSerialNumber,
  changeEditProductYear,
  requestEditProduct,
} from '../../actions/editProduct';

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.category.listCategories);
  const categoriesOptions = categories.map((category) => ({
    key: category.id,
    text: category.name,
    value: category.name.toLowerCase(),
  }));

  const currentUser = Cookies.get('user');
  const parsedUser = currentUser ? JSON.parse(currentUser) : '';
  const { id } = useParams();

  const currentProduct = parsedUser.product.find(
    (product) => product.id === id * 1
  );

  const editProductNameValue = useSelector(
    (state) => state.editProduct.editProductName
  );

  const editProductYearValue = useSelector(
    (state) => state.editProduct.editProductYear
  );
  const editProductSerialNumberValue = useSelector(
    (state) => state.editProduct.editProductSerialNumber
  );

  const editProductCategoryValue = useSelector(
    (state) => state.editProduct.editProductCategoryValue
  );

  useEffect(() => {
    if (currentProduct) {
      dispatch(changeEditProductName(currentProduct.title));
      dispatch(changeEditProductYear(currentProduct.year));
      dispatch(changeEditProductSerialNumber(currentProduct.serial_number));
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className="edit__product__container">
      <h2 className="edit__product__title__section">Modifier mon produit</h2>
      <Form
        className="edit__product__form"
        onSubmit={() => {
          dispatch(requestEditProduct(id));
        }}
      >
        <Form.Field
          control={Input}
          required
          label="Nom du produit"
          type="text"
          placeholder="Figurine SpiderMan - 1988"
          value={editProductNameValue}
          onChange={(e, data) => {
            dispatch(changeEditProductName(data.value));
          }}
        />
        <Form.Group widths="equal">
          <Form.Field
            min="1900"
            max="2024"
            control={Input}
            label="Année de sortie :"
            type="text"
            placeholder="1988"
            value={editProductYearValue}
            onChange={(e, data) => {
              dispatch(changeEditProductYear(data.value));
            }}
          />
          <Form.Field
            control={Input}
            label="Numéro de série :"
            type="number"
            value={editProductSerialNumberValue}
            onChange={(e, data) => {
              dispatch(changeEditProductSerialNumber(data.value));
            }}
          />
        </Form.Group>
        <Form.Select
          required
          label="Catégorie :"
          placeholder="Figurine"
          options={categoriesOptions}
          value={editProductCategoryValue}
          onChange={(event, data) => {
            dispatch(changeEditProductCategoryValue(data.value));
            const currentCategory = categoriesOptions.find(
              (category) => data.value === category.value
            );
            console.log(currentCategory.key);
            dispatch(changeEditProductCategory(currentCategory.key));
          }}
        />

        <Form.Field>
          <label htmlFor="upload-photo">Parcourir :</label>
          <input
            type="file"
            id="upload-photo"
            className="add__ad__button__file"
            onChange={(event) => {
              const file = event.target.files[0];
              const formData = new FormData();
              formData.append('image', file);
              dispatch(changeEditProductImage(formData.get('image')), id);
            }}
          />
        </Form.Field>
        <Form.Group className="add__ad__wrapper__cancel__publish__buttons">
          <Form.Button
            id="add__ad__cancel__button"
            onClick={() => {
              navigate(-1);
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

export default EditProduct;
