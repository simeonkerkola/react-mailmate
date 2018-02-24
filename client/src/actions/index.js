import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () =>
  // redux thunk will call this function and pass dispatch as an argument
  async (dispatch) => {
    const res = await axios.get('/api/current_user'); // ajax request of current user

    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  console.log('data', res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data.surveys });
};

export const handleToken = token => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (survey, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', survey);

  history.push('/success');
  dispatch({ type: FETCH_USER, payload: res.data });
};
