import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UseCoupon } from '../../redux/TripSummary/tripSummaryActions';

const ApplyCoupon: React.FC = () => {
  const dispatch = useDispatch();

  const applyCoupon = () => {
    dispatch(UseCoupon(10));
  };

  return <button onClick={() => applyCoupon()}>Apply Coupon</button>;
};

export default ApplyCoupon;
