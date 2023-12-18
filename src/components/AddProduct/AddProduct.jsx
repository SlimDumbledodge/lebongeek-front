/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import './AddProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductSendRequest,
  changeAddProductCategory,
  changeAddProductCategoryValue,
  changeAddProductSerialNumber,
  changeAddProductTitle,
  changeAddProductYear,
} from '../../actions/addProduct';

const AddProduct = () => {
  const dispatch = useDispatch();
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
  return (
    <div className="add__product__container">
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
            type="text"
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

        <Button id="add__product__piture__button" type="file">
          Image
        </Button>
        <Button id="add__product__confirm__button" type="submit">
          Confirmer
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
