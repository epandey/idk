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

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    console.log('src/actions/auth load user');
    setAuthToken(localStorage.token);
    console.log(
      'local storage token- loaduser - actions/auth.js - ' + localStorage.token
    );
  }

  try {
    const res = await axios.get('http://localhost:3000/api/login');

    // if the result is success then dispatch USER_LOADED with payload to reducer
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });

    //else if there is error in loading user, then dispatch AUTH_ERROR to reducer
  } catch (err) {
    console.log('Catch part of load user src/actions/auth.js');
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Logging in user
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });
    console.log(body);
    try {
      const res = await axios.post(
        'http://localhost:3000/api/login',
        body,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      //console.log('result is- ' + res.data);
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// LOGOUT / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
