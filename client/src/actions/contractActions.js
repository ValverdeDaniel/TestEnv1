import axios from 'axios';
import {
  GET_ERRORS,
  GET_CONTRACTS,
  CONTRACT_LOADING,
} from './types';

// Create Contract
export const createContract = (contractData, history) => (dispatch) => {
  axios
    .post('/api/contracts', contractData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// Set loading state
export const setContractLoading = () => ({
  type: CONTRACT_LOADING,
});

// Get Contracts
export const getContracts = () => (dispatch) => {
  dispatch(setContractLoading());
  axios
    .get('/api/contracts')
    .then(res => dispatch({
      type: GET_CONTRACTS,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_CONTRACTS,
      payload: null,
    }));
};
