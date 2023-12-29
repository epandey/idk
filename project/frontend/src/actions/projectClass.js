import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROJECT_CLASSES, PROJECT_CLASSES_ERROR } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

export const getProjectClasses = () => async (dispatch) => {
  try {
    console.log('getProjectClasses called');

    const res = await axios.get('http://localhost:3000/api/projectclasses');
    //const res = await axios.get('api/profile/me');

    console.log('Project Class data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROJECT_CLASSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_CLASSES_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
