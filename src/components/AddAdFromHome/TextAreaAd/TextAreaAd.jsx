import { useDispatch, useSelector } from 'react-redux';
import './TextAreaAd.scss';
import { Form } from 'semantic-ui-react';
import { changeAddAdFromHomeDescription } from '../../../actions/addAdFromHome';

function TextAreaAd() {
  const dispatch = useDispatch();
  const addAdDescription = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeDescription
  );
  return (
    <Form.TextArea
      label="Description :"
      required="require"
      placeholder="Entrez une description du produit..."
      value={addAdDescription}
      onChange={(event) => {
        dispatch(changeAddAdFromHomeDescription(event.target.value));
      }}
    />
  );
}

export default TextAreaAd;
