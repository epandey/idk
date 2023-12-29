import {
  SET_ALERT,
  REMOVE_ALERT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from '../actions/types';

//initial state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log('Reducer type is- ' + type);
  //console.log('Reducer payload is' + JSON.stringify(payload));
  //console.log('Token is- ' + payload.token);

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      localStorage.setItem('isAuthenticated', 'true');
      //console.log('Token is-' + payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      console.log('default of reducers/auth.js');
      return state;
  }
}

export default authReducer;
