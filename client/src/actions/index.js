import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () =>
  // redux thunk will call this function and pass dispatch as an argument
  async (dispatch) => {
    const res = await axios.get('/api/current_user'); // ajax request of current user
    dispatch({ type: FETCH_USER, payload: res.data });
  };
