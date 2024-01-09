import { useDispatch } from 'react-redux';
import './CancelPublishButtons.scss';
import { Form } from 'semantic-ui-react';
import {
  changeAddAdFromHomeCategory,
  changeAddAdFromHomeCategoryValue,
  changeAddAdFromHomeDescription,
  changeAddAdFromHomeImage,
  changeAddAdFromHomeLocation,
  changeAddAdFromHomePrice,
  changeAddAdFromHomeProductSerialNumber,
  changeAddAdFromHomeProductTitle,
  changeAddAdFromHomeProductYear,
  changeAddAdFromHomeState,
} from '../../../actions/addAdFromHome';

function CancelPublish() {
  const dispatch = useDispatch();
  return (
    <Form.Group className="add__ad__wrapper__cancel__publish__buttons">
      <Form.Button
        type="button"
        id="add__ad__cancel__button"
        onClick={() => {
          const form = document.querySelector('#add_ad_from_home_form');
          dispatch(changeAddAdFromHomeProductTitle(''));
          dispatch(changeAddAdFromHomeProductYear(''));
          dispatch(changeAddAdFromHomeProductSerialNumber(''));
          dispatch(changeAddAdFromHomeDescription(''));
          dispatch(changeAddAdFromHomePrice(''));
          dispatch(changeAddAdFromHomeState(''));
          dispatch(changeAddAdFromHomeLocation(''));
          dispatch(changeAddAdFromHomeCategory(''));
          dispatch(changeAddAdFromHomeCategoryValue(''));
          dispatch(changeAddAdFromHomeImage(''));
          form.reset();
        }}
      >
        Annuler
      </Form.Button>
      <Form.Button type="submit" className="add__ad__publish__button">
        Publier
      </Form.Button>
    </Form.Group>
  );
}

export default CancelPublish;
