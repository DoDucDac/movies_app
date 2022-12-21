import { createBrowserHistory } from "history";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, ROUTES } from "../../constants";
import { showErrorMessage, showSuccessMessage } from "../../utils/messageUtils";
import {
  editUserSuccess,
  getListUserSuccess,
} from "../actions/listUsersAction";
import { GET_LIST_USER_REQUEST } from "../constants";
import { EDIT_USER_REQUEST } from "./../constants/index";
import { apiCall } from "./api";

function* fetchGetListUsersSaga(action: any): any {
  try {
    const res: any = yield call(
      apiCall,
      "GET",
      ENDPOINTS.GET_LIST_USERS,
      action.payload
    );
    yield put(getListUserSuccess(res.content));
  } catch (err) {
    console.log(err);
  }
}

function* fetchEditUserSaga(action: any): any {
  const history = createBrowserHistory();
  try {
    const res: any = yield call(
      apiCall,
      "PUT",
      ENDPOINTS.EDIT_USER,
      action.payload
    );
    yield put(editUserSuccess());
    setTimeout(() => {
      history.push(ROUTES.USERS);
    }, 1500);
    showSuccessMessage(res.message);
  } catch (error: any) {
    showErrorMessage(error);
  }
}

// function* fetchDeleteUserSaga(action: any): any {
//   try {
//     const res: any = yield call(
//       apiCall,
//       "DELETE",
//       ENDPOINTS.DELETE_USER,
//       action.payload
//     );
//   } catch (err) {}
// }

function* usersSaga() {
  yield all([takeLatest(GET_LIST_USER_REQUEST, fetchGetListUsersSaga)]);
  yield all([takeLatest(EDIT_USER_REQUEST, fetchEditUserSaga)]);
  // yield all([takeLatest(DELETE_USER_REQUEST, fetchDeleteUserSaga)]);
}

export default usersSaga;
