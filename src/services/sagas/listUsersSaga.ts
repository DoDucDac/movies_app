import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { getListUserSuccess } from "../actions/listUsersAction";
import { GET_LIST_USER_REQUEST } from "../constants";
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

function* usersSaga() {
  yield all([takeLatest(GET_LIST_USER_REQUEST, fetchGetListUsersSaga)]);
}

export default usersSaga;
