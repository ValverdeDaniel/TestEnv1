import {
  GET_ERRORS,
  GET_CONTRACTS,
  GET_CONTRACT,
  CONTRACT_LOADING,
} from '../actions/types';

const initialState = {
  contracts: [],
  contract: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONTRACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTRACT:
      return {
        ...state,
        contract: action.payload,
        loading: false
      };
    case GET_CONTRACTS:
      return {
        ...state,
        contracts: action.payload,
        loading: false,
      };
    //   case ADD_CONTRACT:
    //     return {
    //       ...state,
    //       contracts: [action.payload, ...state.contracts]
    //     };
    //   case DELETE_CONTRACT:
    //     return {
    //       ...state,
    //       contracts: state.contracts.filter(contract => contract._id !== action.payload)
    //     };
    default:
      return state;
  }
}
