import { GET_MANAGERS, MANAGERS_ERROR } from '../actions/types';

const initialState = {
  managers: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MANAGERS:
      return {
        ...state,
        managers: payload,
        loading: false,
      };
    case MANAGERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
