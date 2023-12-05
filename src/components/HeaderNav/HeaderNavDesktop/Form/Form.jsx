import { Dropdown } from 'semantic-ui-react';

function Form() {
  const categoriesOptions = [
    { key: 'jv', value: 'jv', text: 'Jeux-vidéo' },
    { key: 'jdr', value: 'jdr', text: 'JDR' },
    { key: 'fig', value: 'fig', text: 'Figurine' },
  ];

  return (
    <form action="">
      <Dropdown
        clearable
        fluid
        search
        selection
        icon="search"
        id="header__desktop__dropdown__search"
        options={categoriesOptions}
        placeholder="Jeux-vidéo..."
      />
    </form>
  );
}

export default Form;
