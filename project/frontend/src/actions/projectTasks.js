import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROJECT_TASKS, PROJECT_TASKS_ERROR } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

export const getProjectTasks = () => async (dispatch) => {
  try {
    console.log('getProjectTasks called');
    // const res1=await axios.get('http://localhost:3000/api/project');
    const res = await axios.get('http://localhost:3000/api/projectTasks');
    //const res = await axios.get('api/profile/me');
    // console.log('project data',+JSON.stringify(res1.data));
    console.log('Project Task data is- ' + JSON.stringify(res.data));
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
