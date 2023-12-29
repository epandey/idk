import {
  GET_CUSTOMER_APPROVALS,
  CUSTOMER_APPROVALS_ERROR,
} from '../actions/types';

const initialState = {
  customerApprovals: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CUSTOMER_APPROVALS:
      return {
        ...state,
        customerApprovals: payload,
        loading: false,
      };
    case CUSTOMER_APPROVALS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
