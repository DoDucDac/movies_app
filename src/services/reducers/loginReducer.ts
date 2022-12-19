import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../constants";

const INITIAL_STATE = {
  loading: false,
  loginSuccess: false,
  userInfo: [],
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loginSuccess: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginSuccess: true,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loginSuccess: false,
        userInfo: [],
      };
    default:
      return state;
  }
};

export default userReducer;
