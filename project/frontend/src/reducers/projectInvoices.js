import {
  GET_PROJECT_INVOICES,
  GET_PROJECT_INVOICES_ERROR,
} from '../actions/types';

const initialState = {
  projectInvoices: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_INVOICES:
      return {
        ...state,
        projectInvoices: payload,
        loading: false,
      };
    case GET_PROJECT_INVOICES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
