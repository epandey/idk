import {
  SET_ALERT,
  REMOVE_ALERT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  GET_PROJECTS,
  PROJECTS_ERROR,
  GET_PROJECT,
  PROJECT_ERROR,
} from '../actions/types';

const initialState = {
  projects: null,
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;
  //console.log('GET_PROJECT payload is- ' + JSON.stringify(payload));

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case PROJECTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default profileReducer;
