import axios from 'axios';
import { setAlert } from './alert';

import { GET_CUSTOMER_APPROVALS, CUSTOMER_APPROVALS_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const getCustomerApprovals = () => async (dispatch) => {
  try {
    console.log('getCustomerApprovals called');

    const res = await axios.get('http://localhost:3000/api/customerApproval');
    //const res = await axios.get('api/profile/me');

    console.log('Customer approvals data is- ' + JSON.stringify(res.data));
    //after getting results in res variable send it to reducer with the data as payload
    dispatch({
      type: GET_CUSTOMER_APPROVALS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_APPROVALS_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
