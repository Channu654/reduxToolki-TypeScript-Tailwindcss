import * as types from './ActionType';
import axios from 'axios';

// getting data from given url
const getRepoData = (payload) => (dispatch) => {
  dispatch({ type: types.GIT_REPO_REQUEST });
  return axios
    .get('https://fakestoreapi.com/products')
    .then((res) =>
      dispatch({ type: types.GIT_REPO_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GIT_REPO_FAILURE, payload: err }));
};

export { getRepoData };
