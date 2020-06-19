import {
  APPLY_DISCOUNT,
  APPLY_COUPON,
  CALCULATE_TOTALS,
} from './tripSummaryTypes';

const initialState: tripSummary = {
  numberOfDays: 4,
  perDayCharge: 20,
  rentalCharge: 0,
  tax: 0,
  discount: 0,
  coupon: 0,
  total: 0,
  dueNow: 0,
  dueLater: 0,
};

const tripSummaryReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case APPLY_DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };

    case APPLY_COUPON:
      return {
        ...state,
        coupon: action.payload,
      };
    case CALCULATE_TOTALS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tripSummaryReducer;
