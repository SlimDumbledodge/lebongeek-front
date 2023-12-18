import { useDispatch, useSelector } from 'react-redux';
import { Form, Select } from 'semantic-ui-react';
import {
  changeAddAdFromHomeCategory,
  changeAddAdFromHomeCategoryValue,
} from '../../../actions/addAdFromHome';
import './Categories.scss';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.listCategories);
  const categoriesOptions = categories.map((category) => ({
    key: category.id,
    text: category.name,
    value: category.name.toLowerCase(),
  }));

  const addAdCategoryValue = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeCategoryValue
  );

  return (
    <Form.Field
      control={Select}
      label="Catégorie :"
      placeholder="Figurine"
      options={categoriesOptions}
      value={addAdCategoryValue}
      onChange={(event, data) => {
        dispatch(changeAddAdFromHomeCategoryValue(data.value));
        const currentCategory = categoriesOptions.find(
          (category) => data.value === category.value
        );
        dispatch(changeAddAdFromHomeCategory(currentCategory.key));
      }}
    />
  );
};

export default Categories;
