import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR } from '../actions/types';

//get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/projects');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status },
    });
  }
};
