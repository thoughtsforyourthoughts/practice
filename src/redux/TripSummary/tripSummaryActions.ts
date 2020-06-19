import { APPLY_DISCOUNT, APPLY_COUPON } from './tripSummaryTypes';

export const UseDiscount = (discount: number) => {
  return (dispatch: Function) => {
    dispatch(apply_Discount(discount));
  };
};

const apply_Discount = (discount: number) => {
  return {
    type: APPLY_DISCOUNT,
    payload: discount,
  };
};

export const UseCoupon = (coupon: number) => {
  return (dispatch: Function) => {
    dispatch(apply_Coupon(coupon));
  };
};

const apply_Coupon = (coupon: number) => {
  return {
    type: APPLY_COUPON,
    payload: coupon,
  };
};
