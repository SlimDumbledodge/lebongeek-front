import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { changeAddAdFromHomeCategory } from '../../../actions/addAdFromHome';
import './Categories.scss';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.listCategories);
  const categoriesOptions = categories.map((category) => ({
    key: category.id,
    text: category.name,
    value: category.name.toLowerCase(),
  }));
  const addAdCategory = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeCategory
  );

  return (
    <Form.Select
      label="Catégorie :"
      placeholder="Figurine"
      options={categoriesOptions}
      value={addAdCategory}
      onChange={(event) => {
        const currentCategory = categoriesOptions.find(
          (category) => event.currentTarget.value === category.name
        );
        dispatch(changeAddAdFromHomeCategory(currentCategory.key + 1));
      }}
    />
  );
};

export default Categories;
