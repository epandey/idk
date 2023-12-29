import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROJECTS,
  PROJECTS_ERROR,
  GET_PROJECT,
  PROJECT_ERROR,
  GET_PROJECT_TASKS,
  PROJECT_TASKS_ERROR,
} from '../actions/types';

// get current user projects where user is the manager
export const getUserProjects = () => async (dispatch) => {
  try {
    console.log('getUserProjects called');
    const res = await axios.post('http://localhost:3000/api/projects/me');

    //console.log('Project data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    console.log('getProjects called');
    const res = await axios.post('http://localhost:3000/api/projects');

    //console.log('Project data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};

//get the project that has been requested with id
export const getProject = (id) => async (dispatch) => {
  try {
    console.log('getProject called with id- ', id);

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify({ id });
    console.log(body);
    const res = await axios.post(
      'http://localhost:3000/api/projects/id',
      body,
      config
    );

    //console.log('Project data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};

// get the project tasks
export const getProjectTasks = (id) => async (dispatch) => {
  try {
    console.log('getProject called with id- ', id);

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify({ id });
    //dconsole.log(body);
    const res = await axios.post(
      'http://localhost:3000/api/projects/tasks',
      body,
      config
    );

    //console.log('Project data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_PROJECT_TASKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_TASKS_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
