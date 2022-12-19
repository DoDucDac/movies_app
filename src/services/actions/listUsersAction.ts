import {
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_FAILURE,
  GET_LIST_USER_SUCCESS,
} from "../constants";

export const getListUser = (payload: any) => ({
  type: GET_LIST_USER_REQUEST,
  payload,
});

export const getListUserSuccess = (payload: any) => ({
  type: GET_LIST_USER_SUCCESS,
  payload,
});

export const getListUserFailure = () => ({
  type: GET_LIST_USER_FAILURE,
});
