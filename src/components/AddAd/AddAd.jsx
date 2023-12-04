/* eslint-disable react/no-unescaped-entities */
import { Form } from 'semantic-ui-react';
import AdTitle from './AdTitle/AdTitle';
import TextArea from './TextArea/TextArea';
import AddPhotoButton from './AddPhotoButton/AddPhotoButton';
import States from './States/States';
import Categories from './Categories/Categories';
import Checkboxs from './Checkboxs/Checkboxs';
import CancelPublishButtons from './CancelPublishButtons/CancelPublishButtons';
import './AddAd.scss';

const AddAd = () => {
  return (
    <>
      <h2 className="add__ad__page__title">Déposer une annonce</h2>
      <section className="add__ad__container">
        <Form>
          <AdTitle />
          <TextArea />
          <AddPhotoButton />
          <States />
          <Categories />
          <Checkboxs />
          <CancelPublishButtons />
        </Form>
      </section>
    </>
  );
};

export default AddAd;
