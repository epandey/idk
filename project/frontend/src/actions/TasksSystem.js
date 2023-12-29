import axios from 'axios';
export const GET_TASKS = 'GET_TASKS';
export const TASKS_ERROR = 'TASKS_ERROR';


export const getTasks = () => async (dispatch) => {
  try {
    console.log('getTasks called'); // Log to indicate function was called
    
    const res = await axios.get('http://localhost:3000/api/projectTasks');
    
    // Validate if response has data
    if (res && res.data) {
      console.log('Task data is:', JSON.stringify(res.data)); // Log the received data
    } else {
      console.log('No data received from API');
    }
    
    // Dispatch action to reducer
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
    
  } catch (err) {
    // Log the error message and status
    console.error('Error occurred:', err.response ? `${err.response.statusText} (status: ${err.response.status})` : err);
    
    // Dispatch error to reducer
    dispatch({
      type: TASKS_ERROR,
      payload: { msg: err.response ? err.response.statusText : err.message, status: err.response ? err.response.status : null },
    });
  }
};
