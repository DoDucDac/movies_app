import { all, fork } from "redux-saga/effects";
import listUsersSaga from "./listUsersSaga";
import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";
import getListBannerSaga from "./getListMovies";

export function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(registerSaga)]);
  yield all([fork(getListBannerSaga)]);
  yield all([fork(listUsersSaga)]);
}
