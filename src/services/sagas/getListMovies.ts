import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { getListMoviesSuccess, getListBannerSuccess } from "../actions/getListMoviesAction";
import { GET_LIST_MOVIES_REQUEST, GET_LIST_BANNER_REQUEST } from "../constants";
import { apiCall } from "./api";

function* fetchListMoviesSaga(action: any): any {
  try {
    const res = yield call(apiCall, "GET", ENDPOINTS.GET_LIST_MOVIES, action.payload);
    yield put(getListMoviesSuccess(res?.content))
  } catch (err) {
    console.log(err);
  }
}
function* fetchListBannerSaga(action: any): any {
    try {
      const res = yield call(apiCall, "GET", ENDPOINTS.GET_LIST_BANNER, action.payload);
      yield put(getListBannerSuccess(res?.content))
    } catch (err) {
      console.log(err);
    }
  }
  
function* getListMoviesSaga() {
  yield all([takeLatest(GET_LIST_MOVIES_REQUEST, fetchListMoviesSaga)]);
  yield all([takeLatest(GET_LIST_BANNER_REQUEST, fetchListBannerSaga)]);
}

export default getListMoviesSaga;
