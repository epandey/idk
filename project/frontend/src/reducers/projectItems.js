import { GET_PROJECT_ITEMS, PROJECT_ITEMS_ERROR } from '../actions/types';

const initialState = {
  projectItems: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_ITEMS:
      return {
        ...state,
        projectItems: payload,
        loading: false,
      };
    case PROJECT_ITEMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
