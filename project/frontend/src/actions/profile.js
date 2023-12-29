import axios from 'axios';
import { setAlert } from './alert';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  GET_PROFILE,
  PROFILE_ERROR,
} from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

// get current user profile
setAuthToken(localStorage.token);

export const getCurrentProfile = () => async (dispatch) => {
  try {
    console.log('getCurrentProfile called');

    const res = await axios.get('http://localhost:3000/api/profile/me');
    //const res = await axios.get('api/profile/me');

    console.log('Profile data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
