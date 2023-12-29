import {
  SET_ALERT,
  REMOVE_ALERT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  GET_PROFILE,
  PROFILE_ERROR,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;
  //console.log('GET_PROFILE payload is- ' + JSON.stringify(payload));

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    default:
      return state;
  }
}

export default profileReducer;
