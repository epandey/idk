import { GET_TYPES, TYPES_ERROR } from '../actions/types';

const initialState = {
  projectTypes: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TYPES:
      return {
        ...state,
        projectTypes: payload,
        loading: false,
      };
    case TYPES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
