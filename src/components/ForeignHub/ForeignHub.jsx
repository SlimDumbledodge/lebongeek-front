/* eslint-disable react/no-unescaped-entities */
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchForeignUser } from '../../actions/foreignUser';

import baseUrl from '../../assets/baseUrl';

import Banner from './Banner/Banner';
import Description from './Description/Description';
import Inventory from './Inventory/Inventory';

import './ForeignHub.scss';
import Loader from '../Loader/Loader';

const ForeignHub = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const foreignUser = useSelector((state) => state.foreignUser.oneForeignUser);
  const isForeignUserLoaded = useSelector(
    (state) => state.foreignUser.isForeignUserLoaded
  );

  useEffect(() => {
    dispatch(fetchForeignUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!isForeignUserLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Banner banner={`${baseUrl}/images/user/banner/${foreignUser.banner}`} />
      <Description
        username={foreignUser.username}
        avatar={`${baseUrl}/images/user/avatar/${foreignUser.avatar}`}
        description={foreignUser.description}
      />
      <Inventory product={foreignUser.product} />
    </>
  );
};

export default ForeignHub;
