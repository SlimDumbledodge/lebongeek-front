/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import './AdTitle.scss';
import { Form } from 'semantic-ui-react';
import { changeAddAdFromHomeProductTitle } from '../../../actions/addAdFromHome';

function AdTitle() {
  const dispatch = useDispatch();
  const addAdTitle = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeProductTitle
  );

  return (
    <Form.Field>
      <label htmlFor="ad-title">Titre de l'annonce :</label>
      <input
        type="text"
        placeholder="Figurine SpiderMan"
        value={addAdTitle}
        onChange={(event) => {
          dispatch(changeAddAdFromHomeProductTitle(event.target.value));
        }}
      />
    </Form.Field>
  );
}

export default AdTitle;
