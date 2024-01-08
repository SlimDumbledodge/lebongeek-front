/* eslint-disable react/no-unescaped-entities */
import { Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import AdTitle from './AdTitle/AdTitle';
import TextAreaAd from './TextAreaAd/TextAreaAd';
import States from './States/States';
import Categories from './Categories/Categories';
import CancelPublishButtons from './CancelPublishButtons/CancelPublishButtons';
import './AddAdFromHome.scss';
import {
  changeAddAdFromHomeImage,
  changeAddAdFromHomeLocation,
  changeAddAdFromHomePrice,
  changeAddAdFromHomeProductSerialNumber,
  changeAddAdFromHomeProductYear,
  sendAddAdFromHome,
} from '../../actions/addAdFromHome';

const AddAd = () => {
  const dispatch = useDispatch();
  const addAdFromHomePriceValue = useSelector(
    (state) => state.addAdFromHome.addAdFromHomePrice
  );
  const addAdFromHomeLocationValue = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeLocation
  );
  const addAdFromHomeProductYearValue = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeProductYear
  );
  const addAdFromHomeProductSerialNumber = useSelector(
    (state) => state.addAdFromHome.addAdFromHomeProductSerialNumber
  );

  return (
    <>
      <h2 className="add__ad__page__title">Déposer une annonce</h2>
      <section className="add__ad__container">
        <Form
          onSubmit={() => {
            dispatch(sendAddAdFromHome());
          }}
        >
          <AdTitle />
          <Form.Field required="require">
            <label htmlFor="upload-photo">Photo : </label>
            <input
              type="file"
              id="upload-photo"
              required
              className="add__ad__button__file"
              onChange={(event) => {
                const file = event.target.files[0];
                const formData = new FormData();
                formData.append('image', file);
                console.log(formData.get('image'));
                dispatch(changeAddAdFromHomeImage(formData.get('image')));
              }}
            />
          </Form.Field>
          <TextAreaAd />
          <Form.Group widths="equal">
            <Form.Input
              required="require"
              type="number"
              label="Prix :"
              placeholder="30"
              value={addAdFromHomePriceValue}
              onChange={(event, data) => {
                dispatch(changeAddAdFromHomePrice(data.value));
              }}
            />
            <Form.Input
              required="require"
              label="Ville :"
              placeholder="Paris"
              value={addAdFromHomeLocationValue}
              onChange={(event, data) => {
                dispatch(changeAddAdFromHomeLocation(data.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Année de sortie :"
              placeholder="1988"
              type="number"
              value={addAdFromHomeProductYearValue}
              onChange={(event, data) => {
                dispatch(changeAddAdFromHomeProductYear(data.value));
              }}
            />
            <Form.Input
              label="Numéro de série :"
              placeholder="048940516"
              type="number"
              value={addAdFromHomeProductSerialNumber}
              onChange={(event, data) => {
                dispatch(changeAddAdFromHomeProductSerialNumber(data.value));
              }}
            />
          </Form.Group>
          <States />
          <Categories />
          <CancelPublishButtons />
        </Form>
      </section>
    </>
  );
};

export default AddAd;
