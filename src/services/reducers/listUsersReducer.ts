import {
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAILURE,
} from "../constants";

const INITIAL_STATE = {
  loading: false,
  users: [],
};

const usersReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_LIST_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_LIST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
      };
    default:
      return state;
  }
};

export default usersReducer;
