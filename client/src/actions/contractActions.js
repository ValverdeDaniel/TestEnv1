import axios from 'axios';
import {GET_ERRORS} from './types';

// Create Contract
export const createContract = (contractData, history) => dispatch => {
    axios
      .post('/api/contracts', contractData)
      .then(res => history.push('/dashboard'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
