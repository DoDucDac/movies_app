import { all, fork } from "redux-saga/effects";
import usersSaga from "./usersSaga";
import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";
import getListMoviesSaga from "./getListMovies";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(registerSaga)]);
  yield all([fork(getListMoviesSaga)]);  
}
