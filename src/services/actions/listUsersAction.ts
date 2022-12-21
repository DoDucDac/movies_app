import {
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_FAILURE,
  GET_LIST_USER_SUCCESS,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
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

export const editUser = (payload: any) => ({
  type: EDIT_USER_REQUEST,
  payload,
});

export const editUserSuccess = () => ({
  type: EDIT_USER_SUCCESS,
});

export const editUserFailure = () => ({
  type: EDIT_USER_FAILURE,
});

// export const deleteUser = (payload: any) => ({
//   type: DELETE_USER_REQUEST,
//   payload,
// });

// export const deleteUserSuccess = () => ({
//   type: DELETE_USER_REQUEST,
// });

// export const deleteUserFailure = () => ({
//   type: DELETE_USER_REQUEST,
// });
