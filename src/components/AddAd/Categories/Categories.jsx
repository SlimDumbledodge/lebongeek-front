import './Categories.scss';
import { Form } from 'semantic-ui-react';

const Categories = () => {
  const categoriesOptions = [
    { key: 1, text: 'Figurine', value: 'figurine' },
    { key: 2, text: 'Jeu-vidéo', value: 'jeu-video' },
    { key: 3, text: 'Comics', value: 'comics' },
    { key: 4, text: 'Mangas', value: 'mangas' },
    { key: 5, text: 'Cosplay', value: 'cosplay' },
  ];
  return (
    <Form.Select
      label="Catégorie :"
      placeholder="Figurine"
      options={categoriesOptions}
    />
  );
};

export default Categories;
