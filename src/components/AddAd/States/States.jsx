import './States.scss';
import { Form } from 'semantic-ui-react';

function States() {
  const statesOptions = [
    { key: 1, text: 'Neuf', value: 'neuf' },
    { key: 2, text: 'Très bon', value: 'tres-bon' },
    { key: 3, text: 'Bon', value: 'bon' },
    { key: 4, text: 'Assez bon', value: 'assez-bon' },
    { key: 5, text: 'Mauvais', value: 'mauvais' },
  ];
  return (
    <Form.Select label="État :" placeholder="Neuf" options={statesOptions} />
  );
}

export default States;
