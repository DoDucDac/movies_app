import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_LIST_USER_REQUEST } from "../constants";

function* fetchGetListUsersSaga(action: any) {
  try {
    //do something
  } catch (err) {
    console.log(err);
  }
}

function* usersSaga() {
  yield all([takeLatest(GET_LIST_USER_REQUEST, fetchGetListUsersSaga)]);
}

export default usersSaga;
