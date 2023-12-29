import axios from 'axios';
import { setAlert } from './alert';

import { GET_TYPES, TYPES_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const getTypes = () => async (dispatch) => {
  try {
    console.log('getTypes called');

    const res = await axios.get('http://localhost:3000/api/types');
    //const res = await axios.get('api/profile/me');

    //console.log('Types data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_TYPES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
