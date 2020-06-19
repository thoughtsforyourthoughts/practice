import axios from 'axios';
import { FETCH_USER_SUCCESS } from './travelerTypes';

export const fetch_user = () => {
  return async (dispatch: Function) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = response.data;
    dispatch(fetch_user_success(data));
  };
};

const fetch_user_success = (users: any) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users[0],
  };
};
