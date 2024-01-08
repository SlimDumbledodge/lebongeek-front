/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import './AdTitle.scss';
import { FormField, Input } from 'semantic-ui-react';
import { changeAddAdFromHomeProductTitle } from '../../../actions/addAdFromHome';

function AdTitle() {
  const dispatch = useDispatch();
  const addAdTitle = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeProductTitle
  );

  return (
    <FormField
      id="form-input-control-error-email"
      required="require"
      control={Input}
      label="Titre de l'annonce"
      placeholder="Figurine SpiderMan"
      value={addAdTitle}
      onChange={(event) => {
        dispatch(changeAddAdFromHomeProductTitle(event.target.value));
      }}
    />
  );
}

export default AdTitle;
