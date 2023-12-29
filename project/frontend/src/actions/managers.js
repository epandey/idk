import axios from 'axios';
import { setAlert } from './alert';

import { GET_MANAGERS, MANAGERS_ERROR } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

export const getManagers = () => async (dispatch) => {
  try {
    console.log('getManagers called');

    const res = await axios.get('http://localhost:3000/api/managers');
    //const res = await axios.get('api/profile/me');

    console.log('Project Class data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_MANAGERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MANAGERS_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
