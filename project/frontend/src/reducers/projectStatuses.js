import { GET_STATUSES, STATUSES_ERROR } from '../actions/types';

const initialState = {
  projectStatuses: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STATUSES:
      return {
        ...state,
        projectStatuses: payload,
        loading: false,
      };
    case STATUSES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
