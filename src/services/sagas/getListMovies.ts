import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { getListBannerSuccess } from "../actions/getListMoviesAction";
import { GET_LIST_BANNER_REQUEST } from "../constants";
import { apiCall } from "./api";

function* fetchListBannerSaga(action: any): any {
  try {
    const res = yield call(apiCall, "GET", ENDPOINTS.GET_LIST_BANNER, action.payload);
    yield put(getListBannerSuccess(res?.content))
  } catch (err) {
    console.log(err);
  }
}

function* getListBannerSaga() {
  yield all([takeLatest(GET_LIST_BANNER_REQUEST, fetchListBannerSaga)]);
}

export default getListBannerSaga;
