import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../constants";

export const registerRequest = (payload: any) => ({
  type: USER_REGISTER_REQUEST,
  payload,
});

export const registerSuccess = (payload: any) => ({
  type: USER_REGISTER_SUCCESS,
  payload,
});

export const registerFailure = () => ({
  type: USER_REGISTER_FAILURE,
});
