import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UseDiscount } from '../../redux/TripSummary/tripSummaryActions';

const ApplyDiscount: React.FC = () => {
  const dispatch = useDispatch();
  const tripSummaryDetails: tripSummary = useSelector(
    (state: store) => state.tripSummary
  );

  const applyDiscount = () => {
    dispatch(UseDiscount(10));
  };

  return <button onClick={() => applyDiscount()}>Apply Discount</button>;
};

export default ApplyDiscount;
