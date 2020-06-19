type action = {
  type: string;
  payload: string | number | object;
};

type travelerAction = {
  type: string;
  payload: travelerInfo;
};

type tripSummary = {
  numberOfDays: number;
  perDayCharge: number;
  rentalCharge: number;
  tax: number;
  discount: number;
  coupon: number;
  total: number;
  dueNow: number;
  dueLater: number;
};

type travelerInfo = {
  name: string;
  email: string;
  phone: string;
  address: {
    zipcode: number;
  };
};

type UserComments = {
  name: string;
  id: number;
};

type PhotoType = {
  url: string;
  id: number;
};

type store = {
  tripSummary: tripSummary;
  travelerInfo: travelerInfo;
};

declare module 'redux-logger';
declare module 'react-redux';
