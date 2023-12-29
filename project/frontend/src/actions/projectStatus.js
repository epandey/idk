import axios from 'axios';
import { setAlert } from './alert';

import { GET_STATUSES, STATUSES_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const getStatuses = () => async (dispatch) => {
  try {
    console.log('getStatus called');

    const res = await axios.get('http://localhost:3000/api/status');
    //const res = await axios.get('api/profile/me');

    console.log('Status data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_STATUSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STATUSES_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
