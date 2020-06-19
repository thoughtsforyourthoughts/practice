import React from 'react';
import { useSelector } from 'react-redux';

const NewTripSummary: React.FC = () => {
  const tripSummaryCoupon: tripSummary = useSelector(
    (state: store) => state.tripSummary.coupon
  );
  return (
    <section>
      <h3>New Trip Summary</h3>
      <p>Charge - </p>
      <p>Tax - </p>
      <p>Discount - </p>
      <p>Coupon - {tripSummaryCoupon} </p>
      <p>Due Now - </p>
      <p>Due Later - </p>
      <p>Trip Total - </p>
    </section>
  );
};

export default NewTripSummary;
