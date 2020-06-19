import React from 'react';
import { useSelector } from 'react-redux';
import ApplyCoupon from './ApplyCoupon';
import ApplyDiscount from './ApplyDiscount';

const TripSummary: React.FC = () => {
  const tripSummaryDetails: tripSummary = useSelector(
    (state: store) => state.tripSummary
  );

  const calculateTotal = (): number => {
    return (
      calculateRentalCharge() -
      tripSummaryDetails.discount -
      tripSummaryDetails.coupon +
      calculateTax()
    );
  };

  const calculateSubTotal = () => {
    return (
      calculateRentalCharge() -
      tripSummaryDetails.discount -
      tripSummaryDetails.coupon
    );
  };

  const calculateTax = (): number => {
    return (
      (calculateRentalCharge() -
        tripSummaryDetails.discount -
        tripSummaryDetails.coupon) *
      0.1
    );
  };

  const calculateDueNow = (): number => {
    return calculateTotal() / 2;
  };

  const calculateDueLater = () => {
    return calculateTotal() / 2;
  };

  const calculateRentalCharge = (): number => {
    return tripSummaryDetails.numberOfDays * tripSummaryDetails.perDayCharge;
  };

  return (
    <section>
      <h3>Summary of Charges</h3>
      <p>
        {tripSummaryDetails.numberOfDays} * {tripSummaryDetails.perDayCharge} -{' '}
        {calculateRentalCharge()}
      </p>
      <p>Discount - {tripSummaryDetails.discount}</p>
      <p>Coupon - {tripSummaryDetails.coupon}</p>
      <p>Sub Total - {calculateSubTotal()}</p>
      <p>Tax - {calculateTax()}</p>
      <p>Total - {calculateTotal()}</p>
      <p>Due Now - {calculateDueNow()}</p>
      <p>Due Later - {calculateDueLater()}</p>
      <br />
      <ApplyCoupon></ApplyCoupon>
      <ApplyDiscount></ApplyDiscount>
    </section>
  );
};

export default TripSummary;
