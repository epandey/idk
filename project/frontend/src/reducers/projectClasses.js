import { GET_PROJECT_CLASSES, PROJECT_CLASSES_ERROR } from '../actions/types';

const initialState = {
  projectClasses: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_CLASSES:
      return {
        ...state,
        projectClasses: payload,
        loading: false,
      };
    case PROJECT_CLASSES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
