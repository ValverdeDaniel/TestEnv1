import {
  GET_ERRORS,
  GET_CONTRACTS,
  GET_CONTRACT,
  CONTRACT_LOADING,
  CONTRACT_SAVING,
  VOTE_CONTRACT
} from '../actions/types';

const initialState = {
  contracts: [],
  contract: {},
  loading: false,
  saving: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONTRACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONTRACT_SAVING:
      return {
        ...state,
        saving: true,
      };
    case GET_CONTRACT:
      return {
        ...state,
        contract: action.payload,
        loading: false
      };
    case VOTE_CONTRACT:
      return {
        ...state,
        contract: action.payload ? action.payload : state.contract,
        saving: false
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
