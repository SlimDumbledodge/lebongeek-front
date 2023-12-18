import { useDispatch, useSelector } from 'react-redux';
import './States.scss';
import { Form, Select } from 'semantic-ui-react';
import { changeAddAdFromHomeState } from '../../../actions/addAdFromHome';

function States() {
  const dispatch = useDispatch();
  const stateValue = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeState
  );
  const statesOptions = [
    { key: 1, text: 'Neuf', value: 1 },
    { key: 2, text: 'Très bon', value: 2 },
    { key: 3, text: 'Bon', value: 3 },
    { key: 4, text: 'Assez bon', value: 4 },
    { key: 5, text: 'Mauvais', value: 5 },
  ];
  return (
    <Form.Field
      control={Select}
      label="État :"
      placeholder="Neuf"
      options={statesOptions}
      value={stateValue}
      onChange={(event, data) => {
        dispatch(changeAddAdFromHomeState(data.value));
      }}
    />
  );
}

export default States;
