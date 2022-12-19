import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/index";

export const userLogin = (payload: any) => ({
  type: USER_LOGIN_REQUEST,
  payload,
});

export const userLoginSuccess = (payload: any) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});

export const userLoginFailure = () => ({
  type: USER_LOGIN_FAILURE,
});
