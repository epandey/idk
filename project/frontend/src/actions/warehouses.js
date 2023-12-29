import axios from 'axios';
import { setAlert } from './alert';

import { GET_WAREHOUSES, WAREHOUSES_ERROR } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

export const getWarehouses = () => async (dispatch) => {
  try {
    console.log('getWarehouses called');

    const res = await axios.get('http://localhost:3000/api/warehouses');
    //const res = await axios.get('api/profile/me');

    console.log('Warehouses data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_WAREHOUSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WAREHOUSES_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
