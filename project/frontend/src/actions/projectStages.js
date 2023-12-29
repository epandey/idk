import axios from 'axios';
import { setAlert } from './alert';

import { GET_STAGES, STAGES_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const getStages = () => async (dispatch) => {
  try {
    console.log('getStages called');

    const res = await axios.get('http://localhost:3000/api/stages');
    //const res = await axios.get('api/profile/me');

    console.log('Stages data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_STAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STAGES_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
