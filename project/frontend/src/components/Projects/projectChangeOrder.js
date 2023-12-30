// ProjectChangeOrder.js
import axios from "axios";
import {
  GET_PROJECT_CHANGE_ORDERS,
  PROJECT_CHANGE_ORDERS_ERROR,
} from "../actions/types";
import { axiosBaseURL } from "../utils/axios"; // Base URL for axios requests

export const getProjectChangeOrders = () => async (dispatch) => {
  try {
    console.log("getProjectChangeOrders called");
    console.log("Here");

    // Replace 'api/projectchangeorders' with the actual endpoint for project change orders
    const res = await axios.get(axiosBaseURL + "api/projectchangeorders");
    console.log(res);
    console.log("Here 2");
    console.log("Project change order data is- " + JSON.stringify(res.data));

    // Dispatching the result to the Redux store
    dispatch({
      type: GET_PROJECT_CHANGE_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    // Handling errors and dispatching error action
    dispatch({
      type: PROJECT_CHANGE_ORDERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
