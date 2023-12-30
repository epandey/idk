// ProjectChangeOrder.js
import {
  GET_PROJECT_CHANGE_ORDERS,
  PROJECT_CHANGE_ORDERS_ERROR,
} from "../actions/types";

const initialState = {
  changeOrders: null, // Assuming the initial state for change orders
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_CHANGE_ORDERS:
      return {
        ...state,
        changeOrders: payload,
        loading: false,
      };
    case PROJECT_CHANGE_ORDERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
