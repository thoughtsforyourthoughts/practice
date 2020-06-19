import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_user } from '../../redux/TravelerInfo/travelerActions';

const TravelerInfo: React.FC = () => {
  const travelerInfo: travelerInfo = useSelector(
    (state: store) => state.travelerInfo
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_user());
  }, []);

  return (
    <section>
      <h4>Traveler</h4>
      <p>Name: {travelerInfo.name}</p>
      <p>Email: {travelerInfo.email}</p>
      <p>Phone: {travelerInfo.phone}</p>
      <p>Zip code: {travelerInfo.address.zipcode}</p>
    </section>
  );
};

export default TravelerInfo;
