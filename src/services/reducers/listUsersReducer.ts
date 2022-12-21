import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from "./../constants/index";
import {
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAILURE,
} from "../constants";

const INITIAL_STATE = {
  loading: false,
  editSuccess: false,
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
    case EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        editSuccess: false,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        editSuccess: true,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        editSuccess: false,
      };

    // case DELETE_USER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case DELETE_USER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // case DELETE_USER_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //   };

    default:
      return state;
  }
};

export default usersReducer;
