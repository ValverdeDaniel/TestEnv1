import axios from 'axios';
import {
  GET_ERRORS,
  GET_CONTRACTS,
  CONTRACT_LOADING,
  CONTRACT_SAVING,
  GET_CONTRACT,
  VOTE_CONTRACT
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
// Set saving state
export const setContractSaving = () => ({
  type: CONTRACT_SAVING,
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

// Get Contract
export const getContract = id => (dispatch) => {
  dispatch(setContractLoading());
  axios
    .get(`/api/contracts/${id}`)
    .then(res => dispatch({
      type: GET_CONTRACT,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_CONTRACT,
      payload: null,
    }));
};

// Get Contract
export const voteContract = (id, data) => (dispatch) => {
  dispatch(setContractSaving());
  console.log('voteContract ', id, data)
  axios
    .put(`/api/contracts/${id}/vote`, data)
    .then(res => dispatch({
      type: VOTE_CONTRACT,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: VOTE_CONTRACT,
      payload: null,
    }));
};