import { GET_PROJECT_TASKS, PROJECT_TASKS_ERROR } from '../actions/types';

const initialState = {
  projectTasks: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_TASKS:
      return {
        ...state,
        projectTasks: payload,
        loading: false,
      };
    case PROJECT_TASKS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
