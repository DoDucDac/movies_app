import { AxiosResponse } from "axios";
import { createBrowserHistory } from "history";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, ROUTES } from "../../constants";
import { showErrorMessage, showSuccessMessage } from "../../utils/messageUtils";
import { registerFailure, registerSuccess } from "../actions/registerAction";
import { USER_REGISTER_REQUEST } from "../constants";
import { apiCall } from "./api";

function* fetchRegisterSaga(action: any): any {
  const history = createBrowserHistory();
  try {
    const res: any = yield call(
      apiCall,
      "POST",
      ENDPOINTS.REGISTER,
      action.payload
    );

    yield put(registerSuccess(null));
    showSuccessMessage(res.message);
    setTimeout(() => {
      history.push(ROUTES.LOGIN);
    }, 1500);
  } catch (error) {
    yield put(registerFailure());
    showErrorMessage(error);
  }
}

function* registerSaga() {
  yield all([takeLatest(USER_REGISTER_REQUEST, fetchRegisterSaga)]);
}

export default registerSaga;
