import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROJECT_ITEMS, PROJECT_ITEMS_ERROR } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

export const getProjectItems = () => async (dispatch) => {
  try {
    console.log('getProjectItems called');

    const res = await axios.get('http://localhost:3000/api/projectitems');
    //const res = await axios.get('api/profile/me');

    console.log('Project item data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROJECT_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ITEMS_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
