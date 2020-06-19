import { FETCH_USER, FETCH_USER_SUCCESS } from './travelerTypes';

const initialState: travelerInfo = {
  name: 'a',
  email: 'b',
  phone: 'c',
  address: {
    zipcode: 0,
  },
};

export const travelerReducer = (
  state = initialState,
  action: travelerAction
) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: { zipcode: action.payload.address.zipcode },
      };
    default:
      return state;
  }
};
