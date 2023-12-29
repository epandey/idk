import { GET_STAGES, STAGES_ERROR } from '../actions/types';

const initialState = {
  projectStages: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STAGES:
      return {
        ...state,
        projectStages: payload,
        loading: false,
      };
    case STAGES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
